// src/App.js
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Register/Login';
import SignUp from './Register/SignUp';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import ProductDetails from './components/BuyProduct'; 
import { CartProvider } from './components/CartContext';
import { UserProvider } from './Register/UserContext';
import ShoppingList from './components/shopingList';


function App() {
  return (
    <UserProvider>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="shop" element={<ShoppingList />} />
        </Routes>
      </Router>
    </CartProvider>
    </UserProvider>
  );
}

export default App;
