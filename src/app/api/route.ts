import { NextResponse } from 'next/server';
import data from '../../../public/data.json';

export async function GET() {
  try {
    return NextResponse.json({
      categories: data.categories,
      products: data.products
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}