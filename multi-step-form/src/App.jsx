import { useState, useRef } from 'react';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan';
import AddOns from './components/AddOns';
import FinishingUp from './components/FinishingUp';
import { useEffect } from 'react';

function App() {
  const [index, setIndex] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [error, setError] = useState(true);
  const [info, setInfo] = useState({ name: '', email: '', phone: '' });
  const validateForm = () => {
    if (info.name && info.email && info.phone) {
      setError(false);
    } else setError(true);
  };

  useEffect(() => {
    validateForm();
  }, [info]);

  const handleNext = () => {
    if (index > 0 && index < 4) {
      error ? '' : setIndex(index + 1);
    }
  };

  const handleBack = () => {
    if (index > 1 && index <= 4) {
      setIndex(index - 1);
    }
  };

  return (
    <div className='relative h-screen w-screen bg-neutral-200 text-white'>
      {/* BG IMAGE */}
      <div className='flex h-40 w-full bg-mobile bg-cover p-6' />
      {/* PAGE NUMBERS */}
      <div className='absolute top-12 flex w-full items-center justify-center gap-8 font-bold'>
        <button
          disabled
          className={`${
            index === 1 ? 'bg-teal-100 text-blue-900' : ''
          } h-10 w-10 rounded-full border p-2 text-center `}
          onClick={() => setIndex(1)}
        >
          1
        </button>
        <button
          disabled
          className={`${
            index === 2 ? 'bg-teal-100 text-blue-900' : ''
          } h-10 w-10 rounded-full border p-2 text-center `}
          onClick={() => setIndex(2)}
        >
          2
        </button>
        <button
          disabled
          className={`${
            index === 3 ? 'bg-teal-100 text-blue-900' : ''
          } h-10 w-10 rounded-full border p-2 text-center `}
          onClick={() => setIndex(3)}
        >
          3
        </button>
        <button
          disabled
          className={`${
            index === 4 ? 'bg-teal-100 text-blue-900' : ''
          } h-10 w-10 rounded-full border p-2 text-center `}
          onClick={() => setIndex(4)}
        >
          4
        </button>
      </div>
      {/* FORM CONTAINER */}
      <div className='  absolute top-28 left-0 right-0 mx-8 flex flex-col rounded-lg bg-white  py-6 px-4 text-black shadow-md'>
        {index === 1 && (
          <PersonalInfo info={info} setInfo={setInfo} setError={setError} />
        )}
        {index === 2 && (
          <SelectPlan
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            enabled={enabled}
            setEnabled={setEnabled}
          />
        )}
        {index === 3 && <AddOns enabled={enabled} />}
        {index === 4 && <FinishingUp />}
        {error ? (
          <p className=' text-red-500'>please fill in all the fields.</p>
        ) : null}
      </div>
      {/* FOOTER */}
      <div className='absolute bottom-0 left-0 right-0 flex h-20 items-center justify-between bg-white px-4 font-medium'>
        <button className='text-gray-500' onClick={handleBack}>
          Go Back
        </button>
        <button
          className='rounded-md bg-blue-900 p-2 text-white'
          onClick={handleNext}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default App;
