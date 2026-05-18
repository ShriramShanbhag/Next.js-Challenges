import { AddToCartButton } from '@/components/AddToCartButton';
import { Product } from '@/types';

const getProducts = async ():Promise<Product[]> => {
     const mockData: Product[] = [
          { id: '1', name: 'Organic Bananas', price: 1.20 },
          { id: '2', name: 'Whole Milk 2L', price: 1.50 },
          { id: '3', name: 'Sourdough Bread', price: 2.00 }
        ];
    return new Promise((resolve) => setTimeout(() => resolve(mockData), 1000));
  }

export default async function GroceriesPage() {

  const products = await getProducts()

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
// PROBLEM 2 STATEMENT
// Your Mission
// Implement Time-Based Revalidation: Modify the fetch call in the code above so that Next.js caches the result, but automatically revalidates (refetches) the data every 3600 seconds (1 hour). Provide the updated getProducts function.

// The Flash Sale Problem: Imagine Tesco suddenly initiates a massive "Flash Sale" on organic produce, changing prices immediately. Your cache is currently set to live for an hour. Conceptually, what Next.js feature would you use to force the cache to update instantly without waiting for the 3600 seconds to expire?

