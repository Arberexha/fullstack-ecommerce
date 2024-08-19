// src/components/CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    console.log('Initializing cart from localStorage:', savedCart);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    console.log('Saving cart to localStorage:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== item.id));
  };

  const decreaseQuantity = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem.quantity > 1) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        );
      } else {
        return prevCart.filter(cartItem => cartItem.id !== item.id);
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider  };
