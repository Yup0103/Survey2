import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import testimonial1 from '../images/testimonial1.jpg';
import testimonial2 from '../images/testimonial2.jpg';
import testimonial3 from '../images/testimonial3.jpg';

// Premium design components
const FeatureCard = ({ icon, title, description, isHighlighted = false }) => (
  <div className={`group relative bg-gray-800/70 backdrop-blur-md rounded-2xl transition-all duration-300 border border-gray-700/50 ${isHighlighted ? 'shadow-xl ring-1 ring-pink-500/20' : 'shadow-md hover:shadow-xl hover:shadow-purple-500/20'}`}>
    <div className="p-8">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${isHighlighted ? 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white' : 'bg-gray-700 text-pink-400 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-cyan-500 group-hover:text-white'} transition-all duration-300`}>
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-gray-400">{description}</p>
    </div>
  </div>
);

const ProcessStep = ({ number, title, description, isLast = false }) => (
  <div className="group relative">
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800 border-2 border-pink-500 text-pink-400 font-medium group-hover:border-cyan-500 group-hover:text-cyan-400 transition-all duration-300">
          {number}
        </div>
        {!isLast && (
          <div className="absolute top-12 left-6 w-px h-16 bg-gradient-to-b from-pink-500 to-cyan-500"></div>
        )}
      </div>
      <div className="ml-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>
    </div>
  </div>
);

const TestimonialCard = ({ image, name, role, quote }) => (
  <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-gray-700/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
    <div className="p-8">
      <div className="flex items-center">
        <img className="h-12 w-12 rounded-full ring-2 ring-pink-500" src={image} alt={name} />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-white">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-300">{quote}</p>
    </div>
  </div>
);

const StatCard = ({ value, label, icon }) => (
  <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
    <div className="flex items-center">
      <div className="rounded-xl bg-gradient-to-r from-pink-500 to-cyan-500 p-3 text-white">
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen text-gray-200">
      {/* Background gradient wrapper */}
      <div className="relative">
        {/* Main gradient background that spans all sections */}
        <div className="fixed inset-0 z-0">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#0F1A2E] to-[#0B1120]"></div>
          
          {/* Large animated gradient orbs */}
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
          
          {/* Smaller floating orbs */}
          <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-pink-500/30 rounded-full filter blur-xl animate-float"></div>
          <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-cyan-500/30 rounded-full filter blur-xl animate-float animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-indigo-500/30 rounded-full filter blur-xl animate-float animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <Hero />

          {/* Process Section */}
          <div className="relative py-24 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-medium text-sm mb-6 shadow-lg">
                  Your Journey
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">From Signup to Rewards</h2>
                <p className="text-xl text-gray-300">A seamless process designed for your convenience</p>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="hidden sm:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-cyan-500 to-indigo-500"></div>
                <div className="sm:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-cyan-500 to-indigo-500"></div>
                
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 sm:gap-8">
                  {/* Step 1 */}
                  <div className="relative group">
                    <div className="flex sm:block">
                      <div className="relative">
                        <div className="sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 w-16 h-16 rounded-full bg-gray-800 border-4 border-pink-500 flex items-center justify-center text-2xl font-bold text-pink-400 group-hover:scale-110 group-hover:border-cyan-500 group-hover:text-cyan-400 transition-all duration-300">
                      1
                    </div>
                      </div>
                      <div className="ml-8 sm:ml-0 sm:pt-20 sm:text-center">
                      <h3 className="text-xl font-bold text-white mb-3">Quick Registration</h3>
                      <p className="text-gray-400 text-sm">Basic information to get started</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative group">
                    <div className="flex sm:block">
                      <div className="relative">
                        <div className="sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 w-16 h-16 rounded-full bg-gray-800 border-4 border-pink-500 flex items-center justify-center text-2xl font-bold text-pink-400 group-hover:scale-110 group-hover:border-cyan-500 group-hover:text-cyan-400 transition-all duration-300">
                      2
                    </div>
                      </div>
                      <div className="ml-8 sm:ml-0 sm:pt-20 sm:text-center">
                      <h3 className="text-xl font-bold text-white mb-3">Profile Verification</h3>
                      <p className="text-gray-400 text-sm">Quick validation process</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative group">
                    <div className="flex sm:block">
                      <div className="relative">
                        <div className="sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 w-16 h-16 rounded-full bg-gray-800 border-4 border-pink-500 flex items-center justify-center text-2xl font-bold text-pink-400 group-hover:scale-110 group-hover:border-cyan-500 group-hover:text-cyan-400 transition-all duration-300">
                      3
                    </div>
                      </div>
                      <div className="ml-8 sm:ml-0 sm:pt-20 sm:text-center">
                      <h3 className="text-xl font-bold text-white mb-3">Receive Invitations</h3>
                      <p className="text-gray-400 text-sm">Personalized survey opportunities</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative group">
                    <div className="flex sm:block">
                      <div className="relative">
                        <div className="sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 w-16 h-16 rounded-full bg-gray-800 border-4 border-pink-500 flex items-center justify-center text-2xl font-bold text-pink-400 group-hover:scale-110 group-hover:border-cyan-500 group-hover:text-cyan-400 transition-all duration-300">
                      4
                    </div>
                      </div>
                      <div className="ml-8 sm:ml-0 sm:pt-20 sm:text-center">
                      <h3 className="text-xl font-bold text-white mb-3">Complete & Earn</h3>
                      <p className="text-gray-400 text-sm">Share opinions, get rewards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="relative py-24 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-medium text-sm mb-6 shadow-lg">
                  Testimonials
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">What Our Members Say</h2>
                <p className="mt-4 text-lg text-gray-300">Don't just take our word for it. Hear directly from our community members.</p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-3">
                <TestimonialCard
                  image={testimonial1}
                  name="Priya Sharma" 
                  role="Fashion Designer, Mumbai"
                  quote="The rewards are great, but what I really love is how my opinions are valued. I feel like I'm making a difference with each survey I complete."
                />
                <TestimonialCard
                  image={testimonial2}
                  name="Rahul Patel" 
                  role="Software Engineer, Bangalore"
                  quote="I've earned over ₹5,000 in gift cards in just 3 months. The surveys are quick and the rewards are instant. Highly recommended!"
                />
                <TestimonialCard
                  image={testimonial3}
                  name="Ananya Gupta" 
                  role="Marketing Professional, Delhi"
                  quote="The platform is so user-friendly and the surveys are actually interesting. It's refreshing to see companies that value customer feedback."
                />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home; 