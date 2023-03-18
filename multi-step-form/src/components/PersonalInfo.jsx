import React from 'react';

const PersonalInfo = () => {
  return (
    <>
      <h1 className='text-2xl font-bold text-blue-900'>Personal info</h1>
      <p className=' text-neutral-400'>
        Please provide your name, email address, and phone number.
      </p>
      {/* FORM INPUTS */}
      <form className='flex flex-col py-4 font-medium text-blue-900 '>
        <label className='text-sm'>Name</label>
        <input
          className='mb-4 w-full rounded-md border border-gray-300 p-2 outline-none'
          placeholder='e.g. Stephen King'
        />
        <label className='text-sm'>Email Address</label>
        <input
          className='mb-4 w-full rounded-md border border-gray-300 p-2 outline-none'
          placeholder='e.g. stephenking@lorem.com'
        />
        <label className='text-sm'>Phone Number</label>
        <input
          className='mb-4 w-full rounded-md border border-gray-300 p-2 outline-none'
          placeholder='e.g. +1 234 567 890'
        />
      </form>
    </>
  );
};

export default PersonalInfo;
