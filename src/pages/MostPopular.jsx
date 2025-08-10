"use client"
import { data } from "../utills/data"
import { useCart } from "../contexts/CartContext"
import { useNavigate } from "react-router-dom"

/**
 * MostPopular Component - Responsive
 * Displays most popular plants from static data with responsive grid layout
 * Features:
 * - Responsive grid (1-4 columns based on screen size)
 * - Mobile-optimized card interactions
 * - Touch-friendly buttons
 * - Responsive typography and spacing
 */
const MostPopular = () => {
  // Cart and navigation hooks
  const { addToCart } = useCart()
  const navigate = useNavigate()

  /**
   * Handle navigation to product detail page
   * @param {Object} item - Plant item data
   * @param {number} index - Item index for routing
   */
  const handleProductClick = (item, index) => {
    navigate(`/plant/${index}`, { state: { plant: item } })
  }

  /**
   * Handle add to cart with event propagation prevention
   * @param {Event} e - Click event
   * @param {Object} item - Plant item to add to cart
   */
  const handleAddToCart = (e, item) => {
    e.stopPropagation()
    addToCart(item)
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-10">
      {/* Page Header - Responsive typography */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 lg:mb-8 text-center sm:text-left">
        Most Popular Plants
      </h1>

      {/* Responsive Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-start p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg bg-white border border-gray-100"
            onClick={() => handleProductClick(item, index)}
          >
            {/* Plant Image - Responsive aspect ratio */}
            <div className="w-full aspect-square mb-3 overflow-hidden rounded-lg">
              <img
                src={item.image_url || "/placeholder.svg"}
                alt={item.common_name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Plant Information - Responsive text sizing */}
            <div className="w-full space-y-1 mb-4">
              <p className="text-lg sm:text-xl font-medium line-clamp-2">{item.common_name}</p>
              <p className="font-light text-gray-700 text-sm sm:text-base">
                <span className="font-medium">From</span> ₹{item.price_inr.toLocaleString()}
              </p>
            </div>

            {/* Add to Cart Button - Mobile optimized positioning */}
            <button
              onClick={(e) => handleAddToCart(e, item)}
              className="absolute bottom-4 right-4 bg-emerald-600 text-white px-3 py-2 text-xs sm:text-sm rounded-md shadow-lg hover:bg-emerald-700 transition-colors duration-200 opacity-0 group-hover:opacity-100 sm:opacity-100"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MostPopular
