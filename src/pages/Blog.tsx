import React from 'react';
import Navbar from '../components/Navbar';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of AI in Manufacturing',
    excerpt: 'Explore how artificial intelligence is revolutionizing the manufacturing industry...',
    author: 'Dr. Sarah Chen',
    date: 'Mar 15, 2024',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
  },
  {
    title: 'Implementing Smart Factory Solutions',
    excerpt: 'A comprehensive guide to transforming your traditional factory into a smart manufacturing facility...',
    author: 'Michael Roberts',
    date: 'Mar 12, 2024',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80'
  },
  {
    title: 'Predictive Maintenance Success Stories',
    excerpt: 'Real-world examples of how predictive maintenance has saved millions in manufacturing costs...',
    author: 'Emily Watson',
    date: 'Mar 10, 2024',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="absolute -left-1/4 top-1/4 w-96 h-96 bg-custom-purple/30 rounded-full blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 w-96 h-96 bg-custom-purple/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-custom-purple to-emerald-400">Insights</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Stay updated with the latest trends and innovations in AI manufacturing
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.title} className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-transparent transition duration-200 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-slate-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-custom-purple hover:bg-custom-purple-dark text-white px-6 py-3 rounded-3xl font-semibold transition-colors flex items-center justify-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}