import Image from "next/image";
import { BouncyMotion } from "@/components/Globals/BouncyMotion";

const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    icon: "/social/Instagram.png",
    href: "https://www.instagram.com/gwglowworm?igsh=ZnA2ZTQ5dDNqdWow",
    ariaLabel: "Visit our Instagram page"
  },
  {
    id: 2,
    name: "WhatsApp",
    icon: "/social/WhatsApp.png",
    href: "https://wa.me/919995700791?text=Hi%20there",
    ariaLabel: "Contact us on WhatsApp"
  },
  {
    id: 3,
    name: "Facebook",
    icon: "/social/Facebook.png",
    href: "https://www.facebook.com/share/18a2TKRW6e/?mibextid=LQQJ4d",
    ariaLabel: "Visit our Facebook page"
  },
  {
    id: 4,
    name: "Google Maps",
    icon: "/social/Google Maps.png",
    href: "https://maps.app.goo.gl/Z4GcQEdssMu9E6Ha7?g_st=iw",
    ariaLabel: "Find us on Google Maps"
  }
];

// Update organization schema with more detailed information
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GLOW WORM Premium Snacks & Food Products",
  "description": "Leading manufacturer and distributor of premium snacks and food products, specializing in high-quality chips and global flavors",
  "email": "glowwormchips@gmail.com",
  "telephone": ["+919995700791", "+919895193123"],
  "sameAs": [
    "https://www.instagram.com/gwglowworm?igsh=ZnA2ZTQ5dDNqdWow",
    "https://www.facebook.com/share/18a2TKRW6e/?mibextid=LQQJ4d",
    "https://maps.app.goo.gl/Z4GcQEdssMu9E6Ha7?g_st=iw"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "Kerala",
    "addressLocality": "Malappuram"
  }
};

export const Footer = () => {
  return (
    <>
    <footer
      className="p-8 bg-[#2d2d2d] min-h-screen flex flex-col items-center justify-between"
      role="contentinfo"
      aria-label="Site footer"
      id="footer"
    >
      {/* Add JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Updated Logo Section */}
      <header className="relative z-10 mb-8 w-full">
        <h2 className="text-center text-white text-2xl md:text-[28.13px] font-medium font-['Jost'] tracking-wider">
          GLOW WORM Premium Snacks & Food Products
        </h2>
        <p className="text-center text-white text-lg md:text-[28.13px] font-medium font-['Jost'] tracking-wider mt-8 mb-6">
          <small>© 2024 CR Glow worm. All rights reserved. Premium Snack Manufacturers</small>
        </p>
      </header>

      {/* Updated Main Content */}
      <article className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto py-8 md:py-12 px-4">
        <h3 className="sr-only">About GLOW WORM Premium Snacks</h3>
        <p className="mx-auto text-center text-white text-xl md:text-[28.13px] font-normal font-['Jost'] leading-relaxed md:leading-[36.92px] tracking-wider mb-8 md:mb-12"
           aria-label="Company description">
          GLOW WORM is a leading manufacturer of premium quality snacks and food products in Kerala, India. 
          We take pride in crafting exceptional chips and snacks using carefully selected ingredients and 
          authentic flavors. Our commitment to quality and taste has made us a trusted name in the global 
          snack food industry, serving markets worldwide with our diverse range of products.
        </p>

        {/* Updated Contact Information */}
        <address 
          className="text-center text-white text-lg md:text-[28.13px] font-medium font-['Jost'] leading-relaxed md:leading-[36.92px] tracking-wider not-italic"
          itemScope 
          itemType="https://schema.org/Organization"
          aria-label="Contact information"
        >
          <h3 className="sr-only">Contact Information</h3>
          <p className="mb-4">
            <strong>Business Email: </strong>
            <a
              href="mailto:glowwormchips@gmail.com"
              className="hover:underline"
              itemProp="email"
              aria-label="Send email to GLOW WORM"
            >
              glowwormchips@gmail.com
            </a>
          </p>
          <p className="mb-4" itemProp="employee">
            <strong>Customer Support & Grievance Officer:</strong> Arafath . K
          </p>
          <p itemProp="telephone">
            <strong>Customer Service:</strong>{" "}
            <a href="tel:+919995700791" className="hover:underline" aria-label="Call our primary number">
              +91 9995 700 791
            </a>{" "}
            |
            <a href="tel:+919895193123" className="hover:underline" aria-label="Call our secondary number">
              +91 9895 193 123
            </a>
          </p>
        </address>
      </article>

      {/* Social Media Links - Enhanced with meta properties */}
      <nav
        className="relative z-10 flex justify-center items-center gap-[50px]"
        aria-label="Social media links"
      >
        {socialLinks.map((social) => (
          <BouncyMotion key={social.id} initialY={-20}>
            <a
              href={social.href}
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label={social.ariaLabel}
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <Image
                src={social.icon}
                alt={`${social.name} icon`}
                width={54}
                height={54}
                className="object-contain w-[50.99px] h-[50.99px]"
              />
            </a>
          </BouncyMotion>
        ))}
      </nav>
    </footer>
      <Image src="/footer.svg" alt="GLOW WORM Logo" width={100} height={100} className="w-full"  /> </>
  );
};
