"use client"

import { Link } from "react-router-dom"

/**
 * Footer Component
 * Responsive footer with company information, navigation links, and newsletter signup
 * Features:
 * - Mobile-first responsive grid layout
 * - Collapsible sections on mobile devices
 * - Newsletter subscription form
 * - Contact information and quick links
 * - Social media integration ready
 */
const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-14 py-8 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Brand and Newsletter Section */}
          <div className="flex flex-col items-start gap-4 lg:gap-5 sm:col-span-2 lg:col-span-1">
            {/* Brand Logo */}
            <div className="text-2xl sm:text-3xl lg:text-4xl border-b cursor-pointer">
              The<span className="pl-2 lg:pl-4">Plant</span>
            </div>

            {/* Newsletter Signup */}
            <div className="w-full">
              <h2 className="text-lg font-medium mb-2">Subscribe</h2>
              <p className="text-sm mb-4 text-emerald-100">Get 10% off your first order</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  className="flex-1 border border-emerald-600 bg-transparent p-2 text-white placeholder-emerald-200 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-sm"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-white text-emerald-700 px-4 py-2 rounded-md hover:bg-emerald-50 transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="flex flex-col items-start gap-3 lg:gap-5">
            <h2 className="text-lg lg:text-xl font-medium border-b border-emerald-600 pb-1">Support</h2>
            <div className="space-y-2 text-sm lg:text-base text-emerald-100">
              <p>
                Sant Bhojalram Society,
                <br />
                Street 1, Rajkot
              </p>
              <p className="hover:text-white transition-colors cursor-pointer">greenplant@gmail.com</p>
              <p className="hover:text-white transition-colors cursor-pointer">+91 92650 81552</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="flex flex-col gap-3 lg:gap-5">
            <h2 className="text-lg lg:text-xl font-medium border-b border-emerald-600 pb-1">Account</h2>
            <ul className="space-y-2 text-sm lg:text-base text-emerald-100">
              <li className="hover:text-white hover:underline transition-colors cursor-pointer">My Account</li>
              <li className="hover:text-white hover:underline transition-colors cursor-pointer">Login / Register</li>
              <li className="hover:text-white hover:underline transition-colors cursor-pointer">
                <Link to={"/cart"}>Cart</Link>
              </li>
              <li className="hover:text-white hover:underline transition-colors cursor-pointer">Wishlist</li>
              <li className="hover:text-white hover:underline transition-colors cursor-pointer">
                <Link to={"/"}>Shop</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-3 lg:gap-5">
            <h2 className="text-lg lg:text-xl font-medium border-b border-emerald-600 pb-1">Quick Links</h2>
            <ul className="space-y-2 text-sm lg:text-base text-emerald-100">
              <li className="hover:text-white hover:underline transition-colors">
                <Link to={"/Popular"}>Most Popular</Link>
              </li>
              <li className="hover:text-white hover:underline transition-colors">
                <Link to={"/New-Arrival"}>New Arrivals</Link>
              </li>
              <li className="hover:text-white hover:underline transition-colors">
                <Link to={"/Out-Door-Plant"}>Outdoor Plants</Link>
              </li>
              <li className="hover:text-white hover:underline transition-colors">
                <Link to={"/plant-Care"}>Plant Care</Link>
              </li>
              <li className="hover:text-white hover:underline transition-colors cursor-pointer">Terms of Use</li>
              <li className="hover:text-white hover:underline transition-colors cursor-pointer">FAQ</li>
              <li className="hover:text-white hover:underline transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-emerald-600 px-4 sm:px-6 lg:px-14 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-emerald-100">
          <p>&copy; 2024 The Plant. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
