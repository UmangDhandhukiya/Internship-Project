import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MostPopular from "./pages/MostPopular";
import NewArrival from "./pages/NewArrival";
import PlantCare from "./pages/PlantCare";
import OutDoorPlant from "./pages/OutDoorPlant";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./pages/Cart";

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
        element: <MostPopular />,
      },
      {
        path: "/Cart",
        element: <Cart/>,
      },
      {
        path: "/Out-Door-Plant",
        element: <OutDoorPlant />,
      },
      {
        path: "/plant-Care",
        element: <PlantCare />,
      },
      {
        path: "/plant/:id", // Dynamic product detail route
        element: <ProductDetail />,
      },
    ],
  },
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
