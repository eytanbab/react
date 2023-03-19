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
      });
  };

  useEffect(() => {
    if (url) {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      getData();
    }
  }, [url]);

  return (
    <>
      <div className='bg-[#F0F1F6] p-2'>
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
            <h1>RESULTS:</h1>
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
