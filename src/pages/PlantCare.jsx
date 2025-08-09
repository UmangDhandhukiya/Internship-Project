import React from 'react';
import { plantCareItems } from '../utills/data';

const PlantCare = () => {
  return (
    <div className="h-full p-10 flex flex-col gap-4">
      <h1 className="text-4xl font-light">Plant Care Items</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {plantCareItems.map((item, index) => (
          <div
            className="relative group p-4 cursor-pointer w-92 h-[500px] transition-all duration-400 bg-white hover:bg-green-100 overflow-hidden"
            key={index}
          >
            <img
              src={item.imageUrl}
              alt={item.productName}
              className="w-full h-96 object-cover rounded-md group-hover:opacity-0 transition-opacity duration-300"
            />

            <div className="mt-2 group-hover:opacity-0 transition-opacity duration-300">
              <p className="font-light text-gray-700">
                <b>From</b> ₹{item.price}
              </p>
              <p className="font-light text-gray-700">{item.productName}</p>
            </div>

            <div className="absolute inset-0 p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm text-gray-800 font-medium text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCare;
