import DiceIcon from '../assets/icon-dice.svg';
import { useState, useEffect } from 'react';

const Card = () => {
  const [adviceId, setAdviceId] = useState([]);
  const [advice, setAdvice] = useState('');
  useEffect(() => {
    fetchRandomAdvice();
  }, []);

  const fetchRandomAdvice = async () => {
    try {
      const api = await fetch('https://api.adviceslip.com/advice');
      const data = await api.json();
      setAdviceId(data.slip.id);
      setAdvice(data.slip.advice);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className='m-4 relative flex bg-[#313A49] flex-col max-w-md max-h-md rounded-2xl shadow-[0_0_50px_5px_rgba(0,0,0,0.6)]'>
      <div className='flex flex-col gap-6 py-12 mx-16 text-center'>
        <h1 className='text-lg text-[#72F0BE] tracking-widest'>
          ADVICE #{adviceId}
        </h1>
        <p className='text-2xl font-bold'>{advice}</p>
      </div>

      {/*  WEIRD PAUSE LINE */}
      <div className=' flex items-center self-center justify-around w-1/2 gap-2 pb-16'>
        <div className='flex h-[1px] w-36 bg-gray-100/20'></div>
        <div className='bg-gray-100/90 w-[6px] h-4 rounded-full'></div>
        <div className='bg-gray-100/90 w-[6px] h-4 rounded-full'></div>
        <div className='flex h-[1px] w-36  bg-gray-100/20' />
      </div>

      {/* CUBE BUTTON */}
      <button
        className='absolute flex self-center items-center justify-center bg-[#52FFAE] w-14 h-14 rounded-full transition ease-in-out duration-300 hover:transition-shadow hover:shadow-glow my-6 -bottom-12'
        onClick={fetchRandomAdvice}
      >
        <img src={DiceIcon} alt='hello' className='w-5 h-5' />
      </button>
    </div>
  );
};

export default Card;
