import React from 'react';
import { Brain, Cpu, Factory } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:60px_60px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-custom-purple to-emerald-400">
                AI-Powered
              </span>{' '}
              Manufacturing Excellence
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
              Transform your manufacturing process with cutting-edge AI solutions. 
              Increase efficiency, reduce costs, and drive innovation with our 
              intelligent automation platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-custom-purple hover:bg-custom-purple-dark rounded-xl font-semibold transition-all">
                Get Started
              </button>
              <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold transition-all ring-1 ring-custom-purple/30">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-custom-purple/10 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-emerald-500/10 animate-pulse [animation-delay:1s]" />
              <Factory className="w-full h-full p-8 relative text-custom-purple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}