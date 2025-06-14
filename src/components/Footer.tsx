
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-2xl">🦆</span>
            <span className="text-2xl font-bold">Quackspot</span>
          </div>
          <p className="text-gray-400 mb-6">
            Connecting communities, one quack at a time.
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">
              &copy; 2025 Quackspot. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
