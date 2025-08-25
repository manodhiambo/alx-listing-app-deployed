import Image from "next/image";
import Link from "next/link";

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  location: string;
  rating: number;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
  };
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden">
        <div className="relative h-48">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 truncate flex-1 mr-2">
              {property.title}
            </h3>
            <div className="flex items-center bg-gray-100 px-2 py-1 rounded">
              <span className="text-yellow-500 text-sm">★</span>
              <span className="text-sm text-gray-700 ml-1">{property.rating}</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-2">{property.location}</p>
          <p className="text-gray-700 text-sm mb-3 line-clamp-2">{property.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={property.host.avatar}
                alt={property.host.name}
                width={24}
                height={24}
                className="rounded-full mr-2"
              />
              <span className="text-sm text-gray-600">Hosted by {property.host.name}</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">${property.price}</span>
              <span className="text-sm text-gray-600">per night</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
