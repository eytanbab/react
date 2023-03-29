import { useQuery, QueryClient, useQueryClient } from '@tanstack/react-query';
import Coin from './Coin';

const TopCoins = () => {
  //   const queryClient = useQueryClient();

  const getTopCoins = async () => {
    const url =
      'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
    };
    const response = await fetch(url, options);
    const data = response.json();
    return data;
  };

  const { isLoading, isError, data, error } = useQuery(
    ['getTopCoins'],
    getTopCoins
  );

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
        <h1>Change</h1>
      </div>
      <div className='flex w-full flex-col justify-center gap-2'>
        {data.data.coins.map((coin) => (
          <Coin key={coin.uuid} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default TopCoins;
