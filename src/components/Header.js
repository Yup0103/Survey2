import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="relative">
      {/* Improved background gradient for seamless blend */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-100 via-indigo-50 to-indigo-50/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://oapindia.com/wp-content/uploads/2024/06/logo-color-1.svg" 
                  alt="OAP Logo" 
              className="h-12 w-auto"
                />
              </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 