import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div 
            ref={ref}
            className={`max-w-2xl ${isVisible ? 'fade-enter-active' : 'fade-enter'}`}
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              <span className="text-sm font-medium text-indigo-800">New AI Model V2.5 Released</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15] mb-6">
              Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Dream Job</span> with AI Resume Matching
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Discover how well your resume matches any job description in seconds. 
              Get detailed, actionable feedback and optimize your application to land 3x more interviews.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-indigo-200 hover:shadow-indigo-300 transform hover:-translate-y-1">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 text-lg font-semibold px-8 py-4 rounded-full border border-gray-200 transition-all hover:shadow-md">
                See How It Works
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>10k+ Resumes Analyzed</span>
              </div>
            </div>
          </div>

          {/* Visual/Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-2xl -z-10"></div>
              
              {/* Main Card */}
              <div className="glass-card rounded-2xl p-6 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border-t-4 border-indigo-500">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Senior Product Designer</h3>
                    <p className="text-sm text-gray-500">TechGlobal Inc. • San Francisco, CA</p>
                  </div>
                  <div className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    94% Match
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span className="text-gray-700">Skills Match</span>
                      <span className="text-indigo-600">9/10</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-[90%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span className="text-gray-700">Experience</span>
                      <span className="text-indigo-600">10/10</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-[100%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span className="text-gray-700">Education</span>
                      <span className="text-indigo-600">8/10</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-[80%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                  <p className="text-xs font-semibold text-indigo-900 mb-1">AI Suggestion:</p>
                  <p className="text-sm text-indigo-800">
                    Your experience with <span className="font-bold">Figma</span> is highlighted, but the job requires <span className="font-bold">Prototyping</span> examples. Consider adding a portfolio link.
                  </p>
                </div>
              </div>

              {/* Floating Element 1 */}
              <div className="absolute -bottom-10 -right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
                 <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-full">
                     <CheckCircle className="w-5 h-5 text-green-600" />
                   </div>
                   <div>
                     <p className="text-sm font-bold text-gray-900">Keywords Optimized</p>
                     <p className="text-xs text-gray-500">+15 new keywords found</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;