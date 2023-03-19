import React from 'react';
import Input from './Input';
import Result from './Result';
import { useState, useEffect, useRef } from 'react';

const Results = (props) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [shortenUrl, setShortenUrl] = useState('');
  const [error, setError] = useState(true);
  const [results, setResults] = useState([{ url: '', shortenUrl: '' }]);
  const dataFetchedRef = useRef(false);
  const [isCleared, setIsCleared] = useState(false);

  const getData = () => {
    setIsLoading(true);
    setError(true);
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => res.json())
      .then((actualData) => {
        if (actualData.ok === true) {
          setUrl(actualData.result.original_link);
          setShortenUrl(actualData.result.short_link);
          setResults((prev) => [
            {
              url: actualData.result.original_link,
              shortenUrl: actualData.result.short_link,
            },
            ...prev,
          ]);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
        setIsCleared(false);
      });
  };

  useEffect(() => {
    if (url) {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      getData();
    }
  }, [url]);

  const handleClearAll = () => {
    setResults([{ url: '', shortenUrl: '' }]);
    setIsCleared(true);
  };

  return (
    <>
      <div className='flex w-full flex-col gap-8 bg-[#F0F1F6] p-2'>
        <Input
          inputRef={props.inputRef}
          results={results}
          setResults={setResults}
          shortenUrl={shortenUrl}
          setUrl={setUrl}
          getData={getData}
          dataFetchedRef={dataFetchedRef}
        />

        {shortenUrl && (
          <>
            {!isCleared && (
              <button
                onClick={handleClearAll}
                className='-my-6 mx-6 w-24 self-end  border-b border-b-[#2BD1D1] p-2'
              >
                Clear all
              </button>
            )}
            {results
              .filter((result) => result.url !== '')
              .map((result, index) => {
                return (
                  <Result
                    key={Math.random() * 100}
                    result={result}
                    index={index}
                  />
                );
              })}
          </>
        )}
      </div>
    </>
  );
};

export default Results;
