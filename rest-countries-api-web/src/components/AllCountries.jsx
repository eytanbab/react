import React from 'react';
import CountryCard from './CountryCard';
const AllCountries = ({ allCountries, isLoading }) => {
  return (
    <div className='grid grid-cols-1 items-center justify-center gap-6 lg:grid-cols-4'>
      {!isLoading &&
        allCountries.map((country) => (
          <CountryCard key={Math.random() * 1000} country={country} />
        ))}
    </div>
  );
};

export default AllCountries;
