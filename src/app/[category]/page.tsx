import CategoryPage from "@/components/Pages/CategoryPage";
import data from '../../../public/data.json';
import { Category, Product } from "../../../type";
import { organizationInfo } from '@/lib/constants';

type PageProps = {
  params: Promise<{
    category: string
  }>
}

export const dynamic = 'force-static'
export const revalidate = false
export const fetchCache = 'force-cache'

const getData = async(category:string) =>{
  const apiUrl = "http://localhost:3000/api"
  const hostedUrl = "https://glowwormchips.com/api"
  const response = await fetch(`${hostedUrl}/${category}`,{
    cache: 'force-cache'
  });
  return response.json();
}

export function generateStaticParams() {
  return data.categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const param = await params;
  const category = data.categories.find((c: Category) => c.slug === param.category);
  const categoryProducts = data.products.filter(product => product.categoryId === category?.id);
  
  const topProducts = categoryProducts.slice(0, 4).map(p => p.name).join(', ');
  const bestSellers = categoryProducts
    .filter(p => p.tags?.includes('Best Seller'))
    .map(p => p.name)
    .slice(0, 2)
    .join(' and ');

  const description = `Buy premium ${category?.name} online from GLOW WORM CHIPS Kerala. ${
    bestSellers ? `Popular choices include ${bestSellers}.` : ''
  } Fresh, handmade ${category?.short_description}. Free shipping across Kerala. Order now!`.slice(0, 160);

  return {
    title: `Buy ${category?.title || ''} Online | GLOW WORM CHIPS Kerala`,
    description,
    keywords: [
      `buy ${category?.name?.toLowerCase()} online`,
      `${category?.name?.toLowerCase()} Kerala`,
      `${category?.name?.toLowerCase()} Malappuram`,
      'Kerala snacks online',
      'traditional Kerala snacks',
      'premium Kerala chips',
      'authentic Kerala food',
      'buy Indian snacks online',
      'GLOW WORM snacks',
      'online snacks delivery',
      ...categoryProducts.map(p => `buy ${p.name.toLowerCase()} online`),
      bestSellers ? `best selling ${category?.name?.toLowerCase()}` : '',
    ].filter(Boolean),
    openGraph: {
      title: `Buy ${category?.title || ''} Online | GLOW WORM CHIPS Kerala`,
      description,
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
      title: `Buy ${category?.title || ''} Online | GLOW WORM CHIPS Kerala`,
      description,
      images: [category?.image || '', ...categoryProducts.filter(p => p.tags?.includes('Best Seller')).map(p => p.image)],
    },
    alternates: {
      canonical: `https://glowwormchips.com/${category?.slug}`,
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
  const { category, products, otherCategories, bestSellers } = await getData(param.category)
  return <CategoryPage 
    category={category} 
    products={products} 
    categories={otherCategories} 
    bestSellers={bestSellers}
  />;
}
