'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import BookingConfirmation from '@/components/booking/BookingConfirmation';

interface PassengerInfo {
  name: string;
  age: number;
  gender: string;
  email: string;
  seatNumber: string;
}

interface BookingData {
  busName: string;
  busRating: number;
  busReviews: number;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  passengers: PassengerInfo[];
  selectedSeats: string[];
  travelDate: string;
}

// This would normally come from your state management or API
const mockBookingData: BookingData = {
  busName: 'RedBus Partner - Premium',
  busRating: 4.7,
  busReviews: 2100,
  from: 'Delhi',
  to: 'Mumbai',
  departure: '14:00',
  arrival: '23:30',
  duration: '9h 30m',
  originalPrice: 950,
  discountedPrice: 549,
  discount: 42,
  passengers: [
    {
      name: 'John Doe',
      age: 28,
      gender: 'Male',
      email: 'john@example.com',
      seatNumber: '1A',
    },
    {
      name: 'Jane Smith',
      age: 26,
      gender: 'Female',
      email: 'jane@example.com',
      seatNumber: '1B',
    },
  ],
  selectedSeats: ['1A', '1B'],
  travelDate: '2026-05-15',
};

export default function BookingPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [bookingData, setBookingData] = useState<BookingData>(mockBookingData);

  useEffect(() => {
    // Parse booking data from query params
    const busName = searchParams.get('busName');
    const seatsStr = searchParams.get('seats');
    const passengersStr = searchParams.get('passengers');
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const travelDate = searchParams.get('date');

    try {
      let newData = { ...mockBookingData };

      if (busName) newData.busName = decodeURIComponent(busName);
      if (seatsStr) newData.selectedSeats = seatsStr.split(',');
      if (from) newData.from = decodeURIComponent(from);
      if (to) newData.to = decodeURIComponent(to);
      if (travelDate) newData.travelDate = decodeURIComponent(travelDate);

      if (passengersStr) {
        const passengers = JSON.parse(decodeURIComponent(passengersStr));
        newData.passengers = passengers.map((p: any) => ({
          name: p.name || '',
          age: parseInt(p.age) || 0,
          gender: p.gender || '',
          email: p.email || '',
          seatNumber: p.seatNumber || '',
        }));
      }

      setBookingData(newData);
    } catch (error) {
      console.error('Error parsing booking data:', error);
    }
  }, [searchParams]);

  const handleBack = () => {
    router.back();
  };

  const handleProceedToPayment = () => {
    // Navigate to payment page
    router.push('/booking/payment');
  };

  return (
    <BookingConfirmation
      bookingData={bookingData}
      onBack={handleBack}
      onProceedToPayment={handleProceedToPayment}
    />
  );
}
