import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Destination from './components/pages/Destination';
import Crew from './components/pages/Crew';
import Technology from './components/pages/Technology';
import NotFound from './components/pages/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div
      className={`min-w-screen flex min-h-screen flex-col bg-home-dekstop bg-cover bg-no-repeat`}
    >
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
