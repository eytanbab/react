import { useEffect, useState } from 'react';
import Results from './components/Results';
import SearchBar from './components/SearchBar';

function App() {
  const [data, setData] = useState('');
  const [location, setLocation] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [isLoading, setIsLoading] = useState(true);

  const getWeather = async () => {
    try {
      if (location) {
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`;
        const response = await fetch(url).then((data) => data.json());
        setData(response);
        setIsLoading(false);
        console.log(data);
      }
    } catch (e) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [location]);

  return (
    <div className='flex flex-col justify-start text-white min-h-screen  bg-placeholder bg-cover text-center  w-screen p-12 gap-8 items-center'>
      <SearchBar setLocation={setLocation} />
      {data.error ? (
        <h1 className='py-12 text-2xl'>NOT FOUND</h1>
      ) : (
        !isLoading && !data.error && <Results data={data} />
      )}
    </div>
  );
}

export default App;
