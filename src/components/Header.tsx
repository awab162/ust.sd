
import React from 'react';
import NavigationSidebar from './NavigationSidebar';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/lovable-uploads/b40e2d58-85d8-4f32-b057-b5c96f11bc86.png" alt="University Logo" className="h-10 w-10 mr-2" />
          <button className="rounded-md bg-blue-600 text-white px-3 py-1 text-sm">Contact Us</button>
        </div>
        <NavigationSidebar />
      </div>
    </header>
  );
};

export default Header;
