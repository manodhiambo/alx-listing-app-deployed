// Next.js API route for mock data (for development/testing)
import type { NextApiRequest, NextApiResponse } from 'next';

const mockProperties = [
  {
    id: '1',
    title: 'Cozy Downtown Apartment',
    description: 'A beautiful and cozy apartment in the heart of downtown with amazing city views and modern amenities.',
    price: 120,
    images: [
      '/images/property1-1.jpg',
      '/images/property1-2.jpg',
      '/images/property1-3.jpg',
      '/images/property1-4.jpg',
    ],
    image: '/images/property1-1.jpg', // For card component
    location: 'Downtown, City Center',
    rating: 4.8,
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning', 'Heating', 'Washer', 'TV', 'Parking'],
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    host: {
      name: 'Sarah Johnson',
      avatar: '/images/host1.jpg',
      joinedDate: 'March 2020',
      responseRate: 98,
    },
  },
  {
    id: '2',
    title: 'Luxury Beach House',
    description: 'Experience the ultimate beachfront luxury with direct beach access, infinity pool, and breathtaking ocean views.',
    price: 450,
    images: [
      '/images/property2-1.jpg',
      '/images/property2-2.jpg',
      '/images/property2-3.jpg',
      '/images/property2-4.jpg',
    ],
    image: '/images/property2-1.jpg',
    location: 'Malibu, California',
    rating: 4.9,
    amenities: ['WiFi', 'Pool', 'Beach Access', 'Kitchen', 'Air Conditioning', 'Hot Tub', 'Parking', 'Ocean View'],
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    host: {
      name: 'Michael Chen',
      avatar: '/images/host2.jpg',
      joinedDate: 'January 2019',
      responseRate: 100,
    },
  },
  // Add more mock properties as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Simulate network delay
    setTimeout(() => {
      res.status(200).json(mockProperties);
    }, 1000);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
