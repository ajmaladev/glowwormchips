import HeroSection from "../MainSections/Category/HeroSection";

import { Category, Product } from "../../../type";
import ProductListing from "../MainSections/Category/ProductListing";
import Description from "../MainSections/Category/Description";
import CategoryContainer from "../MainSections/CategoryContainer";
import BestSellers from "../MainSections/BestSellers";

const generateCategoryStructuredData = (
  category: Category,
  products: Product[]
) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: category.title,
  description: category.description,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        image: product.image,
        brand: {
          "@type": "Brand",
          name: "GLOW WORM CHIPS",
        },
      },
    })),
  },
});

export default function CategoryPage({
  category,
  products,
  categories,
  bestSellers,
}: {
  category: Category;
  products: Product[];
  categories: Category[];
  bestSellers: Product[];
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateCategoryStructuredData(category, products)
          ),
        }}
      />
      <HeroSection
        title={category.title}
        sub_description={category.short_description}
        color={category.color}
      />
      <ProductListing bg={category.bg_image} products={products} />
      <CategoryContainer id={category.id} categories={categories} />
      <BestSellers products={bestSellers} />
      <Description
        description={category.description}
        disc_bg={category.disc_bg}
      />
    </>
  );
}
