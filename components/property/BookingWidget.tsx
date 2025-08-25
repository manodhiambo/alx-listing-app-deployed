import { useState } from "react";
import { useRouter } from "next/router";

interface Property {
  id: string;
  title: string;
  price: number;
}

interface BookingWidgetProps {
  property: Property;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ property }) => {
  const router = useRouter();
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [nights, setNights] = useState(0);

  const calculateNights = (checkIn: string, checkOut: string) => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
      return diffDays;
    }
    return 0;
  };

  const handleCheckInChange = (date: string) => {
    setCheckInDate(date);
    calculateNights(date, checkOutDate);
  };

  const handleCheckOutChange = (date: string) => {
    setCheckOutDate(date);
    calculateNights(checkInDate, date);
  };

  const totalPrice = nights * property.price;
  const serviceFee = totalPrice * 0.1;
  const taxes = totalPrice * 0.05;
  const grandTotal = totalPrice + serviceFee + taxes;

  const handleBooking = () => {
    const bookingData = {
      propertyId: property.id,
      checkInDate,
      checkOutDate,
      guests,
      nights,
      totalPrice: grandTotal,
    };
    
    // Store booking data in session storage and redirect to booking page
    sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
    router.push('/booking');
  };

  const isBookingValid = checkInDate && checkOutDate && guests > 0 && nights > 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border">
      <div className="flex items-center justify-between mb-6">
        <span className="text-2xl font-bold">${property.price}</span>
        <span className="text-gray-600">per night</span>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check-in
            </label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => handleCheckInChange(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check-out
            </label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => handleCheckOutChange(e.target.value)}
              min={checkInDate || new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num} guest{num !== 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      {nights > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>${property.price} × {nights} night{nights !== 1 ? 's' : ''}</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Service fee</span>
              <span>${serviceFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t border-gray-200">
            <span>Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>
      )}

      <button
        onClick={handleBooking}
        disabled={!isBookingValid}
        className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-colors ${
          isBookingValid
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Reserve
      </button>

      <p className="text-sm text-gray-600 text-center mt-2">
        You won't be charged yet
      </p>
    </div>
  );
};

export default BookingWidget;
