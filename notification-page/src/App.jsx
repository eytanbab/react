import { useState } from 'react';
import Notification from './components/Notification';
import Header from './components/Header';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='window-container'>
        <Header />
        <Notification />
      </div>
    </div>
  );
}

export default App;
