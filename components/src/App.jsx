import { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
// import './App.css';
import Navbar from './components/Navbar';
import Rating from './components/Rating';
import Searchbar from './components/Searchbar';
import SideNav from './components/SideNav';
import Toggle from './components/Toggle';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-6 overflow-x-hidden py-6'>
      {/* <Navbar /> */}
      <Toggle />
      <Dropdown />
      <Searchbar />
      <SideNav />
      <Rating />
      <Accordion/>
    </div>
  );
}

export default App;
