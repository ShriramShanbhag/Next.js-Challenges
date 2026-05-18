'use client';

import { useState } from 'react';

export const AddToCartButton = ({ productId }: { productId: string }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    setIsAdding(true);
    // Simulating an API call to the cart service
    setTimeout(() => {
      setIsAdding(false);
      alert(`Product ${productId} added to cart!`);
    }, 500);
  };

  return (
    <button 
      onClick={handleAdd}
      disabled={isAdding}
      className="bg-blue-600 text-white px-4 py-2 rounded mt-2 disabled:bg-gray-400"
    >
      {isAdding ? 'Adding...' : 'Add to Cart'}
    </button>
  );
};