import { Product } from '@/types';
import { ProductCard } from '@/components/ProductCard';

// Simulated slow backend call (Takes 3 seconds)
async function getCategoryProducts(category: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return [
    { id: '1', name: `Organic ${category} 1`, price: 2.0 },
    { id: '2', name: `Fresh ${category} 2`, price: 3.5 }
  ];
}

// Note: Assume we are using Next.js 15+
export default async function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category; 
  const products = await getCategoryProducts(category);

  return (
    <main>
      <h1 className="text-2xl font-bold capitalize mb-4">{category}</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </main>
  );
}

// PROBLEM 3

// Your Mission
// Fix the Page: 
// The CategoryPage is fundamentally broken for a modern Next.js Server Component. 
// Fix the data fetching logic, and correctly unwrap the dynamic params (Hint: In Next.js 15+, params are asynchronous).

// Create the Layout: 
// Tesco wants a persistent sidebar. Write the code for app/groceries/layout.tsx. 
// It should render a sidebar on the left (with static links like "Dairy" and "Produce") and the dynamic page content on the right.

// Implement a Loading State: 
// Because the fetch takes 3 seconds, users currently experience a frozen screen when navigating. 
// Using Next.js file-system conventions OR React <Suspense>, 
// provide the code needed to show a temporary loading state (e.g., <div>Loading products...</div>) while the products fetch, 
// without unmounting the sidebar layout.