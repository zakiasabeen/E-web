import React from 'react';
import Link from 'next/link';

const FeaturedProducts = () => {
  const features = [
    { title: "Free Shipping", bgColor: "bg-pink-100", textColor: "text-teal-600", image: "/f1.png" },
    { title: "Online Order", bgColor: "bg-green-100", textColor: "text-teal-600", image: "/f2.png" },
    { title: "Promotions", bgColor: "bg-purple-100", textColor: "text-teal-600", image: "/f4.png" },
    { title: "Happy Sell", bgColor: "bg-blue-100", textColor: "text-teal-600", image: "/f5.png" },
    { title: "24/7 Support", bgColor: "bg-purple-100", textColor: "text-teal-600", image: "/f6.png" },
  ];

  const products = [
    { id: "tshirt", brand: "adidas", name: "Casual T-shirts", price: 78, rating: 5, image: "/n4.jpg" },
    { id: "formal-shirt", brand: "nike", name: "Formal Shirts", price: 95, rating: 5, image: "/n7.jpg" },
    { id: "dress-pants", brand: "nike", name: "Dress Pants", price: 95, rating: 5, image: "/n6.jpg" },
    { id: "hoodie", brand: "puma", name: "Sport Casual Hoodie", price: 62, rating: 4, image: "/fa6.jpg" },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Feature Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`${feature.bgColor} rounded-lg p-4 mb-3 overflow-hidden`}>
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className={`${feature.textColor} font-semibold text-center text-sm`}>
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Featured Products Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-gray-600 text-lg">Summer Collection New Modern Design</p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="block">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="aspect-square bg-gray-50 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{product.brand}</p>
                  <h3 className="font-bold text-lg mb-3 text-gray-800">{product.name}</h3>
                  
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? "text-yellow-400" : "text-gray-300"} fill-current`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-2xl font-bold text-gray-800">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
