interface HeroSectionProps {
  title: string;
  sub_description: string;
  color: string;
}

export default function HeroSection({ title, sub_description, color }: HeroSectionProps) {
  return (
    <section 
      className="flex-col justify-center w-full gap-6 items-center py-4 md:py-6 lg:py-8 inline-flex px-4 md:px-6 lg:px-12"
      aria-label="Category hero section"
    >
      <h1 
        className={`self-stretch text-center text-2xl md:text-3xl lg:text-6xl font-black font-['Jost'] tracking-wide`}
        style={{color: color}}
      >
        {title}
      </h1>
      <p 
        className={`self-stretch text-center text-lg md:text-xl lg:text-2xl font-normal font-['Jost'] tracking-wide max-w-3xl mx-auto`}
        style={{color: color}}
        aria-describedby="category-description"
      >
        {sub_description}
      </p>
    </section>
  )
}
