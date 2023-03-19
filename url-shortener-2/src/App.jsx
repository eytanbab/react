import { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Results from './components/Results';

function App() {
  const [data, setData] = useState([]); //ARRAY OF OBJECTS
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [shortenUrl, setShortenUrl] = useState('');
  const inputRef = useRef(null);
  const [error, setError] = useState(true);

  const getData = () => {
    setIsLoading(true);
    setError(true);
    console.log('in get data...');
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => res.json())
      .then((actualData) => {
        if (actualData.ok === true) {
          setShortenUrl(actualData.result.short_link);
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    url ? getData() : console.log('no url');
  }, [url]);

  return (
    <div className='relative w-screen overflow-hidden text-center'>
      <NavBar />
      <Hero inputRef={inputRef} />
      {
        <Results
          isLoading={isLoading}
          url={url}
          setUrl={setUrl}
          shortenUrl={shortenUrl}
          setShortenUrl={setShortenUrl}
          inputRef={inputRef}
          error={error}
        />
      }
      {/* <Info /> */}
    </div>
  );
}

export default App;
