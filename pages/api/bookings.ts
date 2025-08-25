import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const bookingData = req.body;
    
    // Simulate processing time
    setTimeout(() => {
      // Here you would typically save to database
      console.log('Booking received:', bookingData);
      
      // Generate a mock booking ID
      const bookingId = `BK${Date.now()}`;
      
      res.status(201).json({ 
        success: true, 
        bookingId,
        message: 'Booking confirmed successfully' 
      });
    }, 2000);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
