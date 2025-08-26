// components/Navbar.js
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Mock cart data (replace with your actual cart state management)
  const [cart, setCart] = useState([]);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar-content')) {
        setIsOpen(false);
      }
      
      // Close cart when clicking outside
      if (isCartOpen && !event.target.closest('.cart-dropdown')) {
        setIsCartOpen(false);
      }
    };

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, isCartOpen]);

  // Mock cart functions (replace with your actual implementations)
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-gray-100 shadow-md'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-4 navbar-content">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.png"
                alt="Store Logo"
                width={40}
                height={40}
                className="rounded-full shadow-md"
              />
              <span className="text-xl font-bold text-gray-800">
                My Store
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <ul className="hidden md:flex space-x-12">
            <li>
              <Link href="/">
                <span className="text-teal-600 font-semibold border-b-2 border-teal-600 pb-1 cursor-pointer">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <span className="text-gray-700 hover:text-teal-600 font-semibold pb-1 cursor-pointer transition-colors duration-200 hover:border-b-2 hover:border-teal-600">
                  Shop
                </span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <span className="text-gray-700 hover:text-teal-600 font-semibold pb-1 cursor-pointer transition-colors duration-200 hover:border-b-2 hover:border-teal-600">
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="text-gray-700 hover:text-teal-600 font-semibold pb-1 cursor-pointer transition-colors duration-200 hover:border-b-2 hover:border-teal-600">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="text-gray-700 hover:text-teal-600 font-semibold pb-1 cursor-pointer transition-colors duration-200 hover:border-b-2 hover:border-teal-600">
                  Contact
                </span>
              </Link>
            </li>
          </ul>

          {/* Desktop Icons (Cart + Auth) */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Cart Icon */}
            <div className="relative cart-dropdown">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative text-gray-600 hover:text-teal-600 transition-colors duration-200 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5 0h6" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Shopping Cart</h3>
                    
                    {cart.length === 0 ? (
                      <p className="text-gray-500 text-center py-4">Your cart is empty</p>
                    ) : (
                      <div>
                        <div className="max-h-64 overflow-y-auto">
                          {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between py-2 border-b">
                              <div className="flex-1">
                                <h4 className="text-sm font-medium text-gray-800">{item.name}</h4>
                                <p className="text-sm text-gray-500">${item.price}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300"
                                >
                                  -
                                </button>
                                <span className="text-sm font-medium">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300"
                                >
                                  +
                                </button>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-red-500 hover:text-red-700 ml-2"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex justify-between items-center mb-4">
                            <span className="font-semibold text-gray-800">Total: ${cartTotal.toFixed(2)}</span>
                          </div>
                          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                            Checkout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Auth buttons */}
            <div className="flex items-center space-x-3">
              <Link href="/login">
                <span className="text-gray-600 hover:text-teal-600 font-medium cursor-pointer transition-colors duration-200">
                  Login
                </span>
              </Link>
              <Link href="/signup">
                <span className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded cursor-pointer transition-colors duration-200">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Cart Icon (simplified) */}
            <div className="relative md:hidden">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative text-gray-600 hover:text-teal-600 transition-colors duration-200 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5 0h6" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-2 pb-6 bg-white shadow-lg">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <span className="text-teal-600 font-semibold border-b-2 border-teal-600 pb-1 cursor-pointer block py-2">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/shop" onClick={() => setIsOpen(false)}>
                  <span className="text-gray-700 hover:text-teal-600 font-semibold pb-1 cursor-pointer transition-colors duration-200 hover:border-b-2 hover:border-teal-600 block py-2">
                    Shop
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={() => setIsOpen(false)}>
                  <span className="text-gray-700 hover:text-teal-600 font-semibold pb-1 cursor-pointer transition-colors duration-200 hover:border-b-2 hover:border-teal-600 block py-2">
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  <span className="text-gray-700 hover:text-teal-600 font-semibold pb-1 cursor-pointer transition-colors duration-200 hover:border-b-2 hover:border-teal-600 block py-2">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <span className="text-gray-700 hover:text-teal-600 font-semibold pb-1 cursor-pointer transition-colors duration-200 hover:border-b-2 hover:border-teal-600 block py-2">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
            <div className="mt-6 flex flex-col space-y-4 border-t pt-4">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <span className="text-gray-600 hover:text-teal-600 font-medium cursor-pointer transition-colors duration-200 block text-center py-2">
                  Login
                </span>
              </Link>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                <span className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded cursor-pointer transition-colors duration-200 block text-center">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;