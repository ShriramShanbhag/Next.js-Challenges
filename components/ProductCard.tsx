import { Product } from '@/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">£{product.price.toFixed(2)}</p>
    </div>
  );
}