import Image from "next/image";
import { BouncyMotion } from "@/components/Globals/BouncyMotion";

const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    icon: "/social/Instagram.png",
    href: "#",
    ariaLabel: "Visit our Instagram page"
  },
  {
    id: 2,
    name: "WhatsApp",
    icon: "/social/WhatsApp.png",
    href: "#",
    ariaLabel: "Contact us on WhatsApp"
  },
  {
    id: 3,
    name: "Facebook",
    icon: "/social/facebook.png",
    href: "#",
    ariaLabel: "Visit our Facebook page"
  },
  {
    id: 4,
    name: "Google Maps",
    icon: "/social/Google Maps.png",
    href: "#",
    ariaLabel: "Find us on Google Maps"
  }
];

export const Footer = () => {
  return (
    <footer
      className="p-8 bg-[#2d2d2d] min-h-screen flex flex-col items-center justify-between"
      role="contentinfo"
      aria-label="Site footer"
    >

      {/* Logo */}
      <header className="relative z-10 mb-8">
        <h1 className="text-center text-white text-[28.13px] font-medium font-['Jost'] tracking-wider">
          GLOW WORM
        </h1>
        <p className="text-center text-white text-[28.13px] font-medium font-['Jost'] tracking-wider mt-8 mb-6">
          2024 CR Glow worm
        </p>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto py-12">
        <p className="max-w-[1241px] mx-auto text-center text-white text-[28.13px] font-normal font-['Jost'] leading-[36.92px] tracking-wider mb-12">
          At GLOW WORM, we specialize in bringing the rich flavors of diverse
          snacks and premium products to markets worldwide. our selection
          promises exceptional taste and quality in every bite. our products are
          designed to cater to global palates.
        </p>

        {/* Contact Information */}
        <address className="text-center text-white text-[28.13px] font-medium font-['Jost'] leading-[36.92px] tracking-wider not-italic">
          <p className="mb-4">
            Mail :{" "}
            <a
              href="mailto:glowwormchips@gmail.com"
              className="hover:underline"
            >
              glowwormchips@gmail.com
            </a>
          </p>
          <p className="mb-4">Grievance officer : Arafath . K</p>
          <p>
            <a href="tel:+919995700791" className="hover:underline">
              +91 9995 700 791
            </a>{" "}
            |
            <a href="tel:+919895193123" className="hover:underline">
              +91 9895 193 123
            </a>
          </p>
        </address>
      </div>

      {/* Social Media Links */}
      <nav
        className="relative z-10 flex justify-center items-center gap-[50px] mt-8"
        aria-label="Social media links"
      >
        {socialLinks.map((social, index) => (
          <BouncyMotion key={social.id} initialY={-20}>
            <a
              href={social.href}
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label={social.ariaLabel}
            >
              <Image
                src={social.icon}
                alt=""
                width={54}
                height={54}
                className="object-contain w-[50.99px] h-[50.99px]"
              />
            </a>
          </BouncyMotion>
        ))}
      </nav>
    </footer>
  );
};
