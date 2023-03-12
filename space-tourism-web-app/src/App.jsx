import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Destinations from './components/pages/Destinations';
import Crew from './components/pages/Crew';
import Technology from './components/pages/Technology';
import NotFound from './components/pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import data from '../helpers/starter-code/data.json';
import Planet from './components/pages/Planet';

function App() {
  const destinations = data.destinations;
  const crew = data.crew;
  const technology = data.technology;

  return (
    <div
      className={
        'min-w-screen flex flex-col bg-home-dekstop bg-cover bg-no-repeat'
      }
    >
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='destination' element={<Destinations />}>
          <Route path='moon' element={<Planet data={destinations[0]} />} />
          <Route path='mars' element={<Planet data={destinations[1]} />} />
          <Route path='europa' element={<Planet data={destinations[2]} />} />
          <Route path='titan' element={<Planet data={destinations[3]} />} />
        </Route>
        <Route path='crew' element={<Crew data={crew} />} />
        <Route path='technology' element={<Technology data={technology} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
