import React from 'react';

function Dropdown({ setRegion }) {
  const optionClickedHandler = () => {
    let selectBox = document.getElementById('continents-select');
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    setRegion(selectedValue);
  };

  return (
    <div className='flex w-40 self-start rounded-md'>
      <select
        className='mx-2 w-full rounded-md bg-slate-800/20 p-2 text-sm'
        name='continents'
        id='continents-select'
        onChange={optionClickedHandler}
      >
        <option className='bg-slate-800' value=''>
          Filter by Region
        </option>
        <option className='bg-slate-800' value='Africa'>
          Africa
        </option>
        <option className='bg-slate-800' value='Americas'>
          America
        </option>
        <option className='bg-slate-800' value='Asia'>
          Asia
        </option>
        <option className='bg-slate-800' value='Europe'>
          Europe
        </option>
        <option className='bg-slate-800' value='Oceania'>
          Oceania
        </option>
      </select>
    </div>
  );
}

export default Dropdown;
