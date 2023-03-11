import React from 'react';

function Tool({ data, Img }) {
  console.log(data);
  return (
    <div className='flex bg-red-500'>
      <div>{data.name}</div>
      <img src={Img} alt='' />
    </div>
  );
}

export default Tool;
