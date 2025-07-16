import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';
import { DEFAULT_PROPERTY_IMAGE } from '../../constants';

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  image,
  price,
  rating,
  location,
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image
          src={image || DEFAULT_PROPERTY_IMAGE}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {rating && (
          <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full shadow-sm">
            <div className="flex items-center space-x-1">
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-gray-900">
                {rating.toFixed(1)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Location */}
        {location && (
          <p className="text-sm text-gray-500 mb-1">{location}</p>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {description}
          </p>
        )}

        {/* Price */}
        {price && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="text-lg font-bold text-gray-900">
                ${price}
              </span>
              <span className="text-sm text-gray-500">/ night</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
