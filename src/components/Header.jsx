"use client"

import { ShoppingBasket, UserRound, Menu, X, Search, LogOut } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../contexts/CartContext"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../utills/UserSlice"   // make sure you created this action in your slice

const Header = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Redux
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  // Cart context for displaying cart item count
  const { getCartItemCount } = useCart()

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu when navigation link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

 // Logout handler
const handleLogout = async () => {
  try {
    const res = await fetch("http://localhost:3000/logout", {
      credentials: "include",
    });

    if (res.ok) {
      dispatch(removeUser());   // clear Redux user
      navigate("/login");       // redirect to login
    } else {
      console.error("Logout failed:", await res.json());
    }
  } catch (error) {
    console.error("Logout failed:", error);
  }
};


  return (
    <div className="h-auto">
      {/* Top promotional banner */}
      <div className="bg-emerald-700 h-[40px] text-white hidden sm:flex justify-center items-center font-medium">
        <p className="text-sm md:text-base">Welcome to E-commerce !</p>
      </div>

      {/* Main header */}
      <div className="h-[70px] px-4 sm:px-6 lg:px-10 flex justify-between items-center border-b border-gray-200">
        {/* Logo */}
        <Link to={"/"} className="flex-shrink-0">
          <div className="text-2xl sm:text-3xl lg:text-4xl border-b cursor-pointer">
            The<span className="pl-2 sm:pl-4">Plant</span>
          </div>
        </Link>

        {/* Desktop search bar */}
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

        {/* Desktop actions */}
        <div className="hidden md:flex gap-6 items-center">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Welcome, {user.firstname}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors"
              >
                <LogOut size={20} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login">
              <UserRound size={23} className="hover:text-emerald-700 transition-colors" />
            </Link>
          )}

          <Link to={"/cart"} className="relative">
            <ShoppingBasket size={23} className="hover:text-emerald-700 transition-colors" />
            {getCartItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {getCartItemCount()}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex md:hidden items-center gap-4">
          <Link to={"/cart"} className="relative">
            <ShoppingBasket size={23} className="hover:text-emerald-700 transition-colors" />
            {getCartItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {getCartItemCount()}
              </span>
            )}
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile search */}
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

      {/* Desktop nav */}
      <div className="hidden md:flex h-[60px] justify-center items-center list-none gap-6 lg:gap-10 font-medium">
        <Link to={"/New-Arrival"} className="hover:text-emerald-700 transition-colors px-2 py-1 rounded-md hover:bg-emerald-50">New Arrival</Link>
        <Link to={"/Popular"} className="hover:text-emerald-700 transition-colors px-2 py-1 rounded-md hover:bg-emerald-50">Most Popular</Link>
        <Link to={"/Out-Door-Plant"} className="hover:text-emerald-700 transition-colors px-2 py-1 rounded-md hover:bg-emerald-50">Outdoor Plants</Link>
        <Link to={"/plant-Care"} className="hover:text-emerald-700 transition-colors px-2 py-1 rounded-md hover:bg-emerald-50">Plant Care</Link>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white border-b border-gray-200`}
      >
        <div className="flex flex-col py-4 px-4 space-y-4 font-medium">
          <Link to={"/New-Arrival"} onClick={closeMobileMenu} className="hover:text-emerald-700 transition-colors py-2 px-3 rounded-md hover:bg-emerald-50">New Arrival</Link>
          <Link to={"/Popular"} onClick={closeMobileMenu} className="hover:text-emerald-700 transition-colors py-2 px-3 rounded-md hover:bg-emerald-50">Most Popular</Link>
          <Link to={"/Out-Door-Plant"} onClick={closeMobileMenu} className="hover:text-emerald-700 transition-colors py-2 px-3 rounded-md hover:bg-emerald-50">Outdoor Plants</Link>
          <Link to={"/plant-Care"} onClick={closeMobileMenu} className="hover:text-emerald-700 transition-colors py-2 px-3 rounded-md hover:bg-emerald-50">Plant Care</Link>

          {/* Mobile user actions */}
          {user ? (
            <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-200">
              <span className="text-sm font-medium">Welcome, {user.firstname}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <UserRound size={20} className="hover:text-emerald-700 transition-colors" />
              <Link to="/login" className="text-sm text-gray-600">Account</Link>
            </div>
          )}
        </div>
      </div>

      {/* Bottom banner */}
      <div className="bg-emerald-700 h-[40px] text-white flex justify-center items-center font-medium cursor-pointer">
        <p className="px-2 underline text-sm md:text-base text-center">Buy one Get one offer started soon...!</p>
      </div>
    </div>
  )
}

export default Header
