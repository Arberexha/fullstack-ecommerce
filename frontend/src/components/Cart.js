// src/components/Cart.js
import React, { useState } from 'react';
import { useCart } from './CartContext';
import Navbar from '../Navbar/Navbar';
import BuyProduct from './BuyProduct';
import Footer from '../Footer/footer';

const Cart = () => {
  const { cart, addToCart, removeFromCart, decreaseQuantity, clearCart } = useCart();
  const [buyProduct, setBuyProduct] = useState(null);

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleBuyNow = (item) => {
    setBuyProduct(item);
  };

  const handleClose = () => {
    setBuyProduct(null);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 bg-white shadow-lg rounded-lg mt-[40px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
        {cart.length > 0 ? (
          <div>
            <ul className="flex flex-wrap gap-5 justify-center">
              {cart.map((item, index) => (
                <li key={index} className="w-full sm:w-1/2 lg:w-1/3 bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">{item.description}</p>
                      <p className="text-gray-600">${item.price} x {item.quantity}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => decreaseQuantity(item)}
                          className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full hover:bg-gray-400"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full hover:bg-gray-400"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleBuyNow(item)}
                        className="bg-gray-600 text-white mr-[10px] py-2 text-sm font-medium w-[100px] hover:bg-gray-700"
                      >
                        Buy Now
                      </button>
                      <button
                        onClick={() => removeFromCart(item)}
                        className="mt-2 bg-red-600 text-white ml-[170px] px-4 py-2 rounded-full hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</h3>
              <button
                onClick={clearCart}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
              >
                Clear 🛒
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty</p>
        )}

        {buyProduct && (
          <BuyProduct
            product={buyProduct}
            onClose={handleClose}
          />
        )}
      </div>
      
      <Footer className="mt-[400px]" /> 
    </>
  );
};

export default Cart;
