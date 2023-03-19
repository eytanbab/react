import React from 'react';
import Input from './Input';
import Result from './Result';
import { useState } from 'react';

const Results = (props) => {
  // props:
  // url={url}
  // setUrl={setUrl}
  // shortenUrl={shortenUrl}
  // setShortenUrl={setShortenUrl}
  // inputRef={inputRef}
  // setData={setData}
  // error={error}

  const [results, setResults] = useState([
    { url: props.url, shortenUrl: props.shortenUrl },
  ]);
  return (
    <>
      <div className='bg-[#F0F1F6] p-2'>
        <Input
          inputRef={props.inputRef}
          results={results}
          setResults={setResults}
          shortenUrl={props.shortenUrl}
          setUrl={props.setUrl}
        />
        {!props.error && (
          <>
            <h1>RESULTS:</h1>
            {results.map((result, index) => {
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
