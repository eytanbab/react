import { useState } from 'react';
import SwordItem from './components/SwordItem';
import HatItem from './components/HatItem';
import TopItem from './components/TopItem';
import BottomItem from './components/BottomItem';
import { swords, hats, bottoms, tops } from './utils/data';
import {
  calculateSTR,
  calculateDEX,
  calculateINT,
  calculateLUK,
} from './utils/stats-calculator';

function App() {
  const [coins, setCoins] = useState(0);
  const [currentSword, setCurrentSword] = useState(swords[0]);
  const [currentHat, setCurrentHat] = useState(hats[0]);
  const [currentTop, setCurrentTop] = useState(tops[0]);
  const [currentBottom, setCurrentBottom] = useState(bottoms[0]);
  const [str, setStr] = useState(
    calculateSTR(currentSword, currentHat, currentTop, currentBottom)
  );
  const [dex, setDex] = useState(
    calculateDEX(currentSword, currentHat, currentTop, currentBottom)
  );
  const [int, setInt] = useState(
    calculateINT(currentSword, currentHat, currentTop, currentBottom)
  );
  const [luk, setLuk] = useState(
    calculateLUK(currentSword, currentHat, currentTop, currentBottom)
  );
  return (
    <div className='bg-gray-100 w-full flex justify-center'>
      {/* SCREEN CONTAINER */}
      <div className='h-screen w-full container flex flex-col justify-center p-4 gap-4'>
        {/* COINS AMOUNT */}
        <div className='w-full text-3xl'>Coins: {coins}</div>
        {/* ITEMS */}
        <div className='h-full w-full grid auto-row-auto grid-cols-2 overflow-y-scroll place-items-center gap-y-4'>
          <SwordItem
            item={currentSword}
            coins={coins}
            setCurrentSword={setCurrentSword}
          />
          <HatItem item={currentHat} coins={coins} />
          <TopItem item={currentTop} coins={coins} />
          <BottomItem item={currentBottom} coins={coins} />
        </div>
        {/* STATS */}
        <div className='w-full p-4 place-items-center grid  grid-flow-col gap-2'>
          <p>STR:{str}</p>
          <p>DEX:{dex}</p>
          <p>INT:{int}</p>
          <p>LUK:{luk}</p>
        </div>

        {/* TAP BUTTON */}
        <button
          onClick={() => setCoins((prev) => prev + 1)}
          className='w-full self-end text-3xl uppercase font-bold bg-gray-700 rounded-full active:bg-gray-600 py-2'
        >
          TAP
        </button>
      </div>
    </div>
  );
}

export default App;
