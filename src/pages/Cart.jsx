// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart, addToCart } = useCart();
  const navigate = useNavigate();

  const decreaseQuantity = (product) => {
    if (product.quantity > 1) {
      removeFromCart(product.id);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <div className="h-full p-10 flex flex-col gap-4">
      <h1 className="text-4xl font-light">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                {/* Image */}
                <img
                  src={item.image_url || "/placeholder.svg"}
                  alt={item.common_name}
                  className="w-32 h-32 object-cover rounded-lg"
                />

                {/* Details */}
                <div className="flex-1">
                  <h3 className="text-xl font-medium">{item.common_name}</h3>
                  <p className="text-gray-700 text-sm mb-1">
                    {item.description || "No description available"}
                  </p>
                  <p className="font-light text-gray-700">
                    <b>Price:</b> ₹{item.price_inr?.toLocaleString()}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => decreaseQuantity(item)}
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
            >
              Clear Cart
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
