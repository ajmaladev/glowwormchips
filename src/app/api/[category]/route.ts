// Add interfaces based on the actual data structure

import { Category, Product } from "../../../../type";


export async function GET(
  request: Request,
) {
  try {
    const { pathname } = new URL(request.url);
    const category = pathname.split("/").pop();
    
    // Convert category to number since IDs are numeric
    const categoryId = parseInt(category || '', 10);
    
    if (!category || isNaN(categoryId)) {
      return Response.json(
        { error: 'Invalid category parameter' },
        { status: 400 }
      );
    }

    let data;
    try {
      const jsonData = await import(`../../../../public/data.json`);
      data = jsonData.default;
    } catch (error) {
      console.error('Data loading error:', error);
      return Response.json(
        { error: 'Failed to load product data' },
        { status: 500 }
      );
    }

    const categoryData = data.categories.find((c: Category) => c.id === categoryId);
    
    if (!categoryData) {
      return Response.json(
        { error: `Category '${categoryId}' not found` },
        { status: 404 }
      );
    }

    const products = data.products.filter((p: Product) => p.categoryId === categoryId);
    
    return Response.json({
      category: categoryData,
      products: products
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
