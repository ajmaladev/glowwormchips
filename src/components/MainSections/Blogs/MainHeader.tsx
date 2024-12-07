export default function MainHeader() {
  return (
    <article 
      className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24"
      aria-label="About GlowWormChips"
      itemScope 
      itemType="https://schema.org/Article"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full opacity-50" />
        <div className="absolute top-1/2 -left-8 w-16 h-16 bg-emerald-100 rounded-full opacity-40" />
      </div>

      {/* Main Title */}
      <div className="relative text-center mb-20">
        <span className="block text-emerald-600 text-sm font-medium mb-3 tracking-wider uppercase">Welcome to</span>
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-['Jost'] tracking-tight text-[#0e0e0e] mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 text-transparent bg-clip-text"
          itemProp="headline"
        >
          GlowWormChips
        </h1>
        <h2 
          className="text-xl md:text-3xl font-light font-['Jost'] text-[#0e0e0e]/80 max-w-2xl mx-auto"
          itemProp="alternativeHeadline"
        >
          Your Gateway to Global Snack Innovation
        </h2>
      </div>

      {/* Introduction Section */}
      <div className="relative max-w-3xl mx-auto mb-20 px-6">
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-emerald-300 opacity-30 rounded-full" />
        <p 
          className="text-lg md:text-xl font-light font-['Jost'] text-[#0e0e0e]/90 leading-relaxed text-center"
          itemProp="description"
        >
          In the competitive world of international snack distribution,{' '}
          <span itemProp="name" className="font-medium text-emerald-600">GlowWormChips</span> stands out as a beacon of quality, innovation, and global
          reach. We're not just another chip exporter—we're your strategic partner
          in bringing exceptional flavors to markets worldwide.
        </p>
      </div>

      {/* The GlowWormChips Difference Section */}
      <div className="relative max-w-4xl mx-auto bg-gradient-to-b from-emerald-50 to-transparent p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 
          className="text-2xl md:text-4xl font-medium font-['Jost'] text-emerald-800 mb-6 text-center"
          itemProp="about"
        >
          The GlowWormChips Difference
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-300 mx-auto mb-8 rounded-full" />
        <h4 
          className="text-xl md:text-2xl font-normal font-['Jost'] text-emerald-600 mb-6 text-center"
          itemProp="articleSection"
        >
          Culinary Connections Across Continents
        </h4>
        <p 
          className="text-lg md:text-xl font-light font-['Jost'] text-[#0e0e0e]/80 leading-relaxed text-center"
          itemProp="articleBody"
        >
          At <span itemProp="brand" className="font-medium text-emerald-600">GlowWormChips</span>, we believe that great snacks have the power to
          transcend borders. Our mission is simple: to deliver the most
          delectable, innovative, and high-quality chips from local bakeries and
          manufacturers to global consumers.
        </p>
      </div>

      {/* SEO metadata */}
      <meta itemProp="keywords" content="GlowWormChips, Kerala snacks, banana chips, murukku, tapioca chips, Indian snacks, global snack distribution" />
      <link itemProp="mainEntityOfPage" href="https://www.glowwormchips.com/blog" />
      <meta itemProp="image" content="/images/glowwormchips-logo.png" />
    </article>
  );
}
