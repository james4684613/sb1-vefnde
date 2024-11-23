import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="relative bg-slate-800 py-24 overflow-hidden">
      {/* Sophisticated Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      
      {/* Purple Blur Effects */}
      <div className="absolute -left-1/4 top-1/4 w-96 h-96 bg-custom-purple/30 rounded-full blur-3xl" />
      <div className="absolute -right-1/4 bottom-1/4 w-96 h-96 bg-custom-purple/20 rounded-full blur-3xl" />
      
      {/* Blue blur effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0ea5e9]/20 rounded-[999px] blur-[128px] -rotate-12" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              alt="Modern factory interior"
              className="rounded-lg shadow-xl ring-1 ring-slate-700"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-6">
              Transforming Manufacturing Through Innovation
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              With over a decade of experience in AI and manufacturing, we've helped
              hundreds of companies modernize their operations and achieve unprecedented
              levels of efficiency.
            </p>
            <div className="space-y-4">
              {[
                'Industry-leading AI technology',
                '24/7 expert support',
                'Custom solutions for your needs',
                'Proven ROI within months'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}