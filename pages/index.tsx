import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND } from '../constants';
import Pill from '../components/common/Pill';
import PropertyCard from '../components/common/PropertyCard';

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [filteredProperties, setFilteredProperties] = useState(PROPERTYLISTINGSAMPLE);

  const filters = [
    'All',
    'Top Villa',
    'Self Checkin',
    'Pet Friendly',
    'Beachfront',
    'Mountain View',
    'City Center',
    'Luxury Villa',
    'Private Pool'
  ];

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === 'All') {
      setFilteredProperties(PROPERTYLISTINGSAMPLE);
    } else {
      const filtered = PROPERTYLISTINGSAMPLE.filter(property =>
        property.category.some(cat => 
          cat.toLowerCase().includes(filter.toLowerCase()) ||
          filter.toLowerCase().includes(cat.toLowerCase())
        )
      );
      setFilteredProperties(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
          
          {/* Hero Search Bar */}
          <div className="w-full max-w-2xl relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search destinations, properties, or experiences..."
              className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Section */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
              Explore Places
            </h2>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <SlidersHorizontal className="h-4 w-4" />
              <span>More Filters</span>
            </button>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => handleFilterChange(filter)}
              />
            ))}
          </div>
        </section>

        {/* Results Summary */}
        <section className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProperties.length} properties
            {activeFilter !== 'All' && ` for "${activeFilter}"`}
          </p>
        </section>

        {/* Listings Section */}
        <section>
          {filteredProperties.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No properties found matching your filters.
              </p>
              <button
                onClick={() => handleFilterChange('All')}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Show All Properties
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
            </div>
          )}
        </section>

        {/* Load More Button */}
        {filteredProperties.length > 12 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Load More Properties
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
