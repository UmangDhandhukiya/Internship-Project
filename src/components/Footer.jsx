import React from "react";
import { Link, Links } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-92 bg-emerald-700 flex justify-around items-center text-white px-14 py-10">
      <div className="h-full flex flex-col items-start gap-5">
        <div className="text-4xl border-b cursor-pointer">
          The<span className="pl-4">Plant</span>
        </div>
        <h1>Subscribe</h1>
        <p>Get 10% off your first order</p>
        <input
          className="border-1 border-white p-2 text-white"
          type="text"
          placeholder="Enter your e-mail"
        />
      </div>
      <div className="h-full flex flex-col items-start gap-5">
        <h1 className="text-xl underline">Support</h1>
        <p>
          sant bhojalram society,
          <br />
          street 1, rajkot
        </p>
        <p>greenplant@gmail.com</p>
        <p>+91 92650 81552</p>
      </div>
      <div className="h-full flex flex-col gap-5 list-none">
        <h1 className="text-xl underline ">Account</h1>
        <li className="hover:underline">My Account</li>
        <li className="hover:underline">Login / Register</li>
        <li className="hover:underline">Cart</li>
        <li className="hover:underline">Wishlist</li>
        <Link to={"/"} className="hover:underline hover:text-black">Shop</Link>
      </div>
      <div className="h-full flex flex-col gap-5 list-none">
        <h1 className="text-xl underline">Quick Link</h1>
        <Link to={"/Popular"} className="hover:underline hover:text-black">Most-Popular</Link>
        <li className="hover:underline">Terms of use</li>
        <li className="hover:underline">FAQ</li>
        <li className="hover:underline">Contact</li>
      </div>
    </div>
  );
};

export default Footer;
