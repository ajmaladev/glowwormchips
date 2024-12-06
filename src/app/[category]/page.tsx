import CategoryPage from "@/components/Pages/CategoryPage";
import data from '../../../public/data.json';
import { Category, Product } from "../../../type";

type PageProps = {
  params: Promise<{
    category: string
  }>
}

export const dynamic = 'force-static'
export const revalidate = false
export const fetchCache = 'force-cache'

export function generateStaticParams() {
  return data.categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const param = await params;
  const category = data.categories.find((c: Category) => c.slug === param.category);
  const categoryProducts = data.products.filter(product => product.categoryId === category?.id);
  
  // Generate optimized product names list (limited to top 3-4 products)
  const topProducts = categoryProducts.slice(0, 4).map(p => p.name).join(', ');
  
  // Get best sellers if any
  const bestSellers = categoryProducts
    .filter(p => p.tags?.includes('Best Seller'))
    .map(p => p.name)
    .slice(0, 2)
    .join(' and ');

  // Create an optimized description
  const description = `Explore GLOW WORM's premium ${category?.name}: ${topProducts}. ${
    bestSellers ? `Featured bestsellers: ${bestSellers}.` : ''
  } ${category?.short_description}. Shop Kerala's finest snacks in Malappuram.`.slice(0, 160);

  // Organization details from Footer
  const organizationInfo = {
    name: "GLOW WORM Premium Snacks & Food Products",
    description: "At GLOW WORM, we specialize in bringing the rich flavors of diverse snacks and premium products to markets worldwide. our selection promises exceptional taste and quality in every bite.",
    email: "glowwormchips@gmail.com",
    phone: ["+919995700791", "+919895193123"],
    socialLinks: [
      "https://www.instagram.com/gwglowworm?igsh=ZnA2ZTQ5dDNqdWow",
      "https://www.facebook.com/share/18a2TKRW6e/?mibextid=LQQJ4d",
      "https://maps.app.goo.gl/Z4GcQEdssMu9E6Ha7?g_st=iw"
    ]
  };

  return {
    title: `GLOW WORM ${category?.title || ''}`,
    description,
    keywords: [
      'Kerala snacks',
      'banana chips',
      category?.title?.toLowerCase() || '',
      'traditional snacks',
      'Malappuram snacks',
      'premium chips',
      'authentic Kerala food',
      'Indian snacks',
      'glow worm chips',
      'online snacks store',
      ...categoryProducts.map(p => p.name.toLowerCase()),
      ...categoryProducts.map(p => p.alt.toLowerCase()),
      bestSellers ? `best selling ${category?.name}` : '',
    ].filter(Boolean).join(', '),
    openGraph: {
      title: `GLOW WORM ${category?.title || ''} | Premium Kerala Snacks`,
      description: category?.description,
      url: `https://glowwormchips.com/${category?.slug}`,
      siteName: organizationInfo.name,
      images: [
        {
          url: category?.image || '',
          width: 800,
          height: 600,
          alt: category?.alt || '',
        },
        ...categoryProducts.filter(p => p.tags?.includes('Best Seller')).map(p => ({
          url: p.image,
          width: 800,
          height: 600,
          alt: p.alt,
        }))
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `GLOW WORM ${category?.title || ''} | Premium Kerala Snacks`,
      description: `${category?.description} Featured products: ${bestSellers || topProducts}`,
      images: [category?.image || '', ...categoryProducts.filter(p => p.tags?.includes('Best Seller')).map(p => p.image)],
    },
    alternates: {
      canonical: `http://localhost:3000/${category?.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
    authors: [{ 
      name: organizationInfo.name,
      url: organizationInfo.socialLinks[0]
    }],
    category: category?.name,
    creator: organizationInfo.name,
    publisher: organizationInfo.name,
    other: {
      'product-category': category?.name,
      'available-products': topProducts,
      'best-sellers': bestSellers || 'All products are customer favorites',
      'category-description': category?.short_description,
      'product-count': categoryProducts.length.toString(),
      'organization': {
        email: organizationInfo.email,
        telephone: organizationInfo.phone,
        contactPerson: 'Yaser Arafath',
        contactRole: 'Grievance officer',
        socialProfiles: organizationInfo.socialLinks,
        location: 'Malappuram, Kerala, India'
      }
    },
    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
    }
  };
}

export default async function Page({ params }: PageProps) {
  const param = await params;
  const categorySlug = param.category;
  const category: any = data.categories.find((c: Category) => c.slug === categorySlug) || {};
  const products = data.products.filter((product: Product) => product.categoryId === category.id);
  
  return <CategoryPage category={category} products={products} />;
}
