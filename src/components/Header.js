import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://oapindia.com/wp-content/uploads/2024/06/logo-color-1.svg" 
                  alt="OAP Logo" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 