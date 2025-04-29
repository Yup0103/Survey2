import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="relative z-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="https://oapindia.com/wp-content/uploads/2024/06/logo-white-1.svg"
              alt="OAP Logo" 
              className="h-12 w-auto"
              onError={(e) => { e.target.onerror = null; e.target.src='https://oapindia.com/wp-content/uploads/2024/06/logo-color-1.svg' }}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 