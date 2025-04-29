import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ProgressBar from './ProgressBar';
import FormInput from './FormInput';

const SurveyForm = forwardRef((props, ref) => {
  const nameInputRef = React.useRef(null);
  const totalSteps = 2;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    age: '',
    gender: '',
    education: '',
    phoneValidation: false
  });

  useImperativeHandle(ref, () => ({
    focusNameInput: () => {
      nameInputRef.current?.focus();
    }
  }));

  const ageOptions = [
    { value: "25-35", label: "25-35" },
    { value: "36-45", label: "36-45" },
    { value: "46+", label: "46+" }
  ];

  const educationOptions = [
    { value: "high_school", label: "High School" },
    { value: "intermediate", label: "Intermediate" },
    { value: "diploma", label: "Diploma" },
    { value: "bachelors", label: "Bachelor's Degree" },
    { value: "masters", label: "Master's Degree" },
    { value: "phd", label: "Ph.D" },
    { value: "other", label: "Other" }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setCurrentStep(currentStep + 1);
  };

  // Updated button classes for dark theme & mobile touch targets
  const primaryButtonClass = "w-full sm:w-auto bg-gradient-to-r from-pink-500 to-cyan-500 text-white py-4 sm:py-3 px-8 rounded-xl hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 shadow-lg shadow-pink-500/30 text-lg font-medium";
  const secondaryButtonClass = "w-full sm:w-auto bg-gray-600 text-gray-200 py-4 sm:py-3 px-8 rounded-xl hover:bg-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500 text-lg font-medium";

  return (
    <div className="bg-transparent px-4 sm:px-0 max-w-2xl mx-auto">
      {currentStep < 3 && (
        <div className="mb-8 sm:mb-12">
          {/* Pass accent colors to ProgressBar */}
          <ProgressBar 
            currentStep={currentStep} 
            totalSteps={totalSteps} 
            activeColor="bg-gradient-to-r from-pink-500 to-cyan-500"
            inactiveColor="bg-gray-600"
          />
        </div>
      )}
        
        {currentStep === 1 && (
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">Join Our Panel</h2>
            
            {/* FormInput will need internal adaptation for dark mode */}
            <FormInput
              ref={nameInputRef}
              id="name"
              name="name"
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              isDarkMode={true}
              labelClassName="text-gray-200"
              inputClassName="bg-gray-800 text-white border-gray-600 focus:border-pink-500 placeholder-gray-400"
            />
            
            <FormInput
              id="email"
              name="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email address"
              isDarkMode={true}
              labelClassName="text-gray-200"
              inputClassName="bg-gray-800 text-white border-gray-600 focus:border-pink-500 placeholder-gray-400"
            />

            <FormInput
              id="mobile"
              name="mobile"
              label="Mobile Number"
              type="tel"
              value={formData.mobile}
              onChange={handleInputChange}
              required
              placeholder="10-digit mobile number"
              isDarkMode={true}
              labelClassName="text-gray-200"
              inputClassName="bg-gray-800 text-white border-gray-600 focus:border-pink-500 placeholder-gray-400"
            />
            
          <div className="pt-6">
              <button
                type="button"
                className={primaryButtonClass}
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
        <form onSubmit={handleSubmit} className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">Additional Information</h2>

            <FormInput
              id="age"
              name="age"
              label="Age Group"
              type="select"
              value={formData.age}
              onChange={handleInputChange}
              options={ageOptions}
              required
              isDarkMode={true}
              labelClassName="text-gray-200"
              inputClassName="bg-gray-800 text-white border-gray-600 focus:border-pink-500"
            />

            <FormInput
              id="gender"
              name="gender"
              label="Gender"
              type="radio"
              value={formData.gender}
              onChange={handleInputChange}
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' }
              ]}
              required
              isDarkMode={true}
              labelClassName="text-gray-200"
              optionClassName="text-gray-200"
            />

            <FormInput
              id="education"
              name="education"
              label="Education"
              type="select"
              value={formData.education}
              onChange={handleInputChange}
              options={educationOptions}
              required
              isDarkMode={true}
              labelClassName="text-gray-200"
              inputClassName="bg-gray-800 text-white border-gray-600 focus:border-pink-500"
            />

          <div className="mt-8">
            <label className="flex items-start cursor-pointer group">
                <input
                  type="checkbox"
                  name="phoneValidation"
                  checked={formData.phoneValidation}
                  onChange={handleInputChange}
                  // Updated checkbox style for dark mode
                  className="h-6 w-6 mt-0.5 border-2 border-gray-500 rounded text-pink-500 focus:ring-pink-500 focus:ring-offset-gray-800 bg-gray-700 checked:bg-pink-500 checked:border-transparent checked:[background-image:url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9J3doaXRlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J00xMi4yMDcgNC43OTNhMSAxIDAgMDEwIDEuNDE0bC01IDVhMSAxIDAgMDEtMS40MTQgMGwtMi0yYTEgMSAwIDAxMS40MTQtMS40MTRMNi41IDkuMDg2bDQuMjkzLTQuMjkzYTEgMSAwIDAxMS40MTQgMHonLz48L3N2Zz4=')]"
                />
                {/* Updated label text color */}
              <span className="ml-4 text-base sm:text-lg text-gray-200 group-hover:text-white transition-colors">
                  I agree to be contacted via phone for validation and empanelment
                </span>
              </label>
            </div>
            
          <div className="pt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between">
              <button
                type="button"
                className={secondaryButtonClass}
                onClick={prevStep}
              >
                Back
              </button>
              <button
                type="submit"
                className={primaryButtonClass}
              >
                Submit
              </button>
            </div>
          </form>
        )}

        {currentStep === 3 && (
        <div className="text-center py-8 space-y-8">
          {/* Updated Success message style */}
          <div className="mx-auto h-20 w-20 flex items-center justify-center rounded-full bg-green-900/50 border-2 border-green-500">
            <svg className="h-12 w-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Welcome to Our Panel!</h2>
          <p className="text-lg sm:text-xl text-gray-300">Your registration has been submitted successfully.</p>
          {/* Updated info box style */}
          <div className="bg-gray-800/60 p-6 sm:p-8 rounded-2xl border border-gray-700">
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
              Thanks for joining! You'll get rewards for feedback on campaigns through surveys. We'll send invites soon.
            </p>
          </div>
          </div>
        )}
    </div>
  );
});

export default SurveyForm; 