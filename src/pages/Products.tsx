import React from 'react';
import Navbar from '../components/Navbar';
import { Brain, Cpu, BarChart, Shield, Zap, RefreshCw } from 'lucide-react';

const products = [
  {
    icon: Brain,
    title: 'AI Manufacturing Suite',
    description: 'Complete factory automation solution powered by advanced neural networks',
    price: 'Custom pricing',
    features: ['Real-time optimization', 'Predictive maintenance', 'Quality control', 'Resource management']
  },
  {
    icon: Cpu,
    title: 'Predictive Analytics',
    description: 'Advanced forecasting tools that help you make data-driven decisions',
    price: 'Starting at $999/mo',
    features: ['Production forecasting', 'Demand prediction', 'Risk assessment', 'Performance analytics']
  },
  {
    icon: Shield,
    title: 'Quality Control AI',
    description: 'Automated inspection system that ensures product quality',
    price: 'Starting at $799/mo',
    features: ['Visual inspection', 'Defect detection', 'Quality metrics', 'Compliance reporting']
  },
  {
    icon: RefreshCw,
    title: 'Smart Factory Platform',
    description: 'IoT integration & monitoring for complete factory oversight',
    price: 'Starting at $1,499/mo',
    features: ['IoT integration', 'Real-time monitoring', 'Process automation', 'Energy optimization']
  }
];

export default function Products() {
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
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-custom-purple to-emerald-400">Products</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover our suite of AI-powered manufacturing solutions designed to transform your operations
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.title} className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
              <div className="relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-transparent transition duration-200">
                <product.icon className="w-12 h-12 text-custom-purple mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">{product.title}</h3>
                <p className="text-slate-300 mb-4">{product.description}</p>
                <p className="text-custom-purple font-semibold mb-4">{product.price}</p>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-300">
                      <Shield className="w-4 h-4 mr-2 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-custom-purple hover:bg-custom-purple-dark text-white px-6 py-3 rounded-3xl font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}