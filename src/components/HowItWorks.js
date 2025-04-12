import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Sign Up',
      description: 'Create your free account in just a few minutes with our simple registration process.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Receive Invitations',
      description: 'Get survey invitations tailored to your profile directly in your email inbox.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Share Your Opinion',
      description: 'Complete surveys on your computer, tablet, or smartphone at your convenience.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Collect Rewards',
      description: 'Earn points for each completed survey and redeem them for cash or gift cards.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Process</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            How It Works
          </p>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-700">
            Joining our panel is easy and rewarding. Follow these simple steps to start earning.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="flex items-center justify-center w-24 h-24 bg-secondary rounded-full">
                    <span className="text-primary">
                      {step.icon}
                    </span>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <span className="flex items-center justify-center w-8 h-8 bg-primary rounded-full text-white text-lg font-bold border-2 border-white">
                      {step.id}
                    </span>
                  </div>
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900 tracking-tight">{step.title}</h3>
                <p className="mt-1 text-base text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 