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
    { value: "46-55", label: "46-55" },
    { value: "55+", label: "55+" }
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

  // Common button classes - restored to original sizes
  const primaryButtonClass = "bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 shadow-lg shadow-orange-500/20";
  const secondaryButtonClass = "bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500";

  return (
    <div className="bg-transparent">
      {currentStep < 3 && (
        <div className="mb-8">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>
      )}
      
      {currentStep === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Join Our Panel</h2>
          
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
          />
          
          <div className="pt-4 flex justify-end">
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
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Additional Information</h2>

          <FormInput
            id="age"
            name="age"
            label="Age Group"
            type="select"
            value={formData.age}
            onChange={handleInputChange}
            options={ageOptions}
            required
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
          />

          <div className="mt-6">
            <label className="flex items-start cursor-pointer group">
              <input
                type="checkbox"
                name="phoneValidation"
                checked={formData.phoneValidation}
                onChange={handleInputChange}
                className="h-5 w-5 mt-0.5 text-orange-500 focus:ring-orange-500 focus:ring-1 focus:outline-none border-2 border-gray-300 rounded transition-colors group-hover:border-gray-400 checked:bg-orange-500 checked:border-orange-500"
              />
              <span className="ml-3 text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                I agree to be contacted via phone for validation and empanelment
              </span>
            </label>
          </div>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between">
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
        <div className="text-center py-6 space-y-6">
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100">
            <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome to Our Panel!</h2>
          <p className="text-gray-600">Your registration has been submitted successfully.</p>
          <div className="bg-orange-50/30 p-6 rounded-xl">
            <p className="text-gray-700 leading-relaxed">
              As part of our Consumer Panel, you'll have the opportunity to participate in surveys 
              designed to gather valuable feedback on various campaigns. For every survey you complete, 
              you will receive a suitable reward as a token of our appreciation.
            </p>
          </div>
        </div>
      )}
    </div>
  );
});

export default SurveyForm; 