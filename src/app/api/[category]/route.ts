import { Category, Product } from "../../../../type";
import data from '../../../../public/data.json';

type RouteParams = {
  params: Promise<{
    category: string
  }>
}

export async function GET(
  request: Request,
  { params }: RouteParams
) {
  try {
    const param = await params;
    const categorySlug = param.category;
    const category = data.categories.find((c: Category) => c.slug === categorySlug);
    
    if (!category) {
      return Response.json(
        { error: `Category '${categorySlug}' not found` },
        { status: 404 }
      );
    }

    const categoryProducts = data.products.filter(product => product.categoryId === category.id);
    const otherCategories = data.categories.filter((c: Category) => c.id !== category.id);
    const bestSellers = data.products.filter((product: Product) => product.tags?.includes("Best Seller"));
    
    return Response.json({
      category,
      products: categoryProducts,
      otherCategories,
      bestSellers
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}