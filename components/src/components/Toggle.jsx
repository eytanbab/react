import React from 'react';
import { useState } from 'react';

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={`${
        toggle ? 'bg-gray-200' : 'bg-gray-800'
      } relative h-10 w-20 cursor-pointer rounded-full `}
    >
      <div
        className={`${
          toggle ? ' translate-x-1 bg-gray-800' : ' translate-x-11 bg-gray-200'
        } absolute  top-1 h-8 w-8 rounded-full  transition-transform duration-300 ease-in-out`}
      ></div>
    </div>
  );
};

export default Toggle;
