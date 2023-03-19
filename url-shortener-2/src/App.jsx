import { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Results from './components/Results';
import Info from './components/Info';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const inputRef = useRef(null);

  return (
    <div className='relative flex min-h-screen w-screen flex-col items-center overflow-x-hidden text-center'>
      <div className='max-w-md overflow-x-hidden md:flex md:max-w-full md:flex-col'>
        <NavBar />
        <Hero inputRef={inputRef} />
        <Results inputRef={inputRef} />
        <Info />
        <Footer inputRef={inputRef} />
        <About />
      </div>
    </div>
  );
}

export default App;
