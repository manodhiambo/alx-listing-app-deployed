import type { NextApiRequest, NextApiResponse } from 'next';

// This would typically come from your database
const mockProperties = [
  {
    id: '1',
    title: 'Cozy Downtown Apartment',
    description: 'A beautiful and cozy apartment in the heart of downtown with amazing city views and modern amenities. Perfect for business travelers and couples looking for a romantic getaway.',
    price: 120,
    images: [
      '/images/property1-1.jpg',
      '/images/property1-2.jpg',
      '/images/property1-3.jpg',
      '/images/property1-4.jpg',
    ],
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
  // Add more properties...
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Simulate network delay
    setTimeout(() => {
      const property = mockProperties.find(p => p.id === id);
      
      if (property) {
        res.status(200).json(property);
      } else {
        res.status(404).json({ message: 'Property not found' });
      }
    }, 800);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
