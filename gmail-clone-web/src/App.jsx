import { useState } from 'react';
// import './App.css'
import Body from './components/Body';
import SideNav from './components/SideNav';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex h-screen bg-slate-800 text-slate-100'>
      <SideNav />
      <Body />
    </div>
  );
}

export default App;
