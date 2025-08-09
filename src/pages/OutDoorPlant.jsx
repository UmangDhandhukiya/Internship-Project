import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_PERENUAL_API_KEY; // put this in .env

const OutDoorPlant = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await fetch(
          `https://perenual.com/api/v2/species-list?key=${API_KEY}`
        );
        const data = await res.json();
        setPlants(data.data || []);
      } catch (err) {
        console.error("Error fetching plants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  if (loading) {
    return <p className="p-10 text-lg">Loading...</p>;
  }

  return (
    <div className="h-full p-10 flex flex-col justify-between items-start">
      <h1 className="text-4xl font-light mb-6">OutDoor-Pants</h1>
      <div className="flex flex-wrap gap-6">
        {plants.map((item) => (
          <Link to={`/plant/${item.id}`} key={item.id}>
            <div className="flex flex-col items-start p-4 cursor-pointer w-64 hover:shadow-lg transition-shadow duration-300 rounded-lg bg-white">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src={item.default_image?.regular_url || "/placeholder.svg"}
                alt={item.common_name || "Unknown Plant"}
              />
              <p className="text-xl py-1 font-medium">
                {item.common_name || "No Name"}
              </p>
              <p className="text-sm font-light py-1">
                {item.scientific_name?.[0] || ""}
              </p>
              <p className="font-light py-1">
                <b>From</b> ₹{Math.floor(Math.random() * 2000) + 500}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OutDoorPlant;
