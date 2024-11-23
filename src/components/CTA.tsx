import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Manufacturing?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Join the industry leaders who have already revolutionized their 
          production with our AI solutions.
        </p>
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 bg-custom-purple hover:bg-custom-purple-dark text-white px-8 py-3 rounded-3xl font-semibold transition-colors"
        >
          Schedule a Demo
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}