import { useEffect, useState } from 'react';
import Results from './components/Results';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='h-screen bg-stone-50 dark:bg-stone-800'>
      <Navbar />
      <Results />
    </div>
  );
}

export default App;
