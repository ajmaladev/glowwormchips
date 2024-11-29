import HeroSection from "../MainSections/Category/HeroSection";

import { Category, Product } from "../../../type";
import ProductListing from "../MainSections/Category/ProductListing";
import Description from "../MainSections/Category/Description";
import CategoryContainer from "../MainSections/CategoryContainer";

export default function CategoryPage({ category, products }: { category: Category, products: Product[] }) {
  return <>
    <HeroSection 
      title={category.title} 
      sub_description={category.short_description} 
      color={category.color}
    />
    <ProductListing bg={category.bg_image} products={products} />
    <CategoryContainer id={category.id} />
    <Description
      description={category.description}
      disc_bg={category.disc_bg}
    />
  </>
}
