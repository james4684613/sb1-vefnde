import React from 'react';
import Navbar from '../components/Navbar';
import { Users, Trophy, Target, Briefcase } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Global Clients', value: '500+' },
  { label: 'AI Models Deployed', value: '1000+' },
  { label: 'Success Rate', value: '99.9%' }
];

const team = [
  {
    name: 'Dr. Emily Chen',
    role: 'Chief AI Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
  },
  {
    name: 'Sarah Johnson',
    role: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80'
  }
];

export default function About() {
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
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-custom-purple to-emerald-400">Us</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Pioneering the future of manufacturing through artificial intelligence
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-custom-purple mb-2">{stat.value}</div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-transparent transition duration-200 p-6 text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-custom-purple">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative">
          <div className="absolute -inset-px bg-gradient-to-r from-custom-purple to-emerald-500 rounded-lg blur opacity-25" />
          <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-slate-300 text-lg mb-8">
              We envision a future where manufacturing is completely transformed by artificial intelligence, 
              making it more efficient, sustainable, and accessible to businesses of all sizes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-custom-purple flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Mission</h3>
                  <p className="text-slate-300">To revolutionize manufacturing through cutting-edge AI solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Trophy className="w-8 h-8 text-custom-purple flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Values</h3>
                  <p className="text-slate-300">Innovation, integrity, and excellence in everything we do</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Briefcase className="w-8 h-8 text-custom-purple flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Impact</h3>
                  <p className="text-slate-300">Creating sustainable and efficient manufacturing solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}