import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import testimonial1 from '../images/testimonial1.jpg';
import testimonial2 from '../images/testimonial2.jpg';
import testimonial3 from '../images/testimonial3.jpg';

// Premium design components
const FeatureCard = ({ icon, title, description, isHighlighted = false }) => (
  <div className={`group relative bg-white rounded-2xl transition-all duration-300 ${isHighlighted ? 'shadow-xl ring-1 ring-primary/10' : 'shadow-md hover:shadow-xl'}`}>
    <div className="p-8">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${isHighlighted ? 'bg-primary text-white' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'} transition-colors duration-300`}>
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-4 text-primary/70">{description}</p>
    </div>
  </div>
);

const ProcessStep = ({ number, title, description, isLast = false }) => (
  <div className="group relative">
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-md text-primary font-medium border border-orange-100 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {number}
        </div>
        {!isLast && (
          <div className="absolute top-12 left-6 w-px h-16 bg-orange-100"></div>
        )}
      </div>
      <div className="ml-6">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="mt-2 text-black">{description}</p>
      </div>
    </div>
  </div>
);

const TestimonialCard = ({ image, name, role, quote }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="p-8">
      <div className="flex items-center">
        <img className="h-12 w-12 rounded-full" src={image} alt={name} />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{quote}</p>
    </div>
  </div>
);

const StatCard = ({ value, label, icon }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 border border-orange-50">
    <div className="flex items-center">
      <div className="rounded-xl bg-primary/5 p-3 text-primary">
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-2xl font-bold text-black">{value}</p>
        <p className="text-sm text-black">{label}</p>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* Process Section */}
      <div className="relative py-24 bg-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-orange-50/50 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-orange-50/50 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 text-primary font-medium text-sm mb-6">
              Your Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">From Signup to Rewards</h2>
            <p className="text-xl text-black/80">A seamless process designed for your convenience</p>
          </div>

          {/* Timeline - Vertical on mobile, Horizontal on desktop */}
          <div className="relative">
            {/* Progress line - Vertical on mobile, Horizontal on desktop */}
            <div className="hidden sm:block absolute top-8 left-0 right-0 h-1 bg-orange-100"></div>
            <div className="sm:hidden absolute left-8 top-0 bottom-0 w-1 bg-orange-100"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 sm:gap-8">
              {/* Step 1 */}
              <div className="relative group">
                <div className="flex sm:block">
                  <div className="relative">
                    <div className="sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                  </div>
                  <div className="ml-8 sm:ml-0 sm:pt-20 sm:text-center">
                  <h3 className="text-xl font-bold text-black mb-3">Quick Registration</h3>
                  <p className="text-black/80 text-sm">Basic information to get started</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="flex sm:block">
                  <div className="relative">
                    <div className="sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                  </div>
                  <div className="ml-8 sm:ml-0 sm:pt-20 sm:text-center">
                  <h3 className="text-xl font-bold text-black mb-3">Profile Verification</h3>
                  <p className="text-black/80 text-sm">Quick validation process</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="flex sm:block">
                  <div className="relative">
                    <div className="sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                  </div>
                  <div className="ml-8 sm:ml-0 sm:pt-20 sm:text-center">
                  <h3 className="text-xl font-bold text-black mb-3">Receive Invitations</h3>
                  <p className="text-black/80 text-sm">Personalized survey opportunities</p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative group">
                <div className="flex sm:block">
                  <div className="relative">
                    <div className="sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                  </div>
                  <div className="ml-8 sm:ml-0 sm:pt-20 sm:text-center">
                  <h3 className="text-xl font-bold text-black mb-3">Complete & Earn</h3>
                  <p className="text-black/80 text-sm">Share opinions, get rewards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative py-24 bg-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-orange-50/50 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-orange-50/50 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 text-primary font-medium text-sm mb-6">
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black">What Our Members Say</h2>
            <p className="mt-4 text-lg text-black">Don't just take our word for it. Hear directly from our community members.</p>
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
  );
};

export default Home; 