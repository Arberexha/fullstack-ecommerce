import React, { useState } from 'react';
import { useCart } from './CartContext';
import BuyProduct from './BuyProduct';

const ShoppingList = ({ items }) => {
  const { addToCart } = useCart();
  const [buyProduct, setBuyProduct] = useState(null);

  const handleBuyNow = (item) => {
    setBuyProduct(item);
  };

  const handleClose = () => {
    setBuyProduct(null);
  };

  return (
    <div className="mt-8 px-4">
      {items.length > 0 ? (
        <ul className="flex flex-wrap justify-evenly gap-6">
          {items.map((item, index) => (
            <li key={index} className="w-[315px] h-[450px] bg-white rounded-2xl shadow-lg transition-transform transform hover:translate-y-[-5px] hover:bg-gray-200 hover:shadow-xl overflow-hidden">
              <h3 className="text-xl font-semibold text-gray-800 pt-4 text-center mb-2">{item.name}</h3>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">${item.price}</h3>
                
                <button
                  onClick={() => {
                    addToCart(item);
                    alert(`${item.name} added to cart`);
                  }}
                  className="w-[130px] bg-gray-600 text-white py-2 text-sm font-medium hover:bg-gray-700 transition-colors ml-[15px]"
                >
                  Add to Cart🛒
                </button>
                <button
                  onClick={() => handleBuyNow(item)}
                  className="bg-gray-600 text-white ml-[15px] py-2 mt-[20px] text-sm font-medium w-[100px] hover:bg-gray-700"
                >
                  Buy Now
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center">No items to display</p>
      )}
      {buyProduct && <BuyProduct product={buyProduct} onClose={handleClose} />}
    </div>
  );
};

export default ShoppingList;
