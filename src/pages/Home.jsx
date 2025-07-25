import React from "react";

const Home = () => {
  return (
    <div className="h-full flex">
      <div className="w-1/3 flex flex-col justify-center items-center flex-wrap p-12 gap-8">
        <h1 className="font-medium text-7xl">Your New Favorite Pickle</h1>
        <p className="font-light">
          Soft spikes and serious personality are two of the reasons you'll want
          to scoop up our newest arrival.
        </p>
        <div className="flex justify-between items-center gap-6">
          <button className="px-2 py-3 bg-emerald-700 text-white font-light">
            Shp the Pickle Plant
          </button>
          <button className="px-2 py-3 text-emerald-700 font-light hover:bg-emerald-200">
            Shop Beginner-Friendly Plant
          </button>
        </div>
      </div>
      <div className="w-2/3">
        <img
          className="w-full h-full object-cover"
          src="https://thesill.com/cdn/shop/files/Pickle-Plant-Hero-Named.png?v=1753389656&width=3840"
          alt=""
        />
        {/* <img className='w-full h-full object-cover' src="https://www.thesill.com/cdn/shop/files/3d7d7888491acd58a2cb9a259ccc7c4dd7c65271-1600x1600.webp?v=1728912202" alt="" /> */}
      </div>
    </div>
  );
};

export default Home;
