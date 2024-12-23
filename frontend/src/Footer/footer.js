// src/components/Footer/Footer.js
import React from 'react';

const Footer = ({ className }) => {
  return (
    <footer className={`bg-gray-800 text-white py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Us */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <p className="text-gray-400">We are a leading e-commerce company dedicated to providing the best products at unbeatable prices.</p>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul>
              <li className="mb-2">
                <span className="text-gray-400">Email: </span>
                <a href="mailto:support@ecommerce.com" className="text-gray-200 hover:underline">support@ecommerce.com</a>
              </li>
              <li>
                <span className="text-gray-400">Phone: </span>
                <a href="tel:+1234567890" className="text-gray-200 hover:underline">+123-456-7890</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.facebook.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
