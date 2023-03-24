import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex h-[80vh] flex-col items-center  justify-start p-6 text-center'>
      <h1 className='justify-self-start font-barlow-condensed text-base uppercase text-light-purple'>
        so, you want to travel to
      </h1>

      <h1 className='font-bellefair text-[80px] uppercase'>SPACE</h1>

      <p className='font-secondary grow font-barlow text-[15px] text-light-purple'>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>

      <NavLink to='/destination'>
        <button
          className={`h-40 w-40 rounded-full bg-white font-bellefair text-main hover:ring-[36px]`}
        >
          EXPLORE
        </button>
      </NavLink>
    </div>
  );
};

export default Home;
