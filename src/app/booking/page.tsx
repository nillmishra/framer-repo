import { Suspense } from 'react';
import BookingPageContent from '@/components/booking/BookingPageContent';

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading booking...</div>}>
      <BookingPageContent />
    </Suspense>
  );
}
