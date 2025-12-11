import React from 'react';
import { Clock, TrendingUp, Globe, History, Shield, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BenefitItem: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref} 
      className={`flex gap-4 p-6 rounded-xl hover:bg-indigo-50/50 transition-colors ${isVisible ? 'fade-enter-active' : 'fade-enter'}`}
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
          <Icon size={24} />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Everything you need to optimize your job search
          </h2>
          <p className="text-lg text-gray-600">
            We've built the most comprehensive toolset to help you get hired faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8">
          <BenefitItem
            icon={Clock}
            title="Save Time"
            description="Analyze your resume against job descriptions in under 60 seconds. Stop manually comparing keywords."
          />
          <BenefitItem
            icon={TrendingUp}
            title="Increase Interview Chances"
            description="Applicants who optimize their resume for the job description are 3x more likely to get an interview."
          />
          <BenefitItem
            icon={Globe}
            title="Multiple Languages"
            description="Our AI understands 25+ languages. Get feedback in your preferred language automatically."
          />
          <BenefitItem
            icon={History}
            title="Track Progress"
            description="Compare multiple versions of your resume to see how your score improves with each edit."
          />
          <BenefitItem
            icon={Shield}
            title="Privacy First"
            description="Your data is encrypted and secure. We never share your personal information with third parties."
          />
          <BenefitItem
            icon={Zap}
            title="Always Improving"
            description="Our models learn from thousands of successful hires to give you the most up-to-date advice."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;