import React from 'react';

const Footer = () => {
  const linkedInIcon = <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />;

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/oap-india/', icon: linkedInIcon },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-8">
            {socialLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
              >
                <span className="sr-only">{item.name}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} OAP Mediatech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 