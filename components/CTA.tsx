import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden group">
          
          {/* Animated Background Effect */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-indigo-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of job seekers who have optimized their resumes and fast-tracked their careers.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-indigo-50 font-bold text-lg px-8 py-4 rounded-full transition-all shadow-lg transform hover:-translate-y-1 flex items-center justify-center">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <p className="mt-6 text-indigo-200 text-sm font-medium">
              No credit card required • Free to start
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;