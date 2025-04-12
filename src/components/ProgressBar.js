import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep - 1) / (totalSteps - 1) * 100;
  
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        {[...Array(totalSteps)].map((_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber <= currentStep;
          
          return (
            <div 
              key={stepNumber} 
              className={`flex flex-col items-center ${isActive ? 'text-primary' : 'text-gray-400'}`}
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  isActive ? 'border-primary bg-secondary' : 'border-gray-300'
                }`}
              >
                {stepNumber < currentStep ? (
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                ) : (
                  <span className={`text-sm ${isActive ? 'text-primary font-medium' : 'text-gray-500'}`}>
                    {stepNumber}
                  </span>
                )}
              </div>
              <div className="text-xs mt-1">Step {stepNumber}</div>
            </div>
          );
        })}
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
        <div
          style={{ width: `${progress}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-300"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar; 