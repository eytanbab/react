import Nav from './components/Nav';
import Results from './components/Results';
import SearchBar from './components/SearchBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

import ScrollToTop from './components/utils/ScrollToTop';
const queryClient = new QueryClient();

function App() {
  const [query, setQuery] = useState('');
  return (
    <div className='no-repeat flex min-h-screen flex-col items-center gap-8   bg-electric-900 text-slate-100'>
      <Nav />
      <QueryClientProvider client={queryClient}>
        <SearchBar setQuery={setQuery} />
        <Results query={query} />
      </QueryClientProvider>
      <ScrollToTop />
    </div>
  );
}

export default App;
