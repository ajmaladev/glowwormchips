export default function SetsAppart() {
  return (
    <section 
      className="w-full max-w-3xl md:max-w-full mx-auto py-16 md:px-8 bg-gradient-to-b from-white to-[#f6fff4]" 
      aria-labelledby="features-heading"
      itemScope 
      itemType="https://schema.org/Article"
    >
      <h2 
        id="features-heading"
        className="text-2xl md:text-3xl lg:text-4xl font-semibold font-['Jost'] text-[#0e0e0e] mb-12 text-center"
        itemProp="headline"
      >
        What Sets <span className="text-emerald-600" itemProp="brand">GlowWormChips</span> Apart in Global Snack Distribution
      </h2>
      <div className="flex flex-col gap-12 md:gap-16 max-w-6xl mx-auto" role="list">
        <article className="flex flex-col md:flex-row items-start gap-6 md:gap-12 p-8 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg" role="listitem">
          <div 
            className="text-8xl md:text-9xl font-light font-['Jost'] text-emerald-600/20 leading-none flex items-center justify-center"
            aria-hidden="true"
          >
            1
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-['Jost'] text-emerald-800 mb-4">
              Unparalleled Flavor Diversity
            </h3>
            <p className="text-base md:text-lg font-light font-['Jost'] text-gray-700 leading-relaxed">
              From traditional favorites to cutting-edge culinary creations, our
              chip portfolio represents the finest in global snack innovation. We
              collaborate with premium artisan bakeries and trusted wholesale
              manufacturers to deliver exceptional taste experiences to
              international markets.
            </p>
          </div>
        </article>

        <article className="flex flex-col md:flex-row items-start gap-6 md:gap-12 p-8 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg" role="listitem">
          <div 
            className="text-8xl md:text-9xl font-light font-['Jost'] text-emerald-600/20 leading-none flex items-center justify-center"
            aria-hidden="true"
          >
            2
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-['Jost'] text-emerald-800 mb-4">
              Comprehensive Export Solutions
            </h3>
            <p className="text-base md:text-lg font-light font-['Jost'] text-gray-700 leading-relaxed mb-4">
              Our comprehensive service goes beyond simple shipping. We provide:
            </p>
            <ul className="text-base md:text-lg font-light font-['Jost'] text-gray-700 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                In-depth market analysis and research
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Professional packaging design and branding
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Complete regulatory compliance assistance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Advanced logistics optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Industry-leading quality preservation methods
              </li>
            </ul>
          </div>
        </article>
      </div>
      <meta itemProp="keywords" content="GlowWormChips, global snack distribution, Kerala snacks, export solutions" />
      <meta itemProp="datePublished" content={new Date().toISOString()} />
    </section>
  );
}
