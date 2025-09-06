// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import MostPopular from "./pages/MostPopular";
// import NewArrival from "./pages/NewArrival";
// import PlantCare from "./pages/PlantCare";
// import OutDoorPlant from "./pages/OutDoorPlant";
// import ProductDetail from "./pages/ProductDetail";
// import { CartProvider } from "./contexts/CartContext";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import Reg from "./pages/Reg";
// import appStore from "./utills/appStore"
// import { Provider } from "react-redux";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/New-Arrival",
//         element: <NewArrival />,
//       },
//       {
//         path: "/Popular",
//         element: <MostPopular />,
//       },
//       {
//         path: "/Cart",
//         element: <Cart />,
//       },
//       {
//         path: "/Out-Door-Plant",
//         element: <OutDoorPlant />,
//       },
//       {
//         path: "/plant-Care",
//         element: <PlantCare />,
//       },
//       {
//         path: "/plant/:id", // Dynamic product detail route
//         element: <ProductDetail />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Reg />,
//   },
// ]);

// const App = () => {
//   return (
//     <Provider store={appStore}>
//       <CartProvider>
//         <RouterProvider router={router} />
//       </CartProvider>
//     </Provider>
//   );
// };

// export default App;


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
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import appStore from "./utills/appStore";
import { Provider } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/New-Arrival", element: <NewArrival /> },
      { path: "/Popular", element: <MostPopular /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/Out-Door-Plant", element: <OutDoorPlant /> },
      { path: "/plant-Care", element: <PlantCare /> },
      { path: "/plant/:id", element: <ProductDetail /> },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Reg />
      </PublicRoute>
    ),
  },
]);

const App = () => {
  return (
    <Provider store={appStore}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </Provider>
  );
};

export default App;
