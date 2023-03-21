import React from 'react';

const Modal = ({ country, darkMode, setOpenModal }) => {
  console.log(country);
  return (
    <div
      className={`${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-900'
      } absolute z-10 m-auto mt-20 flex flex-col items-start  gap-6 p-8 shadow-xl outline-2`}
    >
      <button
        className={`${
          darkMode ? 'bg-gray-700 text-white' : 'bg-gray-400 text-gray-900'
        } self-start rounded-lg px-3 py-2 shadow-lg`}
        onClick={() => setOpenModal(false)}
      >
        Close
      </button>
      <img src={country.flags.svg} className='rounded-t-lg' />
      <h1 className='text-xl font-bold'>{country.name.common}</h1>
      <h1>Population: {country.population.toLocaleString()}</h1>
      <h1>Region : {country.region}</h1>
      <h1>Sub Region: {country.subregion}</h1>
      <h1>Capital: {country.capital[0]}</h1>
      <h1>Top Level Domain: {country.tld[0]}</h1>
    </div>
  );
};

export default Modal;
