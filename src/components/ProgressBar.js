import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep - 1) / (totalSteps - 1) * 100;
  
  return (
    <div className="w-full">
      <div className="flex justify-between relative mb-4">
        {/* Progress line */}
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -mx-5">
          <div 
            className="h-1 bg-orange-500 transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {[...Array(totalSteps)].map((_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber <= currentStep;
          const isCompleted = stepNumber < currentStep;
          
          return (
            <div 
              key={stepNumber} 
              className={`flex flex-col items-center relative z-10 ${isActive ? 'text-orange-500' : 'text-gray-400'}`}
            >
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isCompleted 
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                    : isActive 
                      ? 'border-2 border-orange-500 bg-white' 
                      : 'border-2 border-gray-200 bg-white'
                } transition-all duration-300`}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                ) : (
                  <span className={`text-sm font-medium ${isActive ? 'text-orange-500' : 'text-gray-400'}`}>
                    {stepNumber}
                  </span>
                )}
              </div>
              <div className={`text-xs mt-2 font-medium ${isActive ? 'text-gray-700' : 'text-gray-400'}`}>
                {stepNumber === 1 ? 'Basic Info' : stepNumber === 2 ? 'Profile' : `Step ${stepNumber}`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar; 