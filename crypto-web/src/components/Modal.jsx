import React from 'react';

const Modal = ({ coin, setOpenModal }) => {
  return (
    <div className='fixed inset-0  z-50 flex h-screen w-full items-center justify-center backdrop-blur-sm'>
      {/* MODAL */}
      <div className='flex h-[60vh] w-80 flex-col items-center justify-between gap-6 rounded-md bg-electric-800 p-4 ring ring-electric-300/80'>
        <div className='flex w-full grow flex-col items-center gap-4'>
          <img src={coin.iconUrl} className='h-20 w-20' />
          <h1 className='text-lg font-bold'>{coin.name}</h1>
          <h1>Rank: {coin.rank}</h1>
          <h1>{coin.symbol}</h1>
          <h1>
            Price:{' '}
            {parseFloat(parseFloat(coin.price).toFixed(2)).toLocaleString()}$
          </h1>
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
