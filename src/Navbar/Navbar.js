import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Register/UserContext';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 left-0 z-20 h-16">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        <Link to="/home" className="text-3xl font-bold text-white">🏠︎</Link>
        <div className="hidden md:flex space-x-6">
          {user && <span className="text-white">Welcome, {user.name}!</span>}
          {user ? (
            <button onClick={logout} className="text-white hover:text-gray-400 transition-colors">Logout</button>
          ) : (
            <Link to="/login" className="text-white hover:text-gray-400 transition-colors">Login</Link>
          )}
          <Link to="/contactUs" className="text-white hover:text-gray-400 transition-colors">Contact Us</Link>
          <Link to="/cart" className="text-white hover:text-gray-400 transition-colors">🛒</Link> 
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-80 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full">
          <Link to="/home" className="text-white text-2xl mb-6" onClick={toggleMenu}>Home</Link>
          {user ? (
            <button onClick={logout} className="text-white text-2xl mb-6" onChange={toggleMenu}>Logout</button>
          ) : (
            <Link to="/login" className="text-white text-2xl mb-6" onClick={toggleMenu}>Login</Link>
          )}
          <Link to="/contactUs" className="text-white text-2xl mb-6" onClick={toggleMenu}>Contact Us</Link>
          <Link to="/cart" className="text-white text-2xl" onClick={toggleMenu}>🛒</Link> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
