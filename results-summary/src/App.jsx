import { useState } from 'react';
import './App.css';
import data from './data.json';

function App() {
  return (
    <div className='App'>
      <div className='card-container'>
        <div className='results-container'>
          <h2 className='results-title'>Your Result</h2>
          <div className='results-score-container'>
            <div className='results-score'>
              <p className='result'>76</p>
              <p className='maxscore'>of 100</p>
            </div>
          </div>
          <div className='results-desc'>
            <p className='results-desc-title'>Great</p>
            <p>lorem ipsom</p>
          </div>
        </div>
        <div className='summary-container'>
          <h2 className='summary-title'>Summary</h2>
          <div className='summary-scores-container'>
            <div className='summary-score-container reaction'>
              <p className='summary-name '>Reaction</p>
              <div className='score'>
                <p className='summary-score'>80 </p>
                <p className='summary-max-score'>/ 100</p>
              </div>
            </div>
            <div className='summary-score-container memory'>
              <p className='summary-name'>Memory</p>
              <div className='score'>
                <p className='summary-score'>80</p>
                <p className='summary-max-score'>/ 100</p>
              </div>
            </div>
            <div className='summary-score-container verbal'>
              <p className='summary-name'>Verbal</p>
              <div className='score'>
                <p className='summary-score'>80</p>
                <p className='summary-max-score'>/ 100</p>
              </div>
            </div>
            <div className='summary-score-container visual'>
              <p className='summary-name '>Visual</p>
              <div className='score'>
                <p className='summary-score'>80</p>
                <p className='summary-max-score'>/ 100</p>
              </div>
            </div>
          </div>

          <button className='continue-button'>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
