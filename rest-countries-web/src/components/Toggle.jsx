import React from 'react';

const Toggle = ({ theme, handleThemeSwitch }) => {
  return (
    <div>
      <button
        onClick={handleThemeSwitch}
        className='relative h-7 w-16 rounded-full bg-stone-900 dark:bg-stone-50'
      >
        <span
          className={`${
            theme === 'dark' ? 'translate-x-9' : 'translate-x-1'
          } absolute left-0 top-0.5 h-6 w-6  rounded-full bg-stone-50 transition-transform duration-300 ease-in-out dark:bg-stone-900`}
        ></span>
      </button>
    </div>
  );
};

export default Toggle;
