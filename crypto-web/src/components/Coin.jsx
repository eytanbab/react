import { useState } from 'react';
import Modal from './Modal';

const Coin = ({ coin, index }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
  };
  return (
    <div className='w-full overflow-hidden'>
      <button
        onClick={handleModal}
        className={`${
          coin.rank % 2 === 0 ? 'bg-electric-800' : ''
        } grid w-full grid-cols-5 items-center justify-center p-4 `}
      >
        <div className='col-span-2 flex items-center gap-2 py-1'>
          <h1 className='row-span-1'>{coin.rank}</h1>
          <img src={coin.iconUrl} className='h-6 w-6' />
          <h1 className=''>{coin.name}</h1>
        </div>
        <h1 className='col-span-2 w-24'>
          {parseFloat(parseFloat(coin.price).toFixed(2)).toLocaleString()} $
        </h1>
        <h1
          className={`${
            coin.change < 0 ? 'text-red-400' : 'text-green-400'
          } w-24`}
        >
          {coin.change} %
        </h1>
      </button>
      {openModal ? <Modal coin={coin} setOpenModal={setOpenModal} /> : null}
    </div>
  );
};

export default Coin;
