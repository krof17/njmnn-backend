import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Stripe from 'stripe';

dotenv.config();
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(express.json());
app.use(cors());

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}
connectDB();

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  color: String,
});
const Product = mongoose.model('Product', productSchema);

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// New Checkout Endpoint
app.post('/api/checkout', async (req, res) => {
  const { items } = req.body; // Array of { id, quantity }
  try {
    const products = await Product.find({ _id: { $in: items.map(item => item.id) } });
    const lineItems = products.map((product, index) => ({
      price_data: {
        currency: 'usd',
        product_data: { name: product.name },
        unit_amount: Math.round(product.price * 100), // Cents
      },
      quantity: items[index].quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/products',
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error('Checkout error:', err);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));