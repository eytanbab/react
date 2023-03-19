import { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Results from './components/Results';
import Info from './components/Info';

function App() {
  const inputRef = useRef(null);

  return (
    <div className='relative flex w-screen flex-col items-center overflow-hidden text-center'>
      <div className='max-w-sm'>
        <NavBar />
        <Hero inputRef={inputRef} />
        <Results inputRef={inputRef} />
        <Info />
      </div>
    </div>
  );
}

export default App;
