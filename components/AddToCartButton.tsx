// components/AddToCartButton.tsx
'use client';

import { useState } from 'react';
import { addToCart } from '@/actions/cart';

export const AddToCartButton = ({ productId }: { productId: string }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = async () => {
    setIsAdding(true);
    // TODO: We need to securely send this productId to the Tesco backend.
    // We do NOT want to build a separate route in app/api/cart/route.ts.
    const res = await addToCart(productId)
    console.log("Add Response: ", res)
    
    setIsAdding(false);
  };

  return (
    <button onClick={handleAdd} disabled={isAdding} className="bg-blue-600 text-white px-4 py-2">
      {isAdding ? 'Adding...' : 'Add to Cart'}
    </button>
  );
};

// PROBLEM 5 - Server Actions

// Your Mission

// Create a Server Action: 
// Create a new file (e.g., actions/cart.ts). 
// Write an asynchronous function named addToCart(productId: string). 
// Inside it, use console.log to prove it's running on the server. 
// You must use the correct Next.js directive to mark this file as containing server actions.

// Connect the Client: 
// Import your new addToCart Server Action into the AddToCartButton component and execute it inside the handleAdd function.