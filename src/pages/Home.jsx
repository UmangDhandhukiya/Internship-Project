"use client"

/**
 * Home Component
 * Responsive landing page with hero section featuring product showcase
 * Features:
 * - Mobile-first responsive design
 * - Flexible layout that adapts to different screen sizes
 * - Call-to-action buttons with responsive styling
 * - Optimized image display for various devices
 */
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Content Section */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start p-6 sm:p-8 md:p-12 gap-6 lg:gap-8 order-2 lg:order-1">
        {/* Main Heading - Responsive typography */}
        <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center lg:text-left leading-tight">
          Your New Favorite Pickle
        </h1>

        {/* Description Text */}
        <p className="font-light text-sm sm:text-base md:text-lg text-center lg:text-left text-gray-700 max-w-md">
          Soft spikes and serious personality are two of the reasons you'll want to scoop up our newest arrival.
        </p>

        {/* Action Buttons - Responsive layout */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6 w-full">
          <button className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-emerald-700 text-white font-light rounded-md hover:bg-emerald-800 transition-colors duration-200 text-sm sm:text-base">
            Shop the Pickle Plant
          </button>
          <button className="w-full sm:w-auto px-4 sm:px-6 py-3 text-emerald-700 font-light hover:bg-emerald-50 border border-emerald-700 rounded-md transition-colors duration-200 text-sm sm:text-base">
            Shop Beginner-Friendly Plant
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-2/3 order-1 lg:order-2 min-h-[300px] sm:min-h-[400px] lg:min-h-full">
        <img
          className="w-full h-full object-cover"
          src="https://thesill.com/cdn/shop/files/Pickle-Plant-Hero-Named.png?v=1753389656&width=3840"
          alt="Pickle Plant - Featured Product"
          loading="eager"
        />
      </div>
    </div>
  )
}

export default Home
