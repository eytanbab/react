import React from 'react';
import Modal from './Modal';
import { useState } from 'react';

const CountryCard = ({ country, darkMode }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      className={`${
        darkMode ? 'bg-gray-800' : 'shadow-xl'
      } flex  h-80 flex-col content-center items-center gap-2  rounded-lg pb-4`}
    >
      <img
        src={country.flags.svg}
        className='h-36 w-full self-stretch rounded-t-lg'
      />
      <h1>{country.name.common}</h1>
      <h1>Population: {country.population.toLocaleString()}</h1>
      <h1>Region : {country.region}</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className={`${
          darkMode
            ? 'bg-gray-700 hover:bg-gray-500'
            : 'bg-gray-200 hover:bg-gray-300'
        } rounded-xl  p-2  transition-all duration-300 ease-in-out`}
      >
        Read More
      </button>
      {openModal && (
        <Modal
          country={country}
          darkMode={darkMode}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
};

export default CountryCard;
