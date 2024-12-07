export default function ChipJourney() {
  return (
    <section 
      className="w-full max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-emerald-50" 
      aria-label="Our Global Journey"
      itemScope 
      itemType="https://schema.org/Article"
    >
      {/* Enhanced heading section */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Jost'] text-[#0e0e0e] mb-6 leading-tight"
          itemProp="headline"
        >
          The <span className="text-emerald-600 relative">
            GlowWormChips
            <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-600/20 -mb-2"></span>
          </span> Global Journey
        </h2>
        <h3 
          className="text-xl md:text-2xl lg:text-3xl font-light font-['Jost'] text-gray-600 mt-4"
          itemProp="alternativeHeadline"
        >
          From Local Bakeries to International Shelves
        </h3>
      </div>

      {/* Enhanced content grid with hover effects */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* First content block */}
        <div 
          className="bg-white p-8 lg:p-10 text-left rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          itemProp="articleBody"
        >
          <p className="text-lg mb-8 text-gray-700 leading-relaxed">
            <span className="text-emerald-600 font-semibold" itemProp="brand">GlowWormChips</span> specializes in transforming local snack production
            into global success stories. We understand the unique challenges of
            international snack export:
          </p>
          <ul className="space-y-4 text-gray-600">
            {/* Enhanced list items with icons */}
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Maintaining product freshness</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Navigating complex international regulations</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Preserving authentic flavor profiles</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Meeting diverse market preferences</span>
            </li>
          </ul>
        </div>

        {/* Second content block */}
        <div 
          className="bg-white p-8 lg:p-10 text-left rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          itemProp="articleSection"
        >
          <h4 className="text-2xl font-semibold text-[#0e0e0e] mb-8">
            Technology-Driven Export Strategy
          </h4>
          <p className="text-lg mb-8 text-gray-700 leading-relaxed">
            Our state-of-the-art export solutions leverage:
          </p>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Advanced preservation technologies</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Smart logistics tracking</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Customized market entry strategies</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Comprehensive compliance management</span>
            </li>
          </ul>
        </div>
      </div>

      <meta itemProp="keywords" content="GlowWormChips, global snack export, international snack distribution, Kerala snacks, preservation technology, logistics solutions" />
      <meta itemProp="datePublished" content={new Date().toISOString()} />
      <meta itemProp="author" content="GlowWormChips" />
      <meta itemProp="publisher" content="GlowWormChips" />
      <meta itemProp="inLanguage" content="en-US" />
    </section>
  );
}
