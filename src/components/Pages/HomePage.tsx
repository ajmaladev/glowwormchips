import About from "../MainSections/About";
import { BenefitSection } from "../MainSections/BenefitSection";
import CategoryContainer from "../MainSections/CategoryContainer";
import { Footer } from "../MainSections/Footer";
import HeroSection from "../MainSections/HeroSections";
import Slogan from "../MainSections/Slogan";
import Testimonials from "../MainSections/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Slogan />
      <CategoryContainer />
      <About />
      <Testimonials />
      <BenefitSection />
    </>
  );
}
