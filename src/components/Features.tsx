import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Cpu, BarChart, Shield, Zap, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Intelligent Automation',
    description: 'Advanced AI algorithms optimize your production line in real-time',
    link: '/products#automation'
  },
  {
    icon: Cpu,
    title: 'Smart Processing',
    description: 'Machine learning-powered quality control and process optimization',
    link: '/products#processing'
  },
  {
    icon: BarChart,
    title: 'Predictive Analytics',
    description: 'Forecast maintenance needs and production outcomes with precision',
    link: '/products#analytics'
  },
  {
    icon: Shield,
    title: 'Enhanced Safety',
    description: 'AI-driven safety protocols and risk prevention systems',
    link: '/products#safety'
  },
  {
    icon: Zap,
    title: 'Energy Efficiency',
    description: 'Optimize energy consumption with intelligent power management',
    link: '/products#energy'
  },
  {
    icon: RefreshCw,
    title: 'Continuous Learning',
    description: 'Self-improving systems that adapt to your manufacturing needs',
    link: '/products#learning'
  }
];

export default function Features() {
  return (
    <div className="relative bg-slate-900 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      <div className="absolute -left-1/4 top-1/4 w-96 h-96 bg-custom-purple/30 rounded-full blur-3xl" />
      <div className="absolute -right-1/4 bottom-1/4 w-96 h-96 bg-custom-purple/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Revolutionize Your Manufacturing
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Our AI-powered solutions bring cutting-edge technology to your factory floor,
            enabling smarter, faster, and more efficient production.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link to={feature.link} key={feature.title} className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
              <div className="relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-transparent transition duration-200">
                <feature.icon className="w-12 h-12 text-custom-purple mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-300">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}