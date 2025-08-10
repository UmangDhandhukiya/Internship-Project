"use client"
import { useCart } from "../contexts/CartContext"
import { useNavigate } from "react-router-dom"

/**
 * Cart Component - Responsive
 * Displays cart items with quantity controls and checkout functionality
 * Features:
 * - Responsive layout for mobile and desktop
 * - Mobile-optimized cart item cards
 * - Touch-friendly quantity controls
 * - Responsive checkout flow
 */
const Cart = () => {
  // Cart context and navigation hooks
  const { cart, removeFromCart, clearCart, addToCart } = useCart()
  const navigate = useNavigate()

  /**
   * Decrease item quantity or remove if quantity is 1
   * @param {Object} product - Product to decrease quantity
   */
  const decreaseQuantity = (product) => {
    if (product.quantity > 1) {
      removeFromCart(product.id)
      addToCart({ ...product, quantity: product.quantity - 1 })
    } else {
      removeFromCart(product.id)
    }
  }

  /**
   * Calculate total cart value
   * @returns {number} Total price of all items in cart
   */
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price_inr * item.quantity, 0)
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-10">
      {/* Page Header - Responsive typography */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 lg:mb-8 text-center sm:text-left">Your Cart</h1>

      {/* Empty Cart State */}
      {cart.length === 0 ? (
        <div className="text-center py-12 lg:py-20">
          <div className="max-w-md mx-auto">
            <p className="text-gray-500 text-lg mb-6">Your cart is empty.</p>
            <button
              onClick={() => navigate("/")}
              className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-base font-medium"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          {/* Cart Items List - Responsive layout */}
          <div className="space-y-4 lg:space-y-6 mb-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Product Image - Responsive sizing */}
                <div className="w-full sm:w-32 lg:w-40 aspect-square sm:aspect-auto sm:h-32 lg:h-40 flex-shrink-0">
                  <img
                    src={item.image_url || "/placeholder.svg"}
                    alt={item.common_name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Product Details - Responsive layout */}
                <div className="flex-1 w-full sm:w-auto">
                  <h3 className="text-lg sm:text-xl font-medium mb-2">{item.common_name}</h3>
                  <p className="text-gray-700 text-sm mb-2 line-clamp-2">
                    {item.description || "No description available"}
                  </p>
                  <div className="space-y-1">
                    <p className="font-light text-gray-700 text-sm sm:text-base">
                      <span className="font-medium">Price:</span> ₹{item.price_inr?.toLocaleString()}
                    </p>
                    <p className="font-light text-gray-700 text-sm sm:text-base">
                      <span className="font-medium">Subtotal:</span> ₹
                      {(item.price_inr * item.quantity)?.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls and Remove Button - Responsive layout */}
                <div className="flex flex-row sm:flex-col items-center gap-4 w-full sm:w-auto">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                    <button
                      className="w-8 h-8 bg-white border border-gray-200 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center"
                      onClick={() => decreaseQuantity(item)}
                    >
                      -
                    </button>
                    <span className="px-3 font-medium min-w-[2rem] text-center">{item.quantity}</span>
                    <button
                      className="w-8 h-8 bg-white border border-gray-200 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex-1 sm:flex-none px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary - Responsive layout */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-base sm:text-lg font-medium">Total Items:</span>
                <span className="text-base sm:text-lg">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <span className="text-lg sm:text-xl font-bold">Total Amount:</span>
                <span className="text-lg sm:text-xl font-bold text-emerald-600">
                  ₹{calculateTotal().toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons - Responsive layout */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              onClick={clearCart}
              className="order-2 sm:order-1 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Clear Cart
            </button>
            <div className="order-1 sm:order-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/")}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
 