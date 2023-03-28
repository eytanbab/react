import React from 'react';
import SearchedCoin from './SearchedCoin';
import TopCoins from './TopCoins';

const Results = ({ query }) => {
  return <>{query ? <SearchedCoin query={query} /> : <TopCoins />}</>;
};

export default Results;
