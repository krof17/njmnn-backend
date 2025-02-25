'use client';

import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function Checkout() {
  useEffect(() => {
    const redirectToCheckout = async () => {
      const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
      if (!cartItems.length) return;

      const stripe = await stripePromise;
      const response = await fetch('http://localhost:5000/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }),
      });
      const { id } = await response.json();

      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: id });
      }
    };

    redirectToCheckout();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <p>Redirecting to Stripe Checkout...</p>
    </div>
  );
}