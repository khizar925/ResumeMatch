import React from 'react';
import { Target, BarChart2, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FeatureCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: string;
}> = ({ icon: Icon, title, description, delay }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
        isVisible ? 'fade-enter-active' : 'fade-enter'
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
        <Icon size={28} strokeWidth={2.5} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase mb-2">
            Why Choose Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smarter Matching, Better Results
          </h3>
          <p className="text-lg text-gray-600">
            Stop guessing what recruiters are looking for. Our advanced AI analyzes your resume against job descriptions with human-level understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Target}
            title="Beyond Keywords"
            description="Our AI evaluates actual job experience, education, technical skills, and methodologies—not just simple keyword matching. We understand context."
            delay="0ms"
          />
          <FeatureCard
            icon={BarChart2}
            title="20+ Compatibility Parameters"
            description="Get sophisticated scores for hard skills, soft skills, certifications, cultural fit, experience level, location preferences, and 15+ more parameters."
            delay="150ms"
          />
          <FeatureCard
            icon={Lightbulb}
            title="Actionable Feedback"
            description="Don't just get a score. Understand exactly why you got it with detailed breakdowns of strengths and specific actionable areas for improvement."
            delay="300ms"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;