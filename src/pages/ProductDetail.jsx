import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const API_KEY = import.meta.env.VITE_PERENUAL_API_KEY;

const ProductDetail = () => {
  const { state } = useLocation();
  const plantFromState = state?.plant || null;

  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [plant, setPlant] = useState(plantFromState || null);
  const [loading, setLoading] = useState(!plantFromState);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!plantFromState && id) {
      setLoading(true);
      fetch(`https://perenual.com/api/v2/species/details/${id}?key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          setPlant({
            id: data.id,
            name: data.common_name,
            desc: data.scientific_name?.[0] || "No description available",
            price: Math.floor(Math.random() * 2000) + 500,
            image: data.default_image?.regular_url || "/placeholder.svg",
            details: data.description || "No additional details available.",
          });
        })
        .catch(() => setError("Failed to load plant details."))
        .finally(() => setLoading(false));
    }
  }, [id, plantFromState]);

  if (loading) return <p className="p-10 text-lg animate-pulse">Loading product details...</p>;
  if (error) return <p className="p-10 text-red-500">{error}</p>;
  if (!plant) return <p className="p-10">No plant details found.</p>;

  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center items-center bg-gray-100 p-6">
          <img
            src={plant.image}
            alt={plant.name}
            className="rounded-lg shadow-md max-h-[450px] object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{plant.name}</h1>
            <p className="text-green-600 font-medium mt-2">{plant.desc}</p>
            <p className="mt-4 text-gray-600 leading-relaxed">{plant.details}</p>
            <div className="mt-6 border-t border-gray-200 pt-4">
              <p className="text-2xl font-semibold text-gray-900">₹{plant.price}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => addToCart(plant)}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg text-lg font-medium shadow hover:bg-green-700 transition duration-300"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg text-lg font-medium shadow hover:bg-gray-300 transition duration-300"
            >
              Back
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
