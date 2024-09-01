import React from 'react';
import Input from './Input';
import Result from './Result';
import { useState, useEffect, useRef } from 'react';

const Results = (props) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [shortenUrl, setShortenUrl] = useState('');
  const [error, setError] = useState(false);
  const [results, setResults] = useState([{ url: '', shorten_url: '' }]);
  const dataFetchedRef = useRef(false);
  const [isCleared, setIsCleared] = useState(false);

  const fetchData = async () => {
    try {
      const data = new FormData();
      data.append('url', url);
      const response = await fetch(
        'https://url-shortener-service.p.rapidapi.com/shorten',
        {
          method: 'POST',
          headers: {
            'X-Rapidapi-Key':
              '7e1bffa93fmsh2a40dc1747b8a86p1420b8jsn08b0d3c20627',
            'x-rapidapi-host': 'url-shortener-service.p.rapidapi.com',
          },
          body: data,
        }
      );

      const result = await response.json();
      if (result.error) {
        setError(result.error);
      }
      setShortenUrl(result.result_url);
      setResults((prev) => [
        ...prev,
        { url: url, shorten_url: result.result_url },
      ]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      fetchData();
    }
  }, [url]);

  const handleClearAll = () => {
    setResults([]);
    setIsCleared(true);
  };

  return (
    <div className=' box-border flex flex-col items-center gap-8 bg-[#F0F1F6] p-2'>
      <Input
        inputRef={props.inputRef}
        results={results}
        setResults={setResults}
        shortenUrl={shortenUrl}
        setUrl={setUrl}
        getData={fetchData}
        dataFetchedRef={dataFetchedRef}
        error={error}
        setError={setError}
      />

      {shortenUrl && (
        <>
          {!isCleared && (
            <button
              onClick={handleClearAll}
              className='-my-4 mx-6 w-24 self-end border-b border-b-[#2BD1D1]'
            >
              Clear all
            </button>
          )}
          {results
            .filter((result) => result.url !== '')
            .map((result, index) => {
              return (
                <Result key={index} result={result} index={index} url={url} />
              );
            })}
        </>
      )}
    </div>
  );
};

export default Results;
