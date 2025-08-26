"use client";
import Link from 'next/link';

// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-slate-100 shadow-xl text-gray-800 py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-medium text-yellow-600 mb-2">Trade-in-offer</h4>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Super value deals</h2>
            <h1 className="text-2xl md:text-4xl font-semibold mb-6">On all products</h1>
            <p className="text-xl mb-8 text-gray-600">Save more with coupons & up to 70% off!</p>
            <Link href="/shop" 
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Shop Now
          </Link>
          </div>
          
          {/* Right image */}
          <div className="relative">
            <img 
              src="/hero4.png" 
              alt="Shopping products" 
              className="w-full h-auto rounded-lg shadow-2xl "
            />
            {/* Optional overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-100/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;