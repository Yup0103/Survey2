import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200">
      <button
        className="py-5 w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-base text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqItems = [
    {
      question: "How do I earn rewards with Panel Perks?",
      answer: "You earn points by completing surveys that match your profile. Each survey specifies the points you'll earn before you start. These points can be redeemed for various rewards including UPI transfers, popular e-commerce gift cards (Amazon, Flipkart, etc.), or mobile recharges."
    },
    {
      question: "How often will I receive surveys?",
      answer: "The frequency of surveys depends on your demographic profile and our research requirements. Most members receive 3-7 survey invitations per week, with more opportunities during festival seasons and major market research periods."
    },
    {
      question: "How much can I expect to earn?",
      answer: "Earnings vary based on survey completion and complexity. Most active members earn between ₹500-2,500 per month, with some earning more. Special surveys for specific professions or demographics may offer higher rewards."
    },
    {
      question: "When can I cash out my rewards?",
      answer: "You can request a redemption once you reach 500 points (₹500). Payments are processed within 24-48 hours via UPI, or 3-5 business days for gift cards. We support all major UPI platforms including Google Pay, PhonePe, and Paytm."
    },
    {
      question: "Why do I sometimes get disqualified from surveys?",
      answer: "Surveys often target specific demographics or consumer groups. You may be disqualified if you don't match the target profile. We still award 5-10 points for disqualifications to thank you for your time, and you'll receive better-matched surveys over time."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take data security very seriously. Your personal information is encrypted and protected as per Indian data protection laws. We comply with all relevant regulations and never share your data without explicit consent."
    },
    {
      question: "Can I participate in surveys on my mobile device?",
      answer: "Yes! Our platform is fully optimized for all devices. You can take surveys on your smartphone or tablet using our mobile-friendly website. We recommend a stable internet connection for the best experience."
    },
    {
      question: "How long does a typical survey take?",
      answer: "Most surveys take between 5-15 minutes to complete. Mini-surveys might take just 2-3 minutes, while in-depth research surveys might take 20-30 minutes but offer higher rewards. You'll always know the estimated time before starting."
    },
    {
      question: "Do you have surveys in regional languages?",
      answer: "Yes, we offer surveys in multiple Indian languages including Hindi, Tamil, Telugu, Bengali, and Marathi. You can select your preferred language in your profile settings."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer customer support in English and Hindi through WhatsApp, email, and phone. Our support team is available from 9 AM to 9 PM IST on all working days to assist you with any queries."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-white opacity-90">
            Everything you need to know about Panel Perks India
          </p>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-0">
              {faqItems.map((item, index) => (
                <FaqItem 
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <h3 className="text-lg font-medium text-gray-900">Still have questions?</h3>
          <p className="mt-4 text-gray-500">
            Contact our support team through WhatsApp or email. We're here to help!
          </p>
          <div className="mt-6 space-x-4">
            <a
              href="mailto:support@panelperks.in"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary bg-secondary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email Support
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Faq; 