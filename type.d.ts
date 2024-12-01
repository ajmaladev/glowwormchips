export interface Category {
  id: number;
  name: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  short_description: string;
  bg_image: string;
  color: string;
  disc_bg: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  alt: string;
  categoryId: number;
  tags?: string[];
}

export type CategoriesData = {
  categories: Category[];
  products: Product[];
};
