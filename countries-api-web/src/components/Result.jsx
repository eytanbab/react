import React from 'react';

export const Result = ({ darkMode, filteredCountries }) => {
  return (
    <div className='grid grid-cols-1 items-center  justify-center gap-8 text-center md:grid-cols-3'>
      {filteredCountries.map((country) => {
        return (
          <div
            key={country.name.common}
            className={`${
              darkMode ? 'bg-gray-800' : 'shadow-xl'
            } flex max-w-[20rem] flex-col items-center gap-2 rounded-lg  pb-4`}
          >
            <img src={country.flags.svg} className='rounded-t-lg' />
            <h1>{country.name.common}</h1>
            <h1>Population: {country.population}</h1>
            <h1>Region : {country.region}</h1>
            <button
              className={`${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              } rounded-xl  p-2`}
            >
              Read More
            </button>
          </div>
        );
      })}
    </div>
  );
};
