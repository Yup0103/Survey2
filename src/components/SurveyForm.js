import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import FormInput from './FormInput';

const SurveyForm = () => {
  const totalSteps = 3;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    age: '',
    gender: '',
    state: '',
    city: '',
    education: '',
    occupation: '',
    feedback: ''
  });

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
    "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh"
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
        {currentStep < 4 && <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />}
        
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
            
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

            <FormInput
              id="age"
              name="age"
              label="Age"
              type="number"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
            
            <FormInput
              id="gender"
              name="gender"
              label="Gender"
              type="select"
              value={formData.gender}
              onChange={handleInputChange}
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' }
              ]}
              required
            />
            
            <div className="flex justify-end">
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
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Location & Education</h2>

            <FormInput
              id="state"
              name="state"
              label="State"
              type="select"
              value={formData.state}
              onChange={handleInputChange}
              options={indianStates.map(state => ({ value: state.toLowerCase().replace(/\s+/g, '_'), label: state }))}
              required
            />

            <FormInput
              id="city"
              name="city"
              label="City"
              value={formData.city}
              onChange={handleInputChange}
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
            
            <FormInput
              id="occupation"
              name="occupation"
              label="Occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              required
            />
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Back
              </button>
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

        {currentStep === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Survey Preferences</h2>
            
            <div className="bg-secondary rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-900 mb-2">Available Survey Categories</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Consumer Products & Services</li>
                <li>Technology & Digital Trends</li>
                <li>Healthcare & Wellness</li>
                <li>Entertainment & Media</li>
                <li>Food & Beverages</li>
              </ul>
            </div>

            <FormInput
              id="feedback"
              name="feedback"
              label="What topics interest you the most?"
              type="textarea"
              value={formData.feedback}
              onChange={handleInputChange}
              placeholder="Tell us which survey topics interest you (e.g., technology, food, healthcare)..."
              required
            />
            
            <div className="flex justify-between">
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

        {currentStep === 4 && (
          <div className="text-center py-8">
            <svg className="mx-auto h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">Welcome to Panel Perks!</h2>
            <p className="text-gray-700 mt-2">Your registration has been submitted successfully.</p>
            <p className="text-gray-600 mt-1">We'll send you survey invitations to your email and mobile number soon.</p>
            <div className="mt-6 text-sm text-gray-500">
              <p>Expected earnings: ₹500-2,500 per month</p>
              <p>Survey frequency: 3-7 invitations per week</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyForm; 