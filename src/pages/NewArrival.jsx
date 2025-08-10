"use client"
import { Link } from "react-router-dom"
import { useCart } from "../contexts/CartContext"

/**
 * NewArrival Component - Responsive
 * Displays new arrival plants with static data and responsive grid layout
 * Features:
 * - Responsive grid layout (1-4 columns)
 * - Mobile-first design approach
 * - Touch-optimized interactions
 * - Responsive card design and typography
 */
const NewArrival = () => {
  // Cart context hook
  const { addToCart } = useCart()

  // Static data for new arrivals
  const data = [
    {
      id: 1,
      image:
        "//www.thesill.com/cdn/shop/files/the-sill_Medium-Olive-Tree_Medium_Isabella_Dusty-Rose_Variant_1_9a2349fa-ad88-4622-ac80-b76813907c9f.jpg?v=1750708944&width=416",
      name: "Olive Tree",
      desc: "Our Most Popular Plant",
      price: "1200",
      details:
        "The Olive Tree is a hardy, drought-tolerant plant known for its silvery-green leaves and Mediterranean charm.",
    },
    {
      id: 2,
      image:
        "https://www.thesill.com/cdn/shop/files/the-sill_Medium-Mermaid-Cactus-Purple_Medium_Grant_Cream_Variant.jpg?v=1752687007&width=416",
      name: "Mermaid Tail Cactus",
      desc: "Rare Plant",
      price: "2300",
      details:
        "The Mermaid Tail Cactus is a unique, rare succulent with a wavy crest shape that resembles a mermaid's tail.",
    },
    {
      id: 3,
      image:
        "https://www.thesill.com/cdn/shop/files/the-sill_Medium-Fairy-Castle-Cactus_Medium_Grant_Black_Variant.jpg?v=1752703035&width=416",
      name: "Fairy Castle Cactus",
      desc: "Premium Plant",
      price: "2000",
      details:
        "The Fairy Castle Cactus features tall, spiky stems that resemble the turrets of a castle, perfect for cactus lovers.",
    },
    {
      id: 4,
      image:
        "https://www.thesill.com/cdn/shop/files/the-sill_Medium-African_Milk_Cactus_Medium_Grant_Cream_Variant.jpg?v=1752623296&width=416",
      name: "African Milk Tree",
      desc: "Our Most Popular Plant",
      price: "2200",
      details:
        "The African Milk Tree is a striking succulent with thick, green stems and thorns, often used as a decorative indoor plant.",
    },
    {
      id: 5,
      image:
        "https://www.thesill.com/cdn/shop/files/the-sill_Medium-Mermaid-Cactus-Purple_Medium_Grant_Cream_Variant.jpg?v=1752687007&width=416",
      name: "Mermaid Tail Cactus",
      desc: "Rare Plant",
      price: "1000",
      details:
        "The Mermaid Tail Cactus is a unique, rare succulent with a wavy crest shape that resembles a mermaid's tail.",
    },
  ]

  /**
   * Helper function to normalize product format for cart compatibility
   * @param {Object} item - Raw product item
   * @returns {Object} Formatted product for cart
   */
  const formatProduct = (item) => ({
    id: item.id,
    common_name: item.name,
    image_url: item.image,
    price_inr: Number(item.price),
    description: item.details || item.desc || "",
  })

  /**
   * Handle add to cart functionality
   * @param {Event} e - Click event
   * @param {Object} item - Product item to add to cart
   */
  const handleAddToCart = (e, item) => {
    e.stopPropagation()
    e.preventDefault()
    addToCart(formatProduct(item))
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-10">
      {/* Page Header - Responsive typography */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 lg:mb-8 text-center sm:text-left">
        New Arrivals
      </h1>

      {/* Responsive Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative group flex flex-col justify-center items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-100"
          >
            {/* Product Link for Navigation */}
            <Link to={`/plant/${item.id}`} state={item} className="block w-full">
              {/* Product Image - Responsive sizing */}
              <div className="w-full aspect-square mb-3 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
              </div>

              {/* Product Information - Responsive text sizing */}
              <div className="space-y-1 mb-4">
                <p className="text-lg sm:text-xl font-medium line-clamp-2">{item.name}</p>
                <p className="text-xs sm:text-sm font-light text-gray-600 line-clamp-1">{item.desc}</p>
                <p className="font-light text-sm sm:text-base">
                  <span className="font-medium">From</span> ₹{Number(item.price).toLocaleString()}
                </p>
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
    </div>
  )
}

export default NewArrival
