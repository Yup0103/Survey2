import React from 'react';

const Hero = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">India's Leading</span>
            <span className="block text-primary mt-1">Survey Rewards Platform</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Join thousands of Indians earning rewards by sharing their opinions. 
            Take surveys at your convenience and get rewarded with gift cards.
          </p>
          <div className="mt-6 text-gray-600">
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Shape the Future of Products
            </p>
            <p className="flex items-center mt-2">
              <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Earn Exciting Rewards
            </p>
            <p className="flex items-center mt-2">
              <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Join a Growing Community
            </p>
          </div>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#survey-form"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-80"
              >
                Join Now
              </a>
            </div>
            <div className="ml-4 inline-flex rounded-md shadow">
              <a
                href="#benefits"
                className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            className="mx-auto rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
            alt="People taking surveys on mobile devices"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero; 