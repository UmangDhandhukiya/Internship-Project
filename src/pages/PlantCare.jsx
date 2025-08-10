"use client"
import { plantCareItems } from "../utills/data"
import { useCart } from "../contexts/CartContext"

/**
 * PlantCare Component
 * Displays plant care items from static data
 * Includes add to cart functionality and hover effects
 */
const PlantCare = () => {
  // Cart context for add to cart functionality
  const { addToCart } = useCart()

  /**
   * Format plant care item for cart compatibility
   * @param {Object} item - Plant care item from static data
   * @returns {Object} Formatted item for cart
   */
  const formatItemForCart = (item) => ({
    id: `care-${item.productName.toLowerCase().replace(/\s+/g, "-")}`, // Generate unique ID
    common_name: item.productName,
    image_url: item.imageUrl,
    price_inr: item.price,
    description: item.description,
    category: "plant-care", // Category identifier
  })

  /**
   * Handle add to cart functionality
   * @param {Event} e - Click event
   * @param {Object} item - Plant care item to add
   */
  const handleAddToCart = (e, item) => {
    e.stopPropagation() // Prevent any parent click handlers
    const formattedItem = formatItemForCart(item)
    addToCart(formattedItem)
  }

  return (
    <div className="h-full p-10 flex flex-col gap-4">
      {/* Page Header */}
      <h1 className="text-4xl font-light">Plant Care Items</h1>

      {/* Plant Care Items Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {plantCareItems.map((item, index) => (
          <div
            className="relative group p-4 cursor-pointer w-92 h-[500px] transition-all duration-400 bg-white hover:bg-green-100 overflow-hidden rounded-lg shadow-md hover:shadow-lg"
            key={index}
          >
            {/* Product Image with Hover Effect */}
            <img
              src={item.imageUrl || "/placeholder.svg"}
              alt={item.productName}
              className="w-full h-96 object-cover rounded-md group-hover:opacity-0 transition-opacity duration-300"
            />

            {/* Product Basic Info - Hidden on Hover */}
            <div className="mt-2 group-hover:opacity-0 transition-opacity duration-300">
              <p className="font-light text-gray-700">
                <b>From</b> ₹{item.price}
              </p>
              <p className="font-light text-gray-700">{item.productName}</p>
            </div>

            {/* Product Description - Shown on Hover */}
            <div className="absolute inset-0 p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <p className="text-sm text-gray-800 font-medium mb-4">{item.description}</p>

                {/* Add to Cart Button - Visible on Hover */}
                <button
                  onClick={(e) => handleAddToCart(e, item)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200 shadow-md"
                >
                  Add to Cart - ₹{item.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlantCare
