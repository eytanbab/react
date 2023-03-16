import { useEffect } from 'react';
import { useState } from 'react';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import AllCountries from './components/AllCountries';
import Dropdown from './components/Dropdown';

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [region, setRegion] = useState('');
  const [query, setQuery] = useState('');

  const getAllCountriesData = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    const data = await fetch(url).then((res) => res.json());
    setAllCountries(data);
  };

  useEffect(() => {
    getAllCountriesData();
    setIsLoading(false);
  }, []);

  const filteredCountries = allCountries.filter(
    (country) => country.region === region
  );
  const queryCountries = allCountries.filter((country) =>
    query.toLowerCase().includes(country.name.common.toLowerCase())
  );

  console.log(queryCountries);
  return (
    <div className='max-w-screen flex min-h-screen flex-col items-center gap-6 bg-gray-900 p-6 text-white md:px-12 xl:px-48'>
      <Header />
      <Searchbar setQuery={setQuery} />
      <Dropdown setRegion={setRegion} />

      <AllCountries
        allCountries={region === '' ? allCountries : filteredCountries}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
