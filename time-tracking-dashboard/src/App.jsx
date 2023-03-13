import { useState } from 'react';
import NameCard from './components/NameCard';
import Card from './components/Card';
import WorkIcon from './assets/icon-work.svg';

import data from '../data.json';
function App() {
  const [timelapse, setTimelapse] = useState('');
  console.log(timelapse);

  return (
    <div className='flex flex-col w-screen h-screen relative justify-start gap-6 items-center py-12 bg-gray-900'>
      <NameCard setTimelapse={setTimelapse} />
      <Card
        icon={WorkIcon}
        activityName={data[0].title}
        hours={data[0].timeframes.weekly.current}
        timelapse={timelapse}
        prevHours={data[0].timeframes.weekly.previous}
      />
    </div>
  );
}

export default App;
