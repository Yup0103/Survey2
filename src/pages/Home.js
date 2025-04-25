import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SurveyForm from '../components/SurveyForm';
import HowItWorks from '../components/HowItWorks';
import testimonial1 from '../images/testimonial1.jpg';
import testimonial2 from '../images/testimonial2.jpg';
import testimonial3 from '../images/testimonial3.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <dt className="text-4xl font-bold text-gray-900">5 Lakh+</dt>
              <dd className="mt-2 text-lg font-medium text-gray-600">Active Panel Members</dd>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <dt className="text-4xl font-bold text-gray-900">₹15 Cr+</dt>
              <dd className="mt-2 text-lg font-medium text-gray-600">Gift Cards Awarded</dd>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
              </div>
              <dt className="text-4xl font-bold text-gray-900">97%</dt>
              <dd className="mt-2 text-lg font-medium text-gray-600">Member Satisfaction</dd>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
              </div>
              <dt className="text-4xl font-bold text-gray-900">1,000+</dt>
              <dd className="mt-2 text-lg font-medium text-gray-600">Daily Surveys Completed</dd>
            </div>
          </dl>
        </div>
      </div>
      
      <HowItWorks />
      
      {/* Survey Form Section */}
      <div className="bg-secondary py-16" id="survey-form">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Join India's Largest Survey Panel</h2>
            <p className="mt-4 text-lg text-gray-700">
              Start earning gift card rewards while shaping the future of products and services in India.
            </p>
          </div>
          
          <SurveyForm />
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Voices from Our Community
          </h2>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-secondary rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src={testimonial1}
                    alt="Priya Sharma" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-sm text-gray-500">Fashion Designer, Mumbai</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The rewards are great, but what I really love is how my opinions are valued. I feel like I'm making a difference with every survey I complete."
              </p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src={testimonial2}
                    alt="Rahul Menon" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Rahul Menon</h4>
                  <p className="text-sm text-gray-500">Business Analyst, Bangalore</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Joining this panel was one of the best decisions I've made. The surveys are engaging and the rewards are consistently delivered on time."
              </p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src={testimonial3}
                    alt="Anjali Nair" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Anjali Nair</h4>
                  <p className="text-sm text-gray-500">Content Creator, Chennai</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Being part of this community has been incredibly rewarding. My feedback has helped shape products that I now see in the market, which is truly satisfying."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home; 