import { useState } from 'react';
import Modal from './Modal';
import CountryCard from './CountryCard';

export const Result = ({ darkMode, filteredCountries }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='grid auto-rows-max grid-cols-1 items-start justify-center  gap-6 text-center md:max-w-3xl md:grid-cols-3 lg:grid-cols-4'>
      {filteredCountries.map((country) => {
        return <CountryCard country={country} darkMode={darkMode} />;
      })}
    </div>
  );
};
