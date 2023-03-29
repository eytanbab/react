import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Coin from './Coin';
import { useEffect } from 'react';

const SearchedCoin = ({ query }) => {
  const getSearchedCoin = async () => {
    const url = `https://coinranking1.p.rapidapi.com/search-suggestions?query=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['getSearchedCoin'],
    queryFn: getSearchedCoin,
  });

  useEffect(() => {
    refetch(query);
  }, [query]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <div className='flex w-full items-center justify-between overflow-y-hidden px-4'>
        <h1>Name</h1>
        <h1>Price</h1>
        {data?.data?.coins[0]?.change && <h1>Change</h1>}
      </div>
      <div className='flex w-full flex-col justify-center gap-2'>
        {data.data.coins.map((coin) => (
          <Coin key={coin.uuid} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default SearchedCoin;
