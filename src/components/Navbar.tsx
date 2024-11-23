import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Cpu, CircuitBoard } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 top-4">
      <nav className="bg-slate-950/50 backdrop-blur-sm rounded-3xl border-2 border-slate-800/50 max-w-7xl mx-auto shadow-xl shadow-slate-950/20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-custom-purple to-blue-500 rounded-xl">
                  <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:8px_8px]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <CircuitBoard className="absolute w-6 h-6 text-white opacity-50" />
                  <Brain className="absolute w-5 h-5 text-white" />
                  <Cpu className="absolute w-4 h-4 text-white opacity-30" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">Neural</span>
                <span className="text-custom-purple text-sm font-semibold leading-none">Manufacturing</span>
              </div>
            </Link>

            {/* Navigation Links - Always visible on desktop */}
            <div className="hidden md:flex items-center gap-8">
              <div className="relative group">
                <button className="flex items-center gap-1 text-white hover:text-custom-purple transition-colors">
                  Products
                </button>
                {/* Products Dropdown menu */}
                <div className="absolute hidden group-hover:block mt-2 w-64 bg-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-800 shadow-lg">
                  <div className="py-2">
                    <Link to="/products" className="block px-4 py-2 text-white hover:bg-slate-800 transition-colors">
                      <div className="font-semibold">AI Manufacturing Suite</div>
                      <div className="text-sm text-slate-400">Complete factory automation solution</div>
                    </Link>
                    <Link to="/products" className="block px-4 py-2 text-white hover:bg-slate-800 transition-colors">
                      <div className="font-semibold">Predictive Analytics</div>
                      <div className="text-sm text-slate-400">Advanced forecasting tools</div>
                    </Link>
                    <Link to="/products" className="block px-4 py-2 text-white hover:bg-slate-800 transition-colors">
                      <div className="font-semibold">Quality Control AI</div>
                      <div className="text-sm text-slate-400">Automated inspection system</div>
                    </Link>
                    <Link to="/products" className="block px-4 py-2 text-white hover:bg-slate-800 transition-colors">
                      <div className="font-semibold">Smart Factory Platform</div>
                      <div className="text-sm text-slate-400">IoT integration & monitoring</div>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <button className="flex items-center gap-1 text-white hover:text-custom-purple transition-colors">
                  About Us
                </button>
                {/* About Us Dropdown menu */}
                <div className="absolute hidden group-hover:block mt-2 w-48 bg-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-800 shadow-lg">
                  <div className="py-2">
                    <Link to="/about" className="block px-4 py-2 text-white hover:bg-slate-800 transition-colors">Our Story</Link>
                    <Link to="/about" className="block px-4 py-2 text-white hover:bg-slate-800 transition-colors">Team</Link>
                    <Link to="/about" className="block px-4 py-2 text-white hover:bg-slate-800 transition-colors">Careers</Link>
                  </div>
                </div>
              </div>

              <Link to="/blog" className="text-white hover:text-custom-purple transition-colors">Blog</Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <button className="bg-white text-slate-900 px-6 py-2 rounded-3xl font-medium hover:bg-slate-100 transition-colors">
                Contact us
              </button>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white hover:text-custom-purple"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4">
              <div className="px-2 space-y-1">
                <Link to="/products" className="block px-3 py-2 rounded-xl text-white hover:bg-slate-800">Products</Link>
                <Link to="/about" className="block px-3 py-2 rounded-xl text-white hover:bg-slate-800">About Us</Link>
                <Link to="/blog" className="block px-3 py-2 rounded-xl text-white hover:bg-slate-800">Blog</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}