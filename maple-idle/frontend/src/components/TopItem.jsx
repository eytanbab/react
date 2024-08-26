import React from 'react';

const TopItem = ({ item, coins, setCurrentTop }) => {
  // check if there are enough coins for upgrading
  const canUpgrade = coins >= item.price;

  const upgradeHandle = () => {
    canUpgrade && setCurrentTop((prev) => prev + 1);
  };

  return (
    <div className='w-40 flex flex-col bg-gray-100 text-gray-900 uppercase rounded-xl border-4 border-gray-900'>
      <h1 className='bold uppercase w-full font-bold text-lg text-center'>
        TOP
      </h1>
      <img src={item.imgURL} className='w-full h-24' />
      {/* INFO */}
      <div className='flex flex-col gap-1 px-2 py-1'>
        <p>cost: {item.price}</p>
        <p>Level: {item.reqLevel}</p>
        <div className='grid grid-rows-2 grid-cols-2 w-full '>
          <p>str:{item.stats.str}</p>
          <p>dex:{item.stats.dex}</p>
          <p>int:{item.stats.int}</p>
          <p>luk:{item.stats.luk}</p>
        </div>
      </div>
      <button
        // onClick={upgradeHandle}
        className={`${
          canUpgrade ? 'bg-gray-900 text-gray-100' : 'bg-gray-300 text-gray-600'
        } w-full py-2 px-1 rounded-lg ring-4 ring-gray-900 font-bold`}
      >
        Upgrade
      </button>
    </div>
  );
};

export default TopItem;
