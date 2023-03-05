import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  //tip amount per person
  // useEffect(() => {
  //   const temp = ((Number(bill) / Number(numOfPeople)) * tip) / 100;
  //   setTipAmount(Number(temp).toFixed(2));
  // }, [bill, tip, numOfPeople, customTip]);

  //total price per person
  // useEffect(() => {
  //   const temp = Number(bill) / Number(numOfPeople) + Number(tipAmount);
  //   setTotal(Number(temp).toFixed(2));
  // }, [bill, tipAmount, customTip]);

  const handleCustomTip = (e) => {
    if (e.target.value >= 0) {
      setCustomTip(e.target.value);
      setTip(e.target.value);
    }
  };

  const handleNumberOfPeople = (e) => {
    if (e.target.value > 0) {
      setNumOfPeople(e.target.value);
    } else {
      setNumOfPeople(1);
    }
  };

  const handleSubmit = () => {
    const temp = ((Number(bill) / Number(numOfPeople)) * tip) / 100;
    setTipAmount(Number(temp).toFixed(2));
    const temp2 = Number(bill) / Number(numOfPeople) + temp;
    setTotal(Number(temp2).toFixed(2));
  };
  const handleReset = () => {
    setBill(0);
    setTip(0);
    setNumOfPeople(1);
    setCustomTip('');
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='bill-container'>
          <div className='bill-amount'>
            <form className='form'>
              <label className='bill-title'>Bill</label>
              <input
                className='input input-bill'
                type='number'
                value={bill}
                placeholder='$'
                onChange={(e) =>
                  e.target.value > 0 ? setBill(e.target.value) : setBill('')
                }
                onClick={() => setBill('')}
              />
            </form>
          </div>
          <div className='select-tip-container'>
            <label className='tip-title'>Select Tip %</label>
            <div className='tip-percentage-container'>
              <button
                onClick={() => {
                  setTip(5);
                }}
                className='tip-percentage'
              >
                5%
              </button>
              <button
                onClick={() => {
                  setTip(10);
                }}
                className='tip-percentage'
              >
                10%
              </button>
              <button
                onClick={() => {
                  setTip(15);
                }}
                className='tip-percentage'
              >
                15%
              </button>
              <button
                onClick={() => {
                  setTip(25);
                }}
                className='tip-percentage'
              >
                25%
              </button>
              <button
                onClick={() => {
                  setTip(50);
                }}
                className='tip-percentage'
              >
                50%
              </button>
              <input
                onChange={handleCustomTip}
                className='tip-percentage custom'
                type='number'
                placeholder='Custom'
                value={customTip}
              />
            </div>
          </div>
          <div className='num-of-people'>
            <form className='form'>
              <label>Number of People</label>
              <input
                className='input people-amount'
                type='number'
                placeholder='1'
                onChange={handleNumberOfPeople}
              />
            </form>
          </div>
        </div>
        <div className='total-container'>
          <div className='upper'>
            <div className='total-tip-amount'>
              <div className='tip-amount-text'>
                <p className='tip-text'>Tip Amount</p>
                <p className='person-text'>/ person</p>
              </div>
              <div className='tip-amount-price'>${tipAmount}</div>
            </div>
            <div className='total-tip-amount'>
              <div className='tip-amount-text'>
                <p className='tip-text'>Total</p>
                <p className='person-text'>/ person</p>
              </div>
              <div className='tip-amount-price'>${total}</div>
            </div>
          </div>
          <button onClick={handleSubmit} className='submit-btn'>
            SUBMIT
          </button>
          <button onClick={handleReset} className='reset-btn'>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
