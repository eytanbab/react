import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Input from './components/Input';
import Info from './components/Info';

function App() {
  const [data, setData] = useState({});
  const [url, setUrl] = useState('google.com');
  const [isLoading, setIsLoading] = useState(true);
  const [shortenUrl, setShortenUrl] = useState('');

  const getData = () => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData();
    setShortenUrl(data?.result?.short_link);
  }, [url]);

  return (
    <>
      <NavBar />
      <Hero />
      <Input />
      <Info />
    </>
  );
}

export default App;
