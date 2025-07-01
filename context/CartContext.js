"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const CartContext = createContext();

// Initial Cart Item Template
const initialCartItem = {
  productName: "",
  quantity: 0,
  discount_price: 0,
  regular_price: 0,
  color: "",
  ramSize: "",
  imageUrl: "",
  sellerName: "",
};

export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState(initialCartItem);

  // Load from localStorage when app loads
  useEffect(() => {
    const storedCart = localStorage.getItem("addedToCart");
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, []);

  // Function to add/update cart
  const addToCart = (item) => {
    setCartItem(item);
    localStorage.setItem("addedToCart", JSON.stringify(item));
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to access the context
export function useCart() {
  return useContext(CartContext);
}