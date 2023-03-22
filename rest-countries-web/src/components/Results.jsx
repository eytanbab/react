import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';

const Results = () => {
  const allCountriesUrl = 'https://restcountries.com/v3.1/all';
  const [allCountries, setAllCoutries] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');

  const getData = () => {
    axios
      .get(allCountriesUrl)
      .then((res) => {
        setIsLoaded(true);
        setAllCoutries(res.data);
      })
      .catch((err) => console.log(err))
      .finally(setIsLoaded(false));
  };
  useEffect(() => {
    getData();
  }, []);

  const searchedCountries = allCountries.filter((country) => {
    return country.name.common.toLowerCase().includes(query.toLowerCase());
  });

  const filteredCountries = searchedCountries.filter((country) => {
    console.log(region);
    return country.region === region;
  });

  return (
    <div>
      <SearchBar
        query={query}
        setQuery={setQuery}
        setRegion={setRegion}
        className='col-span-2'
      />
      <div className='grid grid-cols-1 items-start justify-center gap-4 p-4 text-center dark:text-stone-50 md:grid-cols-3'>
        {!isLoaded ? (
          <h1 className='text-3xl'>Loading...</h1>
        ) : region === '' ? (
          searchedCountries.map((country) => {
            return <CountryCard key={country.name.common} country={country} />;
          })
        ) : (
          filteredCountries.map((country) => {
            return <CountryCard key={country.name.common} country={country} />;
          })
        )}
      </div>
    </div>
  );
};
export default Results;
