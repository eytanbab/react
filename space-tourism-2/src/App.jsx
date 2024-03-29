import { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import NotFound from './components/NotFound';
import data from './data.json';
import Planet from './components/Planet';

function App() {
  console.log(data.destinations);
  return (
    <div className='max-h-screen min-h-screen overflow-x-hidden bg-mobile bg-cover bg-no-repeat text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/destination/'
          element={<Destination data={data.destinations} />}
        >
          <Route path='moon' element={<Planet data={data.destinations[0]} />} />
        </Route>
        <Route path='/Crew' element={<Crew />} />
        <Route path='/Technology' element={<Technology />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
