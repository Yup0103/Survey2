import React, { useRef } from 'react';
import SurveyForm from './SurveyForm';

const Hero = () => {
  const formRef = useRef(null);
  const surveyFormRef = useRef(null);

  return (
    <div id="hero-section" className="relative overflow-hidden py-16 bg-white">
      {/* Stylish background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-50 via-white to-orange-50/30"></div>
        <div className="hidden sm:block absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="hidden sm:block absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative shapes */}
      <div className="hidden sm:block absolute top-20 left-10 w-16 h-16 border-4 border-primary/20 rounded-full"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-24 h-24 border-4 border-primary/10 rounded-full"></div>
      <div className="hidden sm:block absolute top-40 right-40 w-6 h-6 bg-primary/40 rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 text-primary font-medium text-sm mb-6">
            Market Research Platform
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
            <span className="block mb-2">Shape Products</span>
            <span className="block text-primary">Earn Rewards</span>
          </h1>
        </div>

        {/* Form Section */}
        <div className="max-w-md mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm bg-white/80 border border-gray-100/50">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-white via-primary to-white"></div>
            <div className="px-8 pt-8 pb-8" ref={formRef}>
              <SurveyForm ref={surveyFormRef} />
            </div>
            <div className="px-6 py-4 bg-orange-50/80 border-t border-orange-100">
              <p className="text-xs text-center text-black">By joining, you agree to our Terms of Service and Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 