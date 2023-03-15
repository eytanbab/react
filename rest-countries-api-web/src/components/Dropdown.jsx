import React from 'react';

function Dropdown({ setRegion }) {
  const optionClickedHandler = () => {
    let selectBox = document.getElementById('continents-select');
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    setRegion(selectedValue);
  };

  return (
    <div className='flex w-40 self-start  rounded-md'>
      <select
        className='w-full mx-2 p-2 text-sm bg-slate-800/20 rounded-md'
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
