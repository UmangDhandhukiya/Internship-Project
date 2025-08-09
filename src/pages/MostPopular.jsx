"use client";
import { data } from "../utills/data";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const MostPopular = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="h-full p-10 flex flex-col gap-4">
      <h1 className="text-4xl font-light">Most-Popular Plants</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-start p-4 cursor-pointer w-64 hover:shadow-lg transition-shadow duration-300 rounded-lg bg-white"
            onClick={() =>
              navigate(`/plant/${index}`, { state: { plant: item } })
            }
          >
            <img
              src={item.image_url || "/placeholder.svg"}
              alt={item.common_name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-xl py-1 font-medium">{item.common_name}</p>
            <p className="font-light text-gray-700">
              <b>From</b> ₹{item.price_inr.toLocaleString()}
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent navigation
                addToCart(item);
              }}
              className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 text-sm rounded shadow hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
