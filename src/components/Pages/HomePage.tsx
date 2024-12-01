import About from "../MainSections/About";
import BananaChipsSection from "../MainSections/BananaChipsSection";
import { BenefitSection } from "../MainSections/BenefitSection";
import BestSellers from "../MainSections/BestSellers";
import CategoryContainer from "../MainSections/CategoryContainer";
import DiscoverSection from "../MainSections/DiscoverSection";
import HeroSection from "../MainSections/HeroSections";
import Slogan from "../MainSections/Slogan";
import Testimonials from "../MainSections/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Slogan />
      <CategoryContainer />
      <BestSellers />
      <About />
      <BananaChipsSection />
      <DiscoverSection />
      <Testimonials />
      <BenefitSection />
    </>
  );
}
