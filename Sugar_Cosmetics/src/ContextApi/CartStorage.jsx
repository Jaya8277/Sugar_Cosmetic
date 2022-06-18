import React, { createContext, useState, } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {

  const [Cart, setCart] = useState([]);
  const [amount,setAmount] = useState(0) 

  return (
    <CartContext.Provider value={{ Cart, setCart, amount, setAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
