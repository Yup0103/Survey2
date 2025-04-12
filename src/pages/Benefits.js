import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Features from '../components/Features';

const Benefits = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">
            Benefits of Joining Panel Perks
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Discover all the ways you can benefit by becoming part of our survey panel community.
          </p>
        </div>
      </div>
      
      {/* Reuse the Features component we already have */}
      <Features />
      
      {/* Additional Benefits */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            More Reasons to Join
          </h2>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Participation</h3>
              <p className="text-gray-600">
                Take surveys whenever it's convenient for you. There are no minimum participation requirements, and you can complete surveys at your own pace.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Gift Card Rewards</h3>
              <p className="text-gray-600">
                Choose from a wide selection of popular gift cards from top brands including Amazon, Flipkart, and many more retail partners.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Survey Opportunities</h3>
              <p className="text-gray-600">
                Receive invitations to new surveys on a regular basis, giving you plenty of opportunities to earn gift card rewards throughout the year.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Impact</h3>
              <p className="text-gray-600">
                Your feedback directly influences product development and service improvements for major brands, making your voice truly count.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Join Panel Perks Today
            </a>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            What Our Members Say
          </h2>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4 text-indigo-500">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Arun</h4>
                  <p className="text-sm text-gray-500">Marketing Professional, Chennai</p>
                </div>
              </div>
              <p className="text-gray-600">
                "What stands out is how the platform values diverse perspectives. Every survey feels like an opportunity to contribute to meaningful changes in products and services."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4 text-indigo-500">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Neha</h4>
                  <p className="text-sm text-gray-500">Teacher, Delhi</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The surveys are thoughtfully designed and cover interesting topics. It's exciting to see how our feedback shapes the future of products we use daily."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4 text-indigo-500">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Karthik</h4>
                  <p className="text-sm text-gray-500">Software Engineer, Hyderabad</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Being part of this panel gives me early insights into upcoming trends and innovations. It's fascinating to contribute to the development process of new products."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Benefits; 