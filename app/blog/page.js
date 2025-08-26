'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14: A Complete Guide",
    excerpt: "Learn how to build modern web applications with Next.js 14, including the latest features like App Router and Server Components.",
    author: "John Smith",
    date: "2024-01-15",
    category: "Development",
    image: "/api/placeholder/400/250",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    id: 2,
    title: "The Future of Web Design: Trends to Watch in 2024",
    excerpt: "Discover the latest design trends that are shaping the future of web development, from AI-powered interfaces to sustainable design practices.",
    author: "Sarah Johnson",
    date: "2024-01-12",
    category: "Design",
    image: "/api/placeholder/400/250",
    readTime: "6 min read",
    tags: ["Design", "UI/UX", "Trends"]
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "A comprehensive guide to creating robust, scalable REST APIs using Node.js, Express, and modern best practices.",
    author: "Mike Davis",
    date: "2024-01-10",
    category: "Backend",
    image: "/api/placeholder/400/250",
    readTime: "12 min read",
    tags: ["Node.js", "API", "Backend"]
  },
  {
    id: 4,
    title: "Mastering CSS Grid: Advanced Layout Techniques",
    excerpt: "Take your CSS Grid skills to the next level with advanced techniques for creating complex, responsive layouts.",
    author: "Emily Chen",
    date: "2024-01-08",
    category: "CSS",
    image: "/api/placeholder/400/250",
    readTime: "10 min read",
    tags: ["CSS", "Grid", "Layout"]
  },
  {
    id: 5,
    title: "Introduction to Machine Learning for Web Developers",
    excerpt: "Learn how to integrate machine learning capabilities into your web applications using TensorFlow.js and modern ML APIs.",
    author: "David Wilson",
    date: "2024-01-05",
    category: "AI/ML",
    image: "/api/placeholder/400/250",
    readTime: "15 min read",
    tags: ["Machine Learning", "AI", "JavaScript"]
  },
  {
    id: 6,
    title: "Optimizing React Performance: Tips and Best Practices",
    excerpt: "Discover proven strategies to optimize your React applications for better performance and user experience.",
    author: "Lisa Rodriguez",
    date: "2024-01-03",
    category: "React",
    image: "/api/placeholder/400/250",
    readTime: "9 min read",
    tags: ["React", "Performance", "Optimization"]
  }
];

const categories = ["All", "Development", "Design", "Backend", "CSS", "AI/ML", "React"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest insights, tutorials, and industry news.
              Discover tips, tricks, and best practices from our team of experts.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Featured Image</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm ml-4">{filteredPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {filteredPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {filteredPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{filteredPosts[0].author}</p>
                      <p className="text-sm text-gray-500">{filteredPosts[0].date}</p>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${filteredPosts[0].id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Image</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or selected category.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 6 && (
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Load More Articles
            </button>
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to our newsletter and never miss our latest articles and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}