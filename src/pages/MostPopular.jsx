"use client"
import { data } from "../utills/data"

const MostPopular = ({ onProductClick }) => {
  return (
    <div className="h-full p-10 flex flex-col gap-4">
      <h1 className="text-4xl font-light">Most-Popular Plants</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item, index) => (
          <div
            className="flex flex-col items-start p-4 cursor-pointer w-64 hover:shadow-lg transition-shadow duration-300 rounded-lg"
            key={index}
            onClick={() => onProductClick(item, index)}
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default MostPopular
