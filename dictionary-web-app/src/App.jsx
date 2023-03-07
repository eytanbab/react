import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import Result from './components/Result';
import { useEffect } from 'react';
function App() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState([]);
  const [lightMode, setLightMode] = useState(false);

  const getDefinition = async () => {
    const api = await fetch(
      'https://api.dictionaryapi.dev/api/v2/entries/en/' + word
    );
    const data = await api.json();
    setDefinition(data);
  };

  useEffect(() => {
    getDefinition();
  }, [word]);

  return (
    <div
      className={`flex h-auto min-h-screen flex-col items-center gap-8 ${
        lightMode ? 'bg-gray-100' : 'bg-gray-700'
      }`}
    >
      <Nav lightMode={lightMode} setLightMode={setLightMode} />
      <SearchBar setWord={setWord} />
      {word && <Result definition={definition} lightMode={lightMode} />}
    </div>
  );
}

export default App;
