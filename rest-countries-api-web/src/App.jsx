import { useEffect } from 'react';
import { useState } from 'react';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import AllCountries from './components/AllCountries';

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [region, setRegion] = useState('');
  const filteredCountries = allCountries.filter(
    (country) => country.region === region
  );

  const getAllCountriesData = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    const data = await fetch(url).then((res) => res.json());
    setAllCountries(data);
  };

  useEffect(() => {
    getAllCountriesData();
    setIsLoading(false);
  }, []);
  console.log(allCountries);
  return (
    <div className='flex flex-col items-center max-w-screen min-h-screen bg-gray-900 text-white p-6 md:px-12 xl:px-48 gap-6'>
      <Header />
      <Searchbar setRegion={setRegion} />
      <AllCountries
        allCountries={region === '' ? allCountries : filteredCountries}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
