import { MainCarousel } from "../Globals/MainCarousel";

export default function HeroSection() {
    return (
        <section 
            aria-label="Hero Carousel Section" 
            className="w-full h-full mt-[58px] md:mt-[104px] bg-gradient-to-b from-[#76b066] to-[#ffffff]"
        >
            <MainCarousel/>
        </section>
    )
}
