import { Suspense } from 'react';
import SearchPageContent from '@/components/search/SearchPageContent';

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
