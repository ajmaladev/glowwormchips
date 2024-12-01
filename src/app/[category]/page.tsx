import CategoryPage from "@/components/Pages/CategoryPage";
import data from '../../../public/data.json';

type PageProps = {
  params: Promise<{
    category: string
  }>
}

export const dynamic = 'force-static'

export function generateStaticParams() {
  return data.categories.map((category) => ({
    category: category.name.toLowerCase().replace(/ /g, '-'),
  }));
}

async function getData(category: string) {
  const encodedCategory = encodeURIComponent(category);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const url = new URL(`/api/${encodedCategory}`, baseUrl);
  
  const res = await fetch(url.toString(), {
    cache: 'force-cache'
  });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch category data: ${res.statusText}`);
  }
  return res.json();
}

export default async function Page({ params }: PageProps) {
  try {
    const param = await params;
    const data = await getData(param.category);
    return <CategoryPage category={data.category} products={data.products} />
  } catch (error) {
    console.error('Error fetching category data:', error);
    return <div>Error loading category data</div>;
  }
}
