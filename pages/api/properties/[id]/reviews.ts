import type { NextApiRequest, NextApiResponse } from 'next';

// Mock reviews data
const mockReviews = {
  '1': [
    {
      id: 'r1',
      userId: 'u1',
      userName: 'Emma Thompson',
      userAvatar: '/images/user1.jpg',
      rating: 5,
      comment: 'Absolutely loved this place! The location is perfect and the apartment is exactly as described. Sarah was a wonderful host.',
      createdAt: '2024-01-15T10:30:00Z',
    },
    {
      id: 'r2',
      userId: 'u2',
      userName: 'David Wilson',
      userAvatar: '/images/user2.jpg',
      rating: 4,
      comment: 'Great stay! The apartment was clean and well-equipped. Only minor issue was the WiFi was a bit slow, but overall excellent experience.',
      createdAt: '2024-01-10T14:22:00Z',
    },
    {
      id: 'r3',
      userId: 'u3',
      userName: 'Lisa Martinez',
      userAvatar: '/images/user3.jpg',
      rating: 5,
      comment: 'Perfect for our weekend getaway. The downtown location made it easy to walk to restaurants and attractions. Highly recommend!',
      createdAt: '2024-01-05T09:15:00Z',
    },
  ],
  '2': [
    {
      id: 'r4',
      userId: 'u4',
      userName: 'John Smith',
      userAvatar: '/images/user4.jpg',
      rating: 5,
      comment: 'This beach house exceeded all expectations! The ocean views are breathtaking and the amenities are top-notch.',
      createdAt: '2024-01-12T16:45:00Z',
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Simulate network delay
    setTimeout(() => {
      const reviews = mockReviews[id as string] || [];
      res.status(200).json(reviews);
    }, 600);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
