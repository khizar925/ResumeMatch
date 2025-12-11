import React from 'react';
import { FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 border-t border-slate-800 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center text-white mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg mr-3 shadow-lg shadow-indigo-500/50">
                 <FileText size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                ResumeMatch AI
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-base">
              Empowering job seekers with AI-driven insights to build better resumes and land more interviews.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:items-end">
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a 
                  href="#features" 
                  className="text-slate-400 hover:text-indigo-400 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-slate-400 hover:text-indigo-400 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} ResumeMatch AI. All rights reserved.
            </p>
            <p className="text-slate-600 text-sm">
              Built with AI for job seekers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;