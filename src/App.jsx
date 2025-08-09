import React, { useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import MostPopular from "./pages/MostPopular"
import NewArrival from "./pages/NewArrival"
import PlantCare from "./pages/PlantCare"
import ProductDetail from "./pages/ProductDetail" // Add this line

const App = () => {
  const [selectedPlant, setSelectedPlant] = useState(null)
  const [cart, setCart] = useState([])

  const handleProductClick = (plant) => {
    setSelectedPlant(plant)
  }

  const handleBack = () => {
    setSelectedPlant(null)
  }

  const handleAddToCart = (plant) => {
    setCart((prev) => [...prev, plant])
    alert(`${plant.common_name} added to cart!`)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/New-Arrival",
          element: <NewArrival />,
        },
        {
          path: "/Popular",
          element: selectedPlant ? (
            <ProductDetail
              plant={selectedPlant}
              onBack={handleBack}
              onAddToCart={handleAddToCart}
            />
          ) : (
            <MostPopular onProductClick={handleProductClick} />
          ),
        },
        {
          path: "/plant-Care",
          element: <PlantCare />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
