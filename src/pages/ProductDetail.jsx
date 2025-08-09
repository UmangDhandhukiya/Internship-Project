"use client"
import { ArrowLeft, ShoppingCart, Clock, Droplets } from "lucide-react"

const ProductDetail = ({ plant, onBack, onAddToCart }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Plants
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="p-6">
              <img
                src={plant.image_url || "/placeholder.svg"}
                alt={plant.common_name}
                className="w-full h-96 md:h-[500px] object-cover rounded-lg"
              />
            </div>

            {/* Product Information */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">{plant.common_name}</h1>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{plant.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-semibold text-green-600">₹{plant.price_inr.toLocaleString()}</span>
                </div>

                {/* Time to Grow */}
                <div className="flex items-center gap-2 mb-6 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>Time to grow: {plant.time_to_grow}</span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => onAddToCart(plant)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 mb-8"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Care Tips Section */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-light text-gray-800">Care Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {plant.care_tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail