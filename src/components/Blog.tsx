import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Manufacturing',
    excerpt: 'Explore how artificial intelligence is revolutionizing the manufacturing industry...',
    author: 'Dr. Sarah Chen',
    date: 'Mar 15, 2024',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Implementing Smart Factory Solutions',
    excerpt: 'A comprehensive guide to transforming your traditional factory into a smart manufacturing facility...',
    author: 'Michael Roberts',
    date: 'Mar 12, 2024',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Predictive Maintenance Success Stories',
    excerpt: 'Real-world examples of how predictive maintenance has saved millions in manufacturing costs...',
    author: 'Emily Watson',
    date: 'Mar 10, 2024',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80'
  }
];

export default function BlogSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <Link to={`/blog/${post.id}`} key={post.id} className="relative group">
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
              <div className="mt-4 flex items-center justify-center gap-2 bg-custom-purple hover:bg-custom-purple-dark text-white px-6 py-3 rounded-3xl font-semibold transition-colors">
                Read More
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}