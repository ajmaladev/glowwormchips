import Image from "next/image";
import { BouncyMotion } from "@/components/Globals/BouncyMotion";

export const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    icon: "/social/glowwormchips-instagram.png",
    href: "https://www.instagram.com/gwglowworm?igsh=ZnA2ZTQ5dDNqdWow",
    ariaLabel: "Visit our Instagram page",
  },
  {
    id: 2,
    name: "WhatsApp",
    icon: "/social/glow-worm-chips-whatsapp.png",
    href: "https://wa.me/919895193123?text=Hi%20there",
    ariaLabel: "Contact us on WhatsApp",
  },
  {
    id: 3,
    name: "Facebook",
    icon: "/social/glowwormchips-facebook.png",
    href: "https://www.facebook.com/share/18a2TKRW6e/?mibextid=LQQJ4d",
    ariaLabel: "Visit our Facebook page",
  },
  {
    id: 4,
    name: "Google Maps",
    icon: "/social/glowwormchips-google-maps.png",
    href: "https://maps.app.goo.gl/Z4GcQEdssMu9E6Ha7?g_st=iw",
    ariaLabel: "Find us on Google Maps",
  },
];

// Update organization schema with more detailed information
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GLOW WORM CHIPS Premium Snacks & Food Products",
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
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": ["+919995700791", "+919895193123"],
    "email": "glowwormchips@gmail.com",
    "availableLanguage": ["English", "Malayalam"]
  },
  "employee": {
    "@type": "Person",
    "name": "Yaser Arafath",
    "jobTitle": "Grievance officer"
  }
};

export const Footer = () => {
  return (
    <>
      <footer
        className="p-4 sm:p-8 bg-[#2d2d2d] flex flex-col items-center "
        role="contentinfo"
        aria-label="Site footer"
        id="footer"
      >
        {/* Add JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Updated Logo Section */}
        <header className="relative z-10 mb-4 sm:mb-8 w-full">
          <h2 className="text-center text-white text-base md:text-[28.13px] font-medium font-['Jost'] tracking-wider">
            GLOW WORM <span className="sr-only">CHIPS</span>
          </h2>
          <p className="text-center text-white text-base md:text-[28.13px] font-medium font-['Jost'] tracking-wider mt-4 sm:mt-8 md:mb-6">
            <small>2024 CR Glow worm <span className="sr-only">CHIPS</span></small>
          </p>
        </header>

        {/* Updated Main Content */}
        <article className="relative z-10 flex flex-col items-center justify-center max-w-7xl py-2 mx-auto sm:py-8 md:py-12 px-4">
          <h3 className="sr-only">About GLOW WORM <span className="sr-only">CHIPS</span> Premium Snacks</h3>
          <p
            className="mx-auto text-center text-white text-base md:text-[28.13px] font-normal font-['Jost'] leading-[21px] md:leading-[36.92px] tracking-wide md:tracking-wider mb-8 md:mb-12"
            aria-label="Company description"
          >
            At GLOW WORM <span className="sr-only">CHIPS</span>, we specialize in bringing the rich flavors of diverse
            snacks and premium products to markets worldwide. our selection
            promises exceptional taste and quality in every bite. our products
            are designed to cater to global palates.
          </p>

          {/* Updated Contact Information */}
          <address
            className="text-center text-white text-base md:text-[28.13px] font-medium font-['Jost'] leading-relaxed md:leading-[36.92px] tracking-wider not-italic"
            itemScope
            itemType="https://schema.org/Organization"
            aria-label="Contact information"
          >
            <p className="mb-4">
              <a
                href="mailto:glowwormchips@gmail.com"
                className="hover:underline"
                itemProp="email"
                aria-label="Send email to GLOW WORM CHIPS"
              >
                glowwormchips@gmail.com
              </a>
            </p>
            <p className="mb-4" itemProp="employee">
            Grievance officer : Yaser Arafath
            </p>
            <p itemProp="telephone">
              <a
                href="tel:+919995700791"
                className="hover:underline"
                aria-label="Call our primary number"
              >
                +91 9995 700 791
              </a>{" "}
              |{" "}
              <a
                href="tel:+919895193123"
                className="hover:underline"
                aria-label="Call our secondary number"
              >
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
                  className="object-contain w-[29px] md:w-[50.99px] h-[29px] md:h-[50.99px]"
                />
              </a>
            </BouncyMotion>
          ))}
        </nav>

        {/* Hidden sitemap link for search engines */}
        <div className="hidden">
          <a href="/sitemap.xml" aria-hidden="true">Sitemap</a>
        </div>
      </footer>
      <Image
        src="/glowwormchips-footer.svg"
        alt="GLOW WORM CHIPS Logo"
        width={100}
        height={100}
        className="w-full"
      />
    </>
  );
};
