"use client"

import { createContext, useContext, useState } from "react"

// Create Cart Context for global state management
const CartContext = createContext()

/**
 * CartProvider Component
 * Provides cart functionality throughout the application
 * Manages cart state including add, remove, and clear operations
 */
export const CartProvider = ({ children }) => {
  // Cart state - array of products with quantities
  const [cart, setCart] = useState([])

  /**
   * Add product to cart
   * If product exists, increment quantity
   * If new product, add with quantity 1
   * @param {Object} product - Product object to add to cart
   */
  const addToCart = (product) => {
    setCart((prev) => {
      // Check if product already exists in cart
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        // Increment quantity for existing product
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      // Add new product with quantity 1
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  /**
   * Remove product from cart completely
   * @param {string|number} id - Product ID to remove
   */
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  /**
   * Clear all items from cart
   */
  const clearCart = () => {
    setCart([])
  }

  /**
   * Get total number of items in cart
   * @returns {number} Total quantity of all items
   */
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  /**
   * Get total price of all items in cart
   * @returns {number} Total price in INR
   */
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price_inr * item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartItemCount,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

/**
 * Custom hook to use cart context
 * @returns {Object} Cart context value
 */
export const useCart = () => useContext(CartContext)
