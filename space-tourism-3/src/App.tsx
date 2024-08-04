import { useState } from 'react';
import Logo from './assets/shared/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';

function App() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  return (
    <div className='bg-[url("./assets/home/background-home-mobile.jpg")] bg-cover bg-no-repeat text-white flex flex-col p-6 h-screen'>
      {/* NAVBAR */}
      <nav className='flex w-full justify-between items-center'>
        <img src={Logo} width={32} height={32} />
        {/* NAVBAR BUTTON */}
        <button className='z-50' onClick={() => setIsOpenNav(!isOpenNav)}>
          {!isOpenNav ? (
            <GiHamburgerMenu size={32} />
          ) : (
            <IoCloseSharp size={32} />
          )}
        </button>
      </nav>
      {/* NAVBAR MENU */}
      {isOpenNav && (
        <div className='absolute inset-0 h-full w-full bg-black flex items-center justify-center text-xl uppercase'>
          <div className='flex flex-col items-start justify-center gap-8'>
            <p className='flex gap-x-2'>
              <span>00</span> Home
            </p>
            <p className='flex gap-x-2'>
              <span>01</span> Destination
            </p>
            <p className='flex gap-x-2'>
              <span>02</span> Crew
            </p>
            <p className='flex gap-x-2'>
              <span>03</span> Technology
            </p>
          </div>
        </div>
      )}
      {/* HERO SECITON */}
      <section className=' w-full h-full flex flex-col items-center justify-center gap-8'>
        <p className='uppercase'>So, you want to travel to</p>
        <p className='uppercase text-7xl'>Space</p>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax becauase we'll give you a truly out of this world
          experience!
        </p>
        <button className='uppercase bg-white text-black rounded-full w-48 h-48 text-3xl'>
          Explore
        </button>
      </section>
    </div>
  );
}

export default App;
