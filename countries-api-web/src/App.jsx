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
  const [darkMode, setDarkMode] = useState(false);

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
    <div
      className={`${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      } max-w-screen flex min-h-screen flex-col items-center gap-6 px-8`}
    >
      {/* NAVBAR */}
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* MAIN SECTION */}
      <div className='flex flex-col items-center justify-center gap-4  px-4'>
        <div className='flex flex-col gap-4'>
          {/* SEARCH BAR */}
          <Searchbar darkMode={darkMode} setQuery={setQuery} />

          {/* DROPDOWN */}
          <Dropdown darkMode={darkMode} setRegion={setRegion} />
        </div>
        {/* RESULTS */}
        {!isLoading && (
          <Result
            darkMode={darkMode}
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
