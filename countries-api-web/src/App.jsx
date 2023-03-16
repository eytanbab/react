import { useState, useEffect } from 'react';
import { GoSearch } from 'react-icons/go';
import Dropdown from './components/Dropdown';
import { NavBar } from './components/NavBar';
import { Result } from './components/Result';
import { Searchbar } from './components/Searchbar';

// import './App.css';

function App() {
  const [countries, setCountries] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');

  const getData = async () => {
    const url = 'https://restcountries.com/v3.1/all';

    // await fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setCountries(data))
    //   .catch((e) => console.log(e))
    //   .finally(() => setIsLoading(false));
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setIsLoading(false);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const searchedCountries = countries?.filter((country) => {
    return country.name.common.toLowerCase().includes(query.toLowerCase());
  });

  const filteredCountries = searchedCountries?.filter((country) => {
    return country.region === region;
  });

  return (
    <div className='flex h-screen w-screen flex-col items-center gap-6 bg-gray-900 text-white'>
      {/* NAVBAR */}
      <NavBar />

      {/* MAIN SECTION */}
      <div className='flex flex-col items-center justify-center gap-4'>
        {/* SEARCH BAR */}
        <Searchbar setQuery={setQuery} />

        {/* FILTER BUTTON*/}
        <Dropdown setRegion={setRegion} />

        {/* RESULTS */}
        {!isLoading && (
          <Result
            filteredCountries={
              region === '' ? searchedCountries : filteredCountries
            }
          />
        )}
      </div>
    </div>
  );
}

export default App;
