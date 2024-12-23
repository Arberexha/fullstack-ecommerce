import React, { useState } from 'react';

const BuyProduct = ({ product, onClose }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditCard');

  if (!product) return null;

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 relative">
        <button className="absolute top-2 right-4 text-black-600" onClick={onClose}>
          x
        </button>
        <div className="flex flex-col md:flex-row">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 object-cover rounded-lg"
          />
          <div className="mt-4 md:mt-0 md:ml-4 flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">${product.price}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>

            
            <div className="mb-4">  
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Select Payment Method</h4>
              <div className="flex flex-col gap-2">
                <label className="flex items-center">
                  <input
                    type="radio" 
                    value="creditCard"
                    checked={selectedPaymentMethod === 'creditCard'}
                    onChange={handlePaymentMethodChange}
                    className="mr-2"
                  />
                  Credit Card
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="paypal"
                    checked={selectedPaymentMethod === 'paypal'}
                    onChange={handlePaymentMethodChange}
                    className="mr-2"
                  />
                  PayPal
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="bankTransfer"
                    checked={selectedPaymentMethod === 'bankTransfer'}
                    onChange={handlePaymentMethodChange}
                    className="mr-2"
                  />
                  Bank Transfer
                </label>
              </div>
            </div>

            <button
              className="bg-gray-600 text-white py-2 px-4 text-sm font-medium hover:bg-gray-700 transition-colors"
              onClick={() => alert(`Purchased ${product.name} with ${selectedPaymentMethod}`)}

            >
              Confirm Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;