import Image from 'next/image';

export default function Shop() {
  // Sample products data
  const products = [
    {
      id: 1,
      name: "Formal Shirts",
      price: 299.99,
      originalPrice: 349.99,
      image: "/imagered-shirt.png", // Update this path
      category: "Shirts",
      rating: 4.5,
      inStock: true
    },
    {
      id: 2,
      name: "Hoodies",
      price: 199.99,
      originalPrice: 249.99,
      image: "/images/hoodies.jpg", // Update this path
      category: "Hoodies",
      rating: 4.3,
      inStock: true
    },
    {
      id: 3,
      name: "Trousers",
      price: 89.99,
      originalPrice: 119.99,
      image: "/images/trousers.jpg", // Update this path
      category: "Pants",
      rating: 4.7,
      inStock: false
    },
    {
      id: 4,
      name: "Jackets",
      price: 59.99,
      originalPrice: 79.99,
      image: "/images/jackets.jpg", // Update this path
      category: "Hoodie",
      rating: 4.4,
      inStock: true
    },
    {
      id: 5,
      name: "T-Shirts",
      price: 39.99,
      originalPrice: 49.99,
      image: "/images/t-shirts.jpg", // Update this path
      category: "Shirts",
      rating: 4.2,
      inStock: true
    },
    {
      id: 6,
      name: "Pants",
      price: 79.99,
      originalPrice: 99.99,
      image: "/images/pants.jpg", // Update this path
      category: "Pants",
      rating: 4.6,
      inStock: true
    }
  ];

  const categories = ["All", "Shirts", "Pants", "Hoodies"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Our Shop
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated collection of premium products. 
              Quality, innovation, and value in every item.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
                <option>Rating</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Product Image */}
                <div className="relative flex justify-center items-center bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="rounded-xl object-cover"
                  />
                  {!product.inStock && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold z-10">
                      Out of Stock
                    </div>
                  )}
                  {product.originalPrice > product.price && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold z-10">
                      Sale
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      ({product.rating})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    disabled={!product.inStock}
                    className={`w-full py-3 px-4 rounded-md font-semibold transition-colors ${
                      product.inStock
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, 
            special offers, and exclusive deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
            </div>
        </div>
      </section>
    </div>
  );
}
