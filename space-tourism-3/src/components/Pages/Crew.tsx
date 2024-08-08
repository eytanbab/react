import { useState } from 'react';
import { crew } from '../../data.json';

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(crew[0]);
  return (
    <div className='bg-[url("./assets/crew/background-crew-mobile.jpg")] bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center p-6 gap-8'>
      <p className='uppercase flex gap-2'>
        <span>02</span>Meet your crew
      </p>

      <section id='content' className='flex flex-col text-center gap-8'>
        <div className='flex flex-col gap-2'>
          <p>{selectedCrew.role}</p>
          <h1 className='uppercase text-2xl'>{selectedCrew.name}</h1>
        </div>
        <p>{selectedCrew.bio}</p>
      </section>
      <section className='text-center flex flex-col gap-8'></section>
      <img src={selectedCrew.images.webp} alt='' className='h-[340px]' />
    </div>
  );
};

export default Crew;
