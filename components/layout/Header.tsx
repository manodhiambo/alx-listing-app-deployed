import React, { useState } from 'react';
import { Search, Menu, X, User, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const accommodationTypes = [
    'Rooms', 'Mansion', 'Countryside', 'Villa', 'Apartment', 'Chalet', 'Cabin', 'Penthouse'
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">
              StayFinder
            </h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search destinations, properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1 px-3 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
              <Globe className="h-4 w-4" />
              <span>EN</span>
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Accommodation Types - Desktop */}
        <div className="hidden md:block border-t border-gray-200">
          <div className="flex items-center space-x-8 py-3 overflow-x-auto">
            {accommodationTypes.map((type) => (
              <button
                key={type}
                className="flex-shrink-0 text-sm font-medium text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-2 transition-colors"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search destinations, properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Mobile Navigation */}
            <div className="flex flex-col space-y-2 mb-4">
              <button className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                <Globe className="h-4 w-4" />
                <span>EN</span>
              </button>
              <button className="px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
                Sign In
              </button>
              <button className="px-3 py-2 text-left text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                Sign Up
              </button>
            </div>

            {/* Mobile Accommodation Types */}
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm font-medium text-gray-600 mb-2">Accommodation Types</p>
              <div className="grid grid-cols-2 gap-2">
                {accommodationTypes.map((type) => (
                  <button
                    key={type}
                    className="text-left px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
