// components/CartHeader.tsx
'use client';

import { useState } from 'react';
import { addToCart } from '@/actions/cart';

export function CartHeader({ initialCount }: { initialCount: number }) {
  // Currently, we wait for the server before updating this count
  const [cartCount, setCartCount] = useState(initialCount);

  const handleAdd = async () => {
    // 1. We must WAIT 5 seconds for the action to finish...
    const res: any = await addToCart("apple-123");
    
    // 2. ...before the user sees the number go up. Too slow!
    if (res.status === 200) {
      setCartCount((prev) => prev + 1);
    }
  };

  return (
    <div className="flex justify-between p-4 bg-gray-100">
      <h1 className="font-bold">Tesco Groceries</h1>
      <div className="flex gap-4">
        <span>🛒 Cart: {cartCount} items</span>
        <button onClick={handleAdd} className="bg-blue-600 text-white px-2 py-1 rounded">
          Buy Apple
        </button>
      </div>
    </div>
  );
}

// PROBLEM - 6

// Refactor CartHeader.tsx to use the useOptimistic hook.

// The user should see the cart count increase to initialCount + 1 immediately when they click the button.

// The addToCart Server Action should run in the background.

// (Optional but good practice) Use React's useTransition hook or an async wrapper to ensure the optimistic state rolls back if addToCart throws an error.