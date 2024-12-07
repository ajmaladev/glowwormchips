import Link from "next/link";

export default function MainSections() {
  return (
    <section 
      className="w-full max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-emerald-50" 
      aria-label="Company Features and Benefits"
      itemScope 
      itemType="https://schema.org/Article"
    >
      <div className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100" itemProp="articleSection">
        <h2 
          className="text-4xl md:text-5xl font-bold font-['Jost'] text-[#0e0e0e] mb-8"
          itemProp="headline"
        >
          A Commitment to <span className="text-emerald-600">Quality</span> and <span className="text-emerald-600">Innovation</span>
        </h2>
        <div className="w-full">
          <span 
            className="text-xl md:text-2xl lg:text-3xl font-normal font-['Jost'] text-[#0e0e0e] leading-relaxed"
            itemProp="description"
          >
            Every chip that travels through <span className="text-emerald-600 font-medium" itemProp="brand">GlowWormChips</span> represents:
          </span>
          <ul 
            className="text-lg md:text-xl font-light font-['Jost'] text-gray-700 mt-6 space-y-4"
            itemProp="keywords"
            aria-label="Key Features"
          >
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Exceptional taste</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Rigorous quality control</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Cultural culinary excellence</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Sustainable export practices</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 mt-12" itemProp="articleSection">
        <h3 
          className="text-2xl md:text-3xl font-semibold font-['Jost'] text-center mb-8 text-emerald-800"
          itemProp="alternativeHeadline"
        >
          Wholesale Opportunities Redefined
        </h3>
        <div 
          className="text-lg font-light font-['Jost'] text-[#0e0e0e]"
          itemProp="text"
        >
          Whether you're a small artisan bakery or a large-scale chip
          manufacturer, <span className="text-emerald-600 font-medium" itemProp="brand">GlowWormChips</span> offers:
          <ul className="mt-6 space-y-4 text-gray-600" aria-label="Wholesale Benefits">
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Scalable export solutions</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Global market access</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Personalized export strategies</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>Comprehensive support network</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 mt-12" itemProp="articleSection">
        <h3 
          className="text-2xl md:text-3xl font-semibold font-['Jost'] text-emerald-800 mb-6"
          itemProp="headline"
        >
          Global Excellence
        </h3>
        <div 
          className="flex flex-col md:flex-row items-center gap-6 mt-4"
          itemProp="text"
        >
          <span 
            className="text-emerald-600 text-xl md:text-2xl font-medium font-['Jost']"
            itemProp="keywords"
          >
            Global Reach
          </span>
          <span className="hidden md:block w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
          <span 
            className="text-lg md:text-xl font-light font-['Jost'] text-gray-700"
            itemProp="text"
          >
            Connecting local flavors with international palates
          </span>
        </div>
      </div>

      <div className="bg-emerald-50 text-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center mt-12" itemProp="articleSection">
        <h3 
          className="text-3xl md:text-4xl font-bold font-['Jost'] text-emerald-900 mb-6"
          itemProp="headline"
        >
          Ready to Take Your Chips Global?
        </h3>
        <div 
          className="text-lg md:text-xl font-light font-['Jost'] text-emerald-900/90 max-w-2xl mx-auto"
          itemProp="text"
        >
          Discover how <span className="font-medium">GlowWormChips</span> can transform your snack export journey.
          <p className="mt-4">
            Contact us today and let's bring your flavors to the world!
          </p>
        </div>
        <Link 
          href="/" 
          className="inline-block mt-8 bg-white text-emerald-600 px-8 py-4 rounded-full font-medium hover:bg-emerald-50 transition-all duration-300 text-lg shadow-md hover:shadow-xl transform hover:-translate-y-1"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
