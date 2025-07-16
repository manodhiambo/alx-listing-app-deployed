import React from 'react';
import { Star, MapPin, Users, Bed, Bath } from 'lucide-react';
import { PropertyProps } from '../../interfaces';

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    name,
    address,
    rating,
    category,
    price,
    offers,
    image,
    discount
  } = property;

  const discountedPrice = discount 
    ? price - (price * parseInt(discount) / 100)
    : price;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        {discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            {discount}% OFF
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Location */}
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{address.city}, {address.country}</span>
        </div>

        {/* Property Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-3">
          {category.slice(0, 2).map((cat, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
          {category.length > 2 && (
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
              +{category.length - 2} more
            </span>
          )}
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{offers.bed} bed{offers.bed !== '1' ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{offers.shower} bath{offers.shower !== '1' ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{offers.occupants}</span>
          </div>
        </div>

        {/* Rating and Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-900">{rating}</span>
          </div>
          
          <div className="text-right">
            {discount && (
              <div className="text-sm text-gray-500 line-through">
                ${price}
              </div>
            )}
            <div className="text-lg font-bold text-gray-900">
              ${discountedPrice}
              <span className="text-sm font-normal text-gray-500">/night</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
