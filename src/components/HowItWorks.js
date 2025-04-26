import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Quick Sign Up',
      description: 'Fill out our simple registration form to create your account and join our survey panel.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Get Empaneled',
      description: 'Our team will contact you for a quick validation to complete your empanelment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Participate in Surveys',
      description: 'Receive invitations for surveys relevant to you and share your valuable opinions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Earn Ongoing Rewards',
      description: 'Get rewarded with attractive gift vouchers for every survey you successfully complete.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-secondary py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-4">
            Start Earning in 4 Simple Steps
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Joining our panel is quick, easy, and rewarding. Here's how you can start making an impact and earning rewards:
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-4 md:gap-x-8">
            
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center text-center group transform transition duration-300 ease-in-out hover:scale-105">
                <div className="relative mb-6">
                  <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                    <span className="text-primary">
                      {step.icon}
                    </span>
                  </div>
                  <div className="absolute -top-3 -right-3">
                    <span className="flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white text-lg font-bold border-4 border-secondary">
                      {step.id}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 