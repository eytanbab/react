import MobileNavBar from './components/Navbar/MobileNavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Pages/Home';
import Destination from './components/Pages/Destination';
import Crew from './components/Pages/Crew/Crew';
import Technologies from './components/Pages/Technologies';

function App() {
  return (
    <div className={` text-white flex flex-col h-screen`}>
      <BrowserRouter>
        <MobileNavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/destination' element={<Destination />}></Route>
          <Route path='/crew' element={<Crew />}></Route>
          <Route path='/technology' element={<Technologies />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
