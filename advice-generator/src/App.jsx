import { useEffect } from 'react';
import { useState } from 'react';
import DiceIcon from './assets/icon-dice.svg'


function App() {
  const [adviceId, setAdviceId] = useState(0)
  const [advice, setAdvice] = useState('');

  useEffect(() => {
     fetchRandomAdvice()
  },[])

const fetchRandomAdvice = async () =>{
      try{
        const api = await fetch("https://api.adviceslip.com/advice")
        const data = await api.json()
        setAdviceId(data.slip.id)
        setAdvice(data.slip.advice)
        console.log(data)
      } 
      catch(e){
        console.log(e)
      }
    }

  return (
    <div className='relative flex justify-center items-center w-full h-screen'>
      <div className='flex bg-[#313A49] flex-col max-w-md  max-h-md m-12 rounded-2xl shadow-[0_0_50px_5px_rgba(0,0,0,0.6)]'>
        
        <div className='flex flex-col gap-6 py-12 mx-16 text-center'>
          <h3 className='text-lg text-[#72F0BE] tracking-widest'>
            ADVICE #{adviceId}
          </h3>
          <p className='text-2xl font-bold'>
            {advice}
          </p>
        </div>
        <div className=' flex self-center justify-around items-center gap-2 w-1/2'>
          <div className='flex h-[1px]  w-36 bg-gray-100/20'></div>
          <div className='bg-gray-100/90 w-1.5 h-4 rounded-full'></div>
          <div className='bg-gray-100/90 w-1.5 h-4 rounded-full'></div>
          <div className='flex h-[1px] w-36 my-12 bg-gray-100/20'></div>
        </div>
        <button
          className='flex self-center items-center justify-center
          bg-[#52FFAE] w-14 h-14 rounded-full transition ease-in-out duration-300 hover:transition-shadow hover:shadow-glow my-6'
          onClick={() => {fetchRandomAdvice()}}>
            <img src={DiceIcon} alt='hello' className='w-5 h-5'/>
        </button>
      </div>
    </div>
  );
}

export default App;
