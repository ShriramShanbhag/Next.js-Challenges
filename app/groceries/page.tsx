'use client';

import { useState, useEffect } from 'react';
import { AddToCartButton } from '@/components/AddToCartButton';
import { Product } from '@/types';

export default function GroceriesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      // In a real app, this hits Tesco's backend. 
      // We'll mock the fetch and the data for this exercise.
      // const res = await fetch('https://api.tesco-mock.com/v1/products');
      
      setTimeout(() => {
        const mockData: Product[] = [
          { id: '1', name: 'Organic Bananas', price: 1.20 },
          { id: '2', name: 'Whole Milk 2L', price: 1.50 },
          { id: '3', name: 'Sourdough Bread', price: 2.00 }
        ];
        setProducts(mockData);
        setIsLoading(false);
      }, 1000);
    }
    
    getProducts();
  }, []);

  if (isLoading) return <div>Loading fresh produce...</div>;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Fresh Groceries</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">£{product.price.toFixed(2)}</p>
            <AddToCartButton productId={product.id} />
          </div>
        ))}
      </div>
    </main>
  );
}

// Requirements:

// Server-Side Fetching: 
// The GroceriesPage must fetch data on the server so the HTML is fully rendered before it reaches the browser (crucial for SEO). 
// Remove the useEffect and useState from the page.

// Mocking the Fetch: 
// You can create a simple async function inside or outside the component that returns the mockData array directly (or via a Promise) to simulate the server-side fetch.

// Component Boundaries: 
// Ensure the AddToCartButton remains fully interactive. 
// Next.js enforces strict rules about where client-side interactivity can live when mixed with Server Components.