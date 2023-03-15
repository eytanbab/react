import { useEffect } from 'react';
import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCountriesData = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    const data = await fetch(url).then((res) => res.json());
    setAllCountries(data);
  };

  useEffect(() => {
    getAllCountriesData();
    setIsLoading(false);
  }, []);
  return (
    <div className='grid grid-cols-4 gap-2 p-2 text-center'>
      {!isLoading && allCountries.map((country) => <Card country={country} />)}
    </div>
  );
}

export default App;
