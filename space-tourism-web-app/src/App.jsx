import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Destinations from './components/pages/Destinations';
import Crew from './components/pages/Crew';
import Technology from './components/pages/Technology';
import NotFound from './components/pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Moon from './components/pages/Moon';
import Mars from './components/pages/Mars';
import Europa from './components/pages/Europa';
import Titan from './components/pages/Titan';
import data from '../helpers/starter-code/data.json';

function App() {
  const destinations = data.destinations;

  return (
    <div
      className={`min-w-screen flex min-h-screen flex-col bg-home-dekstop bg-cover bg-no-repeat`}
    >
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='destination' element={<Destinations />}>
          <Route path='moon' element={<Moon data={destinations[0]} />} />
          <Route path='mars' element={<Mars data={destinations[1]} />} />
          <Route path='europa' element={<Europa data={destinations[2]} />} />
          <Route path='titan' element={<Titan data={destinations[3]} />} />
        </Route>
        <Route path='crew' element={<Crew />} />
        <Route path='technology' element={<Technology />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
