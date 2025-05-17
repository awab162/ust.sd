
import React from 'react';
import NavigationSidebar from './NavigationSidebar';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="https://acs.ust.edu.sd/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="./lovable-uploads/15627a03-60be-4568-9308-4349823f8a3f.png" 
              alt="University Logo" 
              className="h-12 w-auto mr-2 cursor-pointer" 
            />
          </a>
          <button className="rounded-md bg-blue-600 text-white px-3 py-1 text-sm">Contact Us</button>
        </div>
        <NavigationSidebar />
      </div>
    </header>
  );
};

export default Header;
