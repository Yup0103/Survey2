import React from 'react';
import { UserPlusIcon, ClipboardDocumentIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Quick Sign Up",
      description: "Register in under 2 minutes and get ₹1000 instantly credited to your account. No hidden fees or commitments!",
      icon: UserPlusIcon,
    },
    {
      id: 2,
      title: "Take Surveys",
      description: "Receive survey invitations tailored to your profile. Complete them at your convenience from your mobile or desktop.",
      icon: ClipboardDocumentIcon,
    },
    {
      id: 3,
      title: "Earn Rewards",
      description: "Get paid for every completed survey. Withdraw your earnings instantly through UPI, bank transfer, or redeem for gift cards.",
      icon: CurrencyRupeeIcon,
    },
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