import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import FormInput from './FormInput';

const SurveyForm = () => {
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

  const ageOptions = [
    { value: "18-24", label: "18-24 years" },
    { value: "25-34", label: "25-34 years" },
    { value: "35-44", label: "35-44 years" },
    { value: "45-54", label: "45-54 years" },
    { value: "55-64", label: "55-64 years" },
    { value: "65+", label: "65+ years" }
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

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
      <div className="px-4 py-5 sm:p-6">
        {currentStep < 3 && <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />}
        
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Join Our Panel</h2>
            
            <FormInput
              id="name"
              name="name"
              label="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            
            <FormInput
              id="email"
              name="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
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
            
            <div className="flex justify-center">
              <button
                type="button"
                onClick={nextStep}
                className="bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Additional Information</h2>

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

            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="phoneValidation"
                  checked={formData.phoneValidation}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to be contacted via phone for validation and empanelment
                </span>
              </label>
            </div>
            
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Submit
              </button>
            </div>
          </form>
        )}

        {currentStep === 3 && (
          <div className="text-center py-6">
            <svg className="mx-auto h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">Welcome to Our Panel!</h2>
            <p className="text-gray-700 mt-2">Your registration has been submitted successfully.</p>
            <p className="text-gray-600 mt-2">
              As part of our Consumer Panel, you'll have the opportunity to participate in surveys 
              designed to gather valuable feedback on various campaigns. For every survey you complete, 
              you will receive a suitable reward as a token of our appreciation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyForm; 