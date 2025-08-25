import Image from "next/image";
import { useState } from "react";
import ReviewSection from "./ReviewSection";
import BookingWidget from "./BookingWidget";

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  location: string;
  rating: number;
  amenities: string[];
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  host: {
    name: string;
    avatar: string;
    joinedDate: string;
    responseRate: number;
  };
}

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Property Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
          <div className="flex items-center text-gray-600">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="mr-2">{property.rating}</span>
            <span className="mx-2">•</span>
            <span>{property.location}</span>
          </div>
        </div>

        {/* Images Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative h-96">
              <Image
                src={property.images[selectedImageIndex] || property.images[0]}
                alt={property.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {property.images.slice(1, 5).map((image, index) => (
                <div
                  key={index + 1}
                  className="relative h-44 cursor-pointer"
                  onClick={() => setSelectedImageIndex(index + 1)}
                >
                  <Image
                    src={image}
                    alt={`${property.title} ${index + 2}`}
                    fill
                    className="object-cover rounded-lg hover:opacity-80 transition-opacity"
                    sizes="25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2">
            {/* Host Info */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Image
                  src={property.host.avatar}
                  alt={property.host.name}
                  width={56}
                  height={56}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Hosted by {property.host.name}</h3>
                  <p className="text-gray-600">Joined {property.host.joinedDate}</p>
                  <p className="text-sm text-gray-500">{property.host.responseRate}% response rate</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 space-x-4">
                <span>{property.maxGuests} guests</span>
                <span>•</span>
                <span>{property.bedrooms} bedroom{property.bedrooms !== 1 ? 's' : ''}</span>
                <span>•</span>
                <span>{property.bathrooms} bathroom{property.bathrooms !== 1 ? 's' : ''}</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">About this place</h3>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-3">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-gray-600">✓</span>
                    <span className="ml-2 text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <ReviewSection propertyId={property.id} />
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BookingWidget property={property} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
