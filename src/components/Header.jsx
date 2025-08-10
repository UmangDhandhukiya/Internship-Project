"use client"

import { ShoppingBasket, UserRound, Menu, X, Search } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../contexts/CartContext"

/**
 * Header Component
 * Responsive navigation header with mobile menu, search functionality, and cart integration
 * Features:
 * - Mobile-first responsive design
 * - Collapsible mobile navigation menu
 * - Cart item counter badge
 * - Search functionality
 * - Multi-level header structure with promotional banners
 */
const Header = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Cart context for displaying cart item count
  const { cart, getCartItemCount } = useCart()

  /**
   * Toggle mobile menu visibility
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  /**
   * Close mobile menu when navigation link is clicked
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="h-auto">
      {/* Top promotional banner - Hidden on mobile, visible on tablet+ */}
      <div className="bg-emerald-700 h-[40px] text-white hidden sm:flex justify-center items-center font-medium">
        <p className="text-sm md:text-base">Welcome to E-commerce !</p>
      </div>

      {/* Main header section */}
      <div className="h-[70px] px-4 sm:px-6 lg:px-10 flex justify-between items-center border-b border-gray-200">
        {/* Logo section */}
        <Link to={"/"} className="flex-shrink-0">
          <div className="text-2xl sm:text-3xl lg:text-4xl border-b cursor-pointer">
            The<span className="pl-2 sm:pl-4">Plant</span>
          </div>
        </Link>

        {/* Desktop search bar - Hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              className="border border-gray-200 hover:border-black w-full h-[45px] px-6 py-2 pr-12 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              type="text"
              name="search"
              placeholder="Search for plants..."
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Desktop action icons */}
        <div className="hidden md:flex gap-6 cursor-pointer items-center">
          <UserRound size={23} className="hover:text-emerald-700 transition-colors" />
          <Link to={"/cart"} className="relative">
            <ShoppingBasket size={23} className="hover:text-emerald-700 transition-colors" />
            {/* Cart item counter badge */}
            {getCartItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {getCartItemCount()}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile menu button and cart icon */}
        <div className="flex md:hidden items-center gap-4">
          {/* Mobile cart icon */}
          <Link to={"/cart"} className="relative">
            <ShoppingBasket size={23} className="hover:text-emerald-700 transition-colors" />
            {getCartItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {getCartItemCount()}
              </span>
            )}
          </Link>

          {/* Mobile menu toggle button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile search bar - Visible only on mobile */}
      <div className="md:hidden px-4 py-3 border-b border-gray-200">
        <div className="relative">
          <input
            className="border border-gray-200 hover:border-black w-full h-[40px] px-4 py-2 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            type="text"
            name="search"
            placeholder="Search for plants..."
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>

      {/* Desktop navigation menu */}
      <div className="hidden md:flex h-[60px] justify-center items-center list-none gap-6 lg:gap-10 font-medium cursor-pointer">
        <Link
          to={"/New-Arrival"}
          className="hover:text-emerald-700 transition-colors px-2 py-1 rounded-md hover:bg-emerald-50"
        >
          New Arrival
        </Link>
        <Link
          to={"/Popular"}
          className="hover:text-emerald-700 transition-colors px-2 py-1 rounded-md hover:bg-emerald-50"
        >
          Most Popular
        </Link>
        <Link
          to={"/Out-Door-Plant"}
          className="hover:text-emerald-700 transition-colors px-2 py-1 rounded-md hover:bg-emerald-50"
        >
          Outdoor Plants
        </Link>
        <Link
          to={"/plant-Care"}
          className="hover:text-emerald-700 transition-colors px-2 py-1 rounded-md hover:bg-emerald-50"
        >
          Plant Care
        </Link>
      </div>

      {/* Mobile navigation menu - Collapsible */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white border-b border-gray-200`}
      >
        <div className="flex flex-col py-4 px-4 space-y-4 font-medium">
          <Link
            to={"/New-Arrival"}
            onClick={closeMobileMenu}
            className="hover:text-emerald-700 transition-colors py-2 px-3 rounded-md hover:bg-emerald-50"
          >
            New Arrival
          </Link>
          <Link
            to={"/Popular"}
            onClick={closeMobileMenu}
            className="hover:text-emerald-700 transition-colors py-2 px-3 rounded-md hover:bg-emerald-50"
          >
            Most Popular
          </Link>
          <Link
            to={"/Out-Door-Plant"}
            onClick={closeMobileMenu}
            className="hover:text-emerald-700 transition-colors py-2 px-3 rounded-md hover:bg-emerald-50"
          >
            Outdoor Plants
          </Link>
          <Link
            to={"/plant-Care"}
            onClick={closeMobileMenu}
            className="hover:text-emerald-700 transition-colors py-2 px-3 rounded-md hover:bg-emerald-50"
          >
            Plant Care
          </Link>

          {/* Mobile user actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <UserRound size={20} className="hover:text-emerald-700 transition-colors" />
            <span className="text-sm text-gray-600">Account</span>
          </div>
        </div>
      </div>

      {/* Bottom promotional banner */}
      <div className="bg-emerald-700 h-[40px] text-white flex justify-center items-center font-medium cursor-pointer">
        <p className="px-2 underline text-sm md:text-base text-center">Buy one Get one offer started soon...!</p>
      </div>
    </div>
  )
}

export default Header
