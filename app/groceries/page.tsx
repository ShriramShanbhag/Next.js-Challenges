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

