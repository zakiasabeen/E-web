// app/products/[id]/page.js
import React from "react";

// Dummy product data (extended with sizes + colors)
const products = {
  tshirt: {
    name: "Casual T-shirts",
    brand: "Adidas",
    price: 78,
    description: "Soft cotton casual T-shirt perfect for everyday wear.",
    image: "/n4.jpg",
    rating: 5,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
  },
  "formal-shirt": {
    name: "Formal Shirts",
    brand: "Nike",
    price: 95,
    description: "Elegant formal shirt ideal for office or formal events.",
    image: "/n7.jpg",
    rating: 5,
    sizes: ["M", "L", "XL"],
    colors: ["White", "Sky Blue", "Gray"],
  },
  "dress-pants": {
    name: "Dress Pants",
    brand: "Nike",
    price: 95,
    description: "Tailored dress pants for a sharp and modern look.",
    image: "/n6.jpg",
    rating: 5,
    sizes: ["30", "32", "34", "36"],
    colors: ["Black", "Navy Blue"],
  },
  hoodie: {
    name: "Sport Casual Hoodie",
    brand: "Puma",
    price: 62,
    description: "Comfortable hoodie for casual and sporty outfits.",
    image: "/fa6.jpg",
    rating: 4,
    sizes: ["S", "M", "L"],
    colors: ["Red", "Gray", "Black"],
  },
};

export default function ProductPage({ params }) {
  const { id } = params;
  const product = products[id];

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Product Image */}
      <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          {product.name}
        </h2>
        <p className="text-gray-500 text-lg mb-6">{product.brand}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>

        {/* Stars */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < product.rating ? "text-yellow-400" : "text-gray-300"
              } fill-current`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Available Sizes:</h3>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="px-3 py-1 border border-gray-300 rounded-lg text-sm cursor-pointer hover:bg-gray-100"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Available Colors:</h3>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <span
                key={color}
                className="px-3 py-1 border border-gray-300 rounded-lg text-sm cursor-pointer hover:bg-gray-100"
              >
                {color}
              </span>
            ))}
          </div>
        </div>

        {/* Price */}
        <p className="text-3xl font-bold text-gray-900 mb-6">
          ${product.price}
        </p>

        {/* Add to Cart */}
        <button className="px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold shadow-md hover:bg-teal-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
