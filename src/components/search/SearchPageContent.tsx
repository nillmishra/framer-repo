'use client';

import { useSearchParams } from 'next/navigation';
import SearchResults from '@/components/search/SearchResults';

export default function SearchPageContent() {
  const searchParams = useSearchParams();
  
  const type = searchParams.get('type') || 'bus';
  const from = searchParams.get('from') || 'Unknown';
  const to = searchParams.get('to') || 'Unknown';
  const date = searchParams.get('date') || 'Not specified';

  return (
    <div>
      {/* Your component logic here */}
      <h1>Search Results</h1>
      <p>Type: {type}</p>
      <p>From: {from}</p>
      <p>To: {to}</p>
      <p>Date: {date}</p>
    </div>
  );
}
