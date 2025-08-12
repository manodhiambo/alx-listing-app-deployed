import React from 'react';
import Image from 'next/image';

interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

interface OrderSummaryProps {
  bookingDetails: BookingDetails;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => {
  const subtotal = bookingDetails.price * bookingDetails.totalNights;
  const grandTotal = subtotal + bookingDetails.bookingFee;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Review Order Details</h2>
      
      {/* Property Information */}
      <div className="flex items-start space-x-4 mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Villa Arrecife Beach House" 
            className="w-24 h-24 object-cover rounded-md shadow-sm"
          />
        </div>
        <div className="flex-grow min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
            {bookingDetails.propertyName}
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">4.76</span>
              <span className="text-sm text-gray-500 ml-1">(345 reviews)</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            {bookingDetails.startDate} • {bookingDetails.totalNights} Night{bookingDetails.totalNights !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-4 border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Price Breakdown</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              ${bookingDetails.price.toLocaleString()} × {bookingDetails.totalNights} night{bookingDetails.totalNights !== 1 ? 's' : ''}
            </p>
            <p className="font-medium">${subtotal.toLocaleString()}</p>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Booking Fee</p>
            <p className="font-medium">${bookingDetails.bookingFee}</p>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Taxes & Fees</p>
            <p className="font-medium">$0</p>
          </div>
        </div>
        
        <hr className="border-gray-200 my-4" />
        
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-800">Grand Total</p>
          <p className="text-xl font-bold text-green-600">${grandTotal.toLocaleString()}</p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-sm font-medium text-blue-800">Free Cancellation</p>
            <p className="text-sm text-blue-600">Cancel before Aug 23 for a full refund</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
