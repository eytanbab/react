import { useState } from 'react';
import Modal from './Modal';
export const Result = ({ darkMode, filteredCountries }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='grid grid-cols-1 items-center justify-center gap-6 text-center md:max-w-3xl md:grid-cols-3 lg:grid-cols-4'>
      {filteredCountries.map((country) => {
        return (
          <div
            key={country.name.common}
            className={`${
              darkMode ? 'bg-gray-800' : 'shadow-xl'
            } flex  flex-col  items-center gap-2 rounded-lg pb-4`}
          >
            <img src={country.flags.svg} className=' rounded-t-lg' />
            <h1>{country.name.common}</h1>
            <h1>Population: {country.population.toLocaleString()}</h1>
            <h1>Region : {country.region}</h1>
            <button
              className={`${
                darkMode
                  ? 'bg-gray-700 hover:bg-gray-500'
                  : 'bg-gray-200 hover:bg-gray-300'
              } rounded-xl  p-2  transition-all duration-300 ease-in-out`}
            >
              Read More
            </button>
          </div>
        );
      })}
    </div>
  );
};
