import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Panel Perks
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Panel Perks was founded in 2020 with a simple mission: to connect businesses with real customers and provide valuable insights through high-quality survey responses.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Our platform enables companies to make better decisions by understanding consumer preferences, while rewarding participants for sharing their valuable opinions.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-3 text-lg text-gray-500">
                To create a trustworthy environment where businesses can gather authentic customer feedback and individuals can be rewarded for their time and insights.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img 
              className="mx-auto rounded-lg shadow-lg" 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
              alt="Team meeting" 
            />
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900">Our Team</h3>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h4 className="text-lg font-medium text-gray-900">John Doe</h4>
                <p className="text-sm text-gray-500">CEO & Founder</p>
                <p className="mt-3 text-gray-600">
                  With over 15 years of experience in market research, John leads our company vision.
                </p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h4 className="text-lg font-medium text-gray-900">Jane Smith</h4>
                <p className="text-sm text-gray-500">Director of Research</p>
                <p className="mt-3 text-gray-600">
                  Jane ensures our survey methodology meets the highest standards of data quality.
                </p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h4 className="text-lg font-medium text-gray-900">Michael Johnson</h4>
                <p className="text-sm text-gray-500">Head of Technology</p>
                <p className="mt-3 text-gray-600">
                  Michael oversees our platform development and ensures a smooth user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About; 