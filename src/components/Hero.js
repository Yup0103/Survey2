import React, { useRef } from 'react';
import SurveyForm from './SurveyForm';

const Hero = () => {
  const formRef = useRef(null);
  const surveyFormRef = useRef(null);

  return (
    <div id="hero-section" className="relative overflow-hidden -mt-20 pt-20 text-white">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 pt-16">
          {/* Updated Badge Style */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-medium text-sm mb-6 shadow-lg shadow-pink-500/30">
            ₹1000 Bonus
          </div>
          {/* Updated Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            <span className="block mb-2">Earn <span className="bg-gradient-to-r from-pink-400 via-cyan-400 to-indigo-400 text-transparent bg-clip-text">₹1000 Now!</span></span>
          </h1>
          {/* Updated Paragraph */}
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Quick surveys. Instant rewards. Start earning today.
          </p>
        </div>
        
        {/* Form Section */}
        <div className="max-w-md mx-auto mb-24">
          {/* Updated Form Container */}
          <div className="relative bg-gray-800/70 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden backdrop-blur-md border border-gray-700/50">
            {/* Accent Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-cyan-500 to-indigo-500"></div>
            <div className="px-8 pt-8 pb-8" ref={formRef}>
              <SurveyForm ref={surveyFormRef} />
            </div>
            {/* Updated Footer */}
            <div className="px-6 py-4 bg-gray-900/50 border-t border-gray-700/50">
              <p className="text-xs text-center text-gray-400">By joining, you agree to our Terms of Service and Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

/* Basic animation delay utility classes (add to your global CSS or Tailwind config) */
/* 
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
*/ 