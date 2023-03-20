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
    <div className='relative flex  w-screen flex-col items-center overflow-x-hidden text-center md:flex md:max-w-full md:flex-col'>
      <div className=' overflow-x-hidden '>
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
