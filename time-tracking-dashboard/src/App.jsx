import { useState } from 'react';
import NameCard from './components/NameCard';
import WorkCard from './components/Card';
import PlayCard from './components/PlayCard';
import EllipsisIcon from './assets/icon-ellipsis.svg';
import ExerciseIcon from './assets/icon-exercise.svg';
import PlayIcon from './assets/icon-play.svg';
import SelfCareIcon from './assets/icon-self-care.svg';
import SocialIcon from './assets/icon-social.svg';
import StudyIcon from './assets/icon-study.svg';
import WorkIcon from './assets/icon-work.svg';
import data from '../data.json';
import { useEffect } from 'react';

function App() {
  const [timelapseName, setTimelapseName] = useState('');
  console.log(data);
  const [index, setIndex] = useState(1);
  const workCurrentDailyHours = data[index].timeframes.daily.current;
  const workCurrentWeeklyHours = data[index].timeframes.weekly.current;
  const workCurrentMonthlyHours = data[index].timeframes.monthly.current;
  const workPrevDailyHours = data[index].timeframes.daily.previous;
  const workPrevWeeklyHours = data[index].timeframes.weekly.previous;
  const workPrevMonthlyHours = data[index].timeframes.monthly.previous;

  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);

  useEffect(() => {
    if (timelapseName === 'Day') {
      setCurrent(workCurrentDailyHours);
      setPrev(workPrevDailyHours);
    }
    if (timelapseName === 'Week') {
      setCurrent(workCurrentWeeklyHours);
      setPrev(workPrevWeeklyHours);
    }
    if (timelapseName === 'Month') {
      setCurrent(workCurrentMonthlyHours);
      setPrev(workPrevMonthlyHours);
    }
  }, [timelapseName]);

  return (
    <div className='flex flex-col w-screen min-h-screen relative bg-gray-900'>
      <div className='flex flex-col justify-start gap-6 items-center py-12'>
        <NameCard setTimelapseName={setTimelapseName} />
        {timelapseName && (
          <>
            <WorkCard
              icon={WorkIcon}
              activityName={data[0].title}
              hours={current}
              timelapseName={timelapseName}
              prevHours={prev}
            />
            {/* <PlayCard
              icon={PlayIcon}
              activityName={data[1].title}
              hours={current}
              timelapseName={timelapseName}
              prevHours={prev}
            /> */}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
