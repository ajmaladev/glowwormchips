/** @type {import('next').NextConfig} */
const repoName = 'glowwormchips';

const nextConfig = {
  // Enable React strict mode
  // assetPrefix: `/${repoName}/`,
  // basePath: `/${repoName}`,
  reactStrictMode: true,
  trailingSlash: true,
  // output: "export",

  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp'],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ];
  },

  poweredByHeader: false,
  compress: true,

  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react', '@radix-ui/react-icons'],
  },
};

export default nextConfig;
