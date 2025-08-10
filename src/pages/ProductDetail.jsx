"use client"

import { useEffect, useState } from "react"
import { useLocation, useParams, useNavigate } from "react-router-dom"
import { useCart } from "../contexts/CartContext"

// API key from environment variables
const API_KEY = import.meta.env.VITE_PERENUAL_API_KEY

/**
 * ProductDetail Component
 * Displays detailed information about a specific plant
 * Handles both API data (outdoor plants) and static data (other categories)
 */
const ProductDetail = () => {
  // Router hooks for navigation and state
  const { state } = useLocation()
  const plantFromState = state?.plant || null
  const { id } = useParams()
  const navigate = useNavigate()

  // Cart context for add to cart functionality
  const { addToCart } = useCart()

  // Component state management
  const [plant, setPlant] = useState(plantFromState || null)
  const [loading, setLoading] = useState(!plantFromState)
  const [error, setError] = useState(null)

  /**
   * Fetch plant details from API if not provided via state
   * This handles outdoor plants that come from API
   */
  useEffect(() => {
    if (!plantFromState && id) {
      setLoading(true)
      fetch(`https://perenual.com/api/v2/species/details/${id}?key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          // Format API response to match expected structure
          setPlant({
            id: data.id,
            common_name: data.common_name,
            description: data.scientific_name?.[0] || "No description available",
            price_inr: Math.floor(Math.random() * 2000) + 500, // Generate random price
            image_url: data.default_image?.regular_url || "/placeholder.svg",
            details: data.description || "No additional details available.",
            scientific_name: data.scientific_name?.[0] || "",
          })
        })
        .catch(() => setError("Failed to load plant details."))
        .finally(() => setLoading(false))
    }
  }, [id, plantFromState])

  /**
   * Handle add to cart functionality
   * Ensures proper data format for cart
   */
  const handleAddToCart = () => {
    if (plant) {
      // Ensure consistent data format for cart
      const cartItem = {
        id: plant.id,
        common_name: plant.common_name || plant.name,
        image_url: plant.image_url || plant.image,
        price_inr: plant.price_inr || Number(plant.price),
        description: plant.description || plant.desc || plant.details || "",
      }
      addToCart(cartItem)
    }
  }

  // Loading state
  if (loading)
    return (
      <div className="p-10 text-center">
        <p className="text-lg animate-pulse">Loading product details...</p>
      </div>
    )

  // Error state
  if (error)
    return (
      <div className="p-10 text-center">
        <p className="text-red-500 text-lg">{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Go Back
        </button>
      </div>
    )

  // No plant found state
  if (!plant)
    return (
      <div className="p-10 text-center">
        <p className="text-lg">No plant details found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Go Back
        </button>
      </div>
    )

  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Product Image Section */}
        <div className="md:w-1/2 flex justify-center items-center bg-gray-100 p-6">
          <img
            src={plant.image_url || plant.image}
            alt={plant.common_name || plant.name}
            className="rounded-lg shadow-md max-h-[450px] object-cover"
          />
        </div>

        {/* Product Information Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            {/* Product Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{plant.common_name || plant.name}</h1>

            {/* Product Subtitle/Scientific Name */}
            <p className="text-green-600 font-medium mt-2">
              {plant.scientific_name || plant.desc || plant.description}
            </p>

            {/* Product Description */}
            <p className="mt-4 text-gray-600 leading-relaxed">
              {plant.details || plant.description || "No additional details available."}
            </p>

            {/* Price Section */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <p className="text-2xl font-semibold text-gray-900">
                ₹{(plant.price_inr || Number(plant.price))?.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg text-lg font-medium shadow hover:bg-green-700 transition duration-300"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg text-lg font-medium shadow hover:bg-gray-300 transition duration-300"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
