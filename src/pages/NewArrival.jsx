import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const NewArrival = () => {
  const { addToCart } = useCart();

  const data = [
    {
      id: 1,
      image:
        "//www.thesill.com/cdn/shop/files/the-sill_Medium-Olive-Tree_Medium_Isabella_Dusty-Rose_Variant_1_9a2349fa-ad88-4622-ac80-b76813907c9f.jpg?v=1750708944&width=416",
      name: "Olive Tree",
      desc: "Our Most Popular Plant",
      price: "1200",
      details:
        "The Olive Tree is a hardy, drought-tolerant plant known for its silvery-green leaves and Mediterranean charm.",
    },
    {
      id: 2,
      image:
        "https://www.thesill.com/cdn/shop/files/the-sill_Medium-Mermaid-Cactus-Purple_Medium_Grant_Cream_Variant.jpg?v=1752687007&width=416",
      name: "Mermaid Tail Cactus",
      desc: "Rare Plant",
      price: "2300",
      details:
        "The Mermaid Tail Cactus is a unique, rare succulent with a wavy crest shape that resembles a mermaid's tail.",
    },
    {
      id: 3,
      image:
        "https://www.thesill.com/cdn/shop/files/the-sill_Medium-Fairy-Castle-Cactus_Medium_Grant_Black_Variant.jpg?v=1752703035&width=416",
      name: "Fairy Castle Cactus",
      desc: "Premium Plant",
      price: "2000",
      details:
        "The Fairy Castle Cactus features tall, spiky stems that resemble the turrets of a castle, perfect for cactus lovers.",
    },
    {
      id: 4,
      image:
        "https://www.thesill.com/cdn/shop/files/the-sill_Medium-African_Milk_Cactus_Medium_Grant_Cream_Variant.jpg?v=1752623296&width=416",
      name: "African Milk Tree",
      desc: "Our Most Popular Plant",
      price: "2200",
      details:
        "The African Milk Tree is a striking succulent with thick, green stems and thorns, often used as a decorative indoor plant.",
    },
     {
      id: 5,
      image:
        "https://www.thesill.com/cdn/shop/files/the-sill_Medium-Mermaid-Cactus-Purple_Medium_Grant_Cream_Variant.jpg?v=1752687007&width=416",
      name: "Mermaid Tail Cactus",
      desc: "Rare Plant",
      price: "1000",
      details:
        "The Mermaid Tail Cactus is a unique, rare succulent with a wavy crest shape that resembles a mermaid's tail.",
    },
  ];

  // Helper function to normalize the object format
  const formatProduct = (item) => ({
    id: item.id,
    common_name: item.name,
    image_url: item.image,
    price_inr: Number(item.price),
    description: item.details || item.desc || "",
  });

  return (
    <div className="h-full p-10 flex flex-col justify-between items-start">
      <h1 className="text-4xl font-light">New Arrivals</h1>
      <div className="h-auto flex gap-6 flex-wrap">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col justify-center items-start p-4 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer w-64"
          >
            <Link to={`/plant/${item.id}`} state={item} className="block w-full">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src={item.image}
                alt={item.name}
              />
              <p className="text-xl py-1 font-medium">{item.name}</p>
              <p className="text-sm font-light py-1">{item.desc}</p>
              <p className="font-light py-1">
                <b>From</b> ₹{item.price}
              </p>
            </Link>

            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(formatProduct(item)); // ✅ sends correct format
              }}
              className="absolute bottom-5 right-3 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
