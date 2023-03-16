import React from 'react';

export const Result = ({ filteredCountries }) => {
  return (
    <div className='flex w-full flex-col items-center bg-red-500'>
      <h1>Countries:</h1>
      <div className='grid grid-cols-1  items-center justify-center gap-8 bg-blue-400 p-2 text-center'>
        {filteredCountries.map((country) => {
          return (
            <div
              key={country.name.common}
              className='flex flex-col items-center rounded-lg bg-green-500 pb-4'
            >
              <img src={country.flags.svg} className='rounded-t-lg' />
              <h1>{country.name.common}</h1>
              <h1>Population: {country.population}</h1>
              <h1>Region : {country.region}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
