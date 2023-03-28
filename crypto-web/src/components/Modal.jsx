import React from 'react';

const Modal = ({ coin, setOpenModal }) => {
  console.log(coin);
  return (
    <div className='absolute inset-0  flex h-screen w-full  items-center justify-center backdrop-blur-sm'>
      {/* MODAL */}
      <div className='flex h-[70vh] w-96 flex-col items-center justify-between gap-6 overflow-y-hidden rounded-md bg-electric-800 p-4'>
        <div className='flex w-full grow flex-col items-center gap-4'>
          <img src={coin.iconUrl} className='h-20 w-20' />
          <h1 className='text-lg font-bold'>{coin.name}</h1>
          <h1>Rank: {coin.rank}</h1>
          <h1>{coin.symbol}</h1>
          <h1>Price: {parseFloat(coin.price).toFixed(2)}$</h1>
          <h1>Market Cap: {parseFloat(coin.marketCap).toLocaleString()}$</h1>
          <h1>
            Change:{' '}
            <span
              className={`${
                coin.change < 0 ? 'text-red-400' : 'text-green-400'
              }`}
            >
              {coin.change}%
            </span>
          </h1>
        </div>
        <button
          onClick={() => setOpenModal(false)}
          className='w-20 rounded-md p-2 outline outline-1 outline-electric-200/50'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
