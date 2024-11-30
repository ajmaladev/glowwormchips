import CategoryPage from "@/components/Pages/CategoryPage";

type PageProps = {
  params: Promise<{
    category: string
  }>
}

const getCategoryData = async (category: string) => {
  const encodedCategory = encodeURIComponent(category);
  // const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const baseUrl = "https://glowwormchips.vercel.app"
  const url = new URL(`/api/${encodedCategory}`, baseUrl);
  
  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch category data: ${res.statusText}`);
  }
  return res.json();
};

export default async function Page({ params }: PageProps) {
  try {
    const param = await params;
    const data = await getCategoryData(param.category);
    return <CategoryPage category={data.category} products={data.products} />
  } catch (error) {
    console.error('Error fetching category data:', error);
    return <div>Error loading category data</div>;
  }
}
