"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../contexts/CartContext"

// API key from environment variables
const API_KEY = import.meta.env.VITE_PERENUAL_API_KEY

/**
 * OutDoorPlant Component - Responsive
 * Displays outdoor plants fetched from Perenual API with responsive grid layout
 * Features:
 * - Responsive grid that adapts from 1 column (mobile) to 4 columns (desktop)
 * - Mobile-optimized card design
 * - Touch-friendly buttons and interactions
 * - Optimized loading states for mobile
 */
const OutDoorPlant = () => {
  // State management for plants data and loading
  const [plants, setPlants] = useState([])
  const [loading, setLoading] = useState(true)

  // Cart context for add to cart functionality
  const { addToCart } = useCart()

  /**
   * Fetch plants data from Perenual API on component mount
   */
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await fetch(`https://perenual.com/api/v2/species-list?key=${API_KEY}`)
        const data = await res.json()
        setPlants(data.data || [])
      } catch (err) {
        console.error("Error fetching plants:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPlants()
  }, [])

  /**
   * Format API plant data to match cart structure
   * @param {Object} plant - Raw plant data from API
   * @returns {Object} Formatted plant object for cart
   */
  const formatPlantForCart = (plant) => ({
    id: plant.id,
    common_name: plant.common_name || "Unknown Plant",
    image_url: plant.default_image?.regular_url || "/placeholder.svg",
    price_inr: Math.floor(Math.random() * 2000) + 500,
    description: plant.scientific_name?.[0] || "No description available",
    scientific_name: plant.scientific_name?.[0] || "",
  })

  /**
   * Handle add to cart with event propagation prevention
   * @param {Event} e - Click event
   * @param {Object} plant - Plant object to add to cart
   */
  const handleAddToCart = (e, plant) => {
    e.preventDefault()
    e.stopPropagation()
    const formattedPlant = formatPlantForCart(plant)
    addToCart(formattedPlant)
  }

  // Loading state with responsive design
  if (loading) {
    return (
      <div className="min-h-screen p-4 sm:p-6 lg:p-10">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-300 rounded w-48"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-80"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-10">
      {/* Page Header - Responsive typography */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 lg:mb-8 text-center sm:text-left">
        Outdoor Plants
      </h1>

      {/* Responsive Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {plants.map((item) => (
          <div key={item.id} className="relative group">
            {/* Plant Card with Navigation Link */}
            <Link to={`/plant/${item.id}`}>
              <div className="flex flex-col items-start p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg bg-white border border-gray-100">
                {/* Plant Image - Responsive sizing */}
                <div className="w-full aspect-square mb-3 overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={item.default_image?.regular_url || "/placeholder.svg"}
                    alt={item.common_name || "Unknown Plant"}
                    loading="lazy"
                  />
                </div>

                {/* Plant Information - Responsive text sizing */}
                <div className="w-full space-y-1">
                  <p className="text-lg sm:text-xl font-medium line-clamp-2">{item.common_name || "No Name"}</p>
                  <p className="text-xs sm:text-sm font-light text-gray-600 line-clamp-1">
                    {item.scientific_name?.[0] || ""}
                  </p>
                  <p className="font-light text-sm sm:text-base">
                    <span className="font-medium">From</span> ₹{Math.floor(Math.random() * 2000) + 500}
                  </p>
                </div>
              </div>
            </Link>

            {/* Add to Cart Button - Mobile optimized */}
            <button
              onClick={(e) => handleAddToCart(e, item)}
              className="absolute bottom-4 right-4 bg-emerald-600 text-white px-3 py-2 text-xs sm:text-sm rounded-md shadow-lg hover:bg-emerald-700 transition-colors duration-200 opacity-0 group-hover:opacity-100 sm:opacity-100"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {plants.length === 0 && !loading && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg mb-4">No outdoor plants available at the moment.</p>
          <Link
            to="/"
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Browse Other Categories
          </Link>
        </div>
      )}
    </div>
  )
}

export default OutDoorPlant
