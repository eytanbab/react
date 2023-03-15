import React from 'react';
import CountryCard from './CountryCard';
const AllCountries = ({ allCountries, isLoading }) => {
  return (
    <div className='grid  justify-center items-center grid-cols-1 gap-6 lg:grid-cols-4'>
      {!isLoading &&
        allCountries.map((country) => (
          <CountryCard key={Math.random() * 1000} country={country} />
        ))}
    </div>
  );
};

export default AllCountries;
