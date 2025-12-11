import React from 'react';
import { UserPlus, Upload, FileCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Step: React.FC<{
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
  isLast?: boolean;
}> = ({ number, icon: Icon, title, description, isLast }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`relative flex flex-col items-center text-center ${isVisible ? 'fade-enter-active' : 'fade-enter'}`}>
      
      {/* Connector Line (Desktop Only) */}
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-10" />
      )}

      <div className="relative">
        <div className="w-20 h-20 bg-white border-4 border-indigo-50 rounded-full flex items-center justify-center shadow-sm z-10 mb-6">
          <Icon className="text-indigo-600 w-8 h-8" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
          {number}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 max-w-xs mx-auto">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your comprehensive analysis in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <Step
            number={1}
            icon={UserPlus}
            title="Create Free Account"
            description="Sign up in seconds with Google or email. No credit card required to get started."
          />
          <Step
            number={2}
            icon={Upload}
            title="Upload Resume & Job"
            description="Upload your PDF/Docx resume and paste the URL or text of the job description."
          />
          <Step
            number={3}
            icon={FileCheck}
            title="Get Instant Score"
            description="Receive your match score, detailed gap analysis, and optimization tips immediately."
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;