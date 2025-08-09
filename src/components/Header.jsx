import { Heart, ShoppingBasket, UserRound } from "lucide-react";
import React from "react";
import { Link, Links } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="h-auto">
        <div className="bg-emerald-700 h-[40px] text-white flex justify-center items-center font-medium">
          <p>Welcome to E-commerce !</p>
        </div>
        <div className="h-[70px] px-10 flex justify-between items-center border-b border-gray-200">
          <div className="text-4xl border-b cursor-pointer">
            The<span className="pl-4">Plant</span>
          </div>

          <input
            className="border border-gray-200 hover:border-black w-1/2 h-[45px] px-6 py-2"
            type="text"n
            name="search"
            placeholder="Search for plant.."
          />

          <div className="flex gap-6 cursor-pointer">
            <Heart size={23} />
            <UserRound size={23} />
            <ShoppingBasket size={23} />
          </div>
        </div>
        <div className="h-[60px] flex justify-center items-center list-none gap-10 font-medium cursor-pointer">
          <Link to={"/New-Arrival"}>New-Arrival</Link>
          <Link to={"/Popular"}>Most-Popular</Link>
          <li>Outdoor&plant</li>
          <Link to={"/plant-Care"}>Plant Care</Link>
          <li className="text-red-500">Sell</li>
        </div>
        <div className="bg-emerald-700 h-[40px] text-white flex justify-center items-center font-medium cursor-pointer">
          <p className="px-2 underline">Shop Now</p>
        </div>
      </div>
    </>
  );
};

export default Header;
