import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import Result from './components/Result';
import { useEffect } from 'react';

function App() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState([]);
  const [lightMode, setLightMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const getDefinition = async () => {
    try {
      if (word !== '') {
        setIsLoaded(false);
        const api = await fetch(
          'https://api.dictionaryapi.dev/api/v2/entries/en/' + word
        );
        const data = await api.json();
        if (data.title !== 'No Definitions Found') {
          console.log(data);
          setDefinition(data);
          setIsLoaded(true);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDefinition();
  }, [word]);

  return (
    <div
      className={`flex h-auto min-h-screen flex-col items-center gap-8 
      ${lightMode ? 'bg-gray-200' : 'bg-gray-700'}`}
    >
      <Nav lightMode={lightMode} setLightMode={setLightMode} />
      <SearchBar setWord={setWord} />
      {isLoaded && <Result definition={definition} lightMode={lightMode} />}
    </div>
  );
}

export default App;
