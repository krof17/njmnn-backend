'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  price: number;
  color: string;
}

export default function Products() {
  const [rashguards, setRashguards] = useState<Product[]>([]);
  const [cart, setCart] = useState<{ id: string; quantity: number }[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setRashguards(data));
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const addToCart = (product: Product) => {
    const newCart = [...cart, { id: product._id, quantity: 1 }];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">NJMNN Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rashguards.map((item) => (
            <div key={item._id} className="p-4 bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-300">${item.price}</p>
              <p className="text-gray-400">{item.color}</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-3 px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <Link href="/checkout" className="mt-6 inline-block px-6 py-2 bg-green-500 rounded hover:bg-green-600">
            Checkout ({cart.length} items)
          </Link>
        )}
      </main>
    </div>
  );
}