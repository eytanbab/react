import { useState } from 'react';

const PersonalInfo = ({ info, setInfo }) => {
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
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
          value={info.name}
        />
        <label className='text-sm'>Email Address</label>
        <input
          className='mb-4 w-full rounded-md border border-gray-300 p-2 outline-none'
          placeholder='e.g. stephenking@lorem.com'
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
          value={info.email}
        />
        <label className='text-sm'>Phone Number</label>
        <input
          className='mb-4 w-full rounded-md border border-gray-300 p-2 outline-none'
          placeholder='e.g. +1 234 567 890'
          onChange={(e) => setInfo({ ...info, phone: e.target.value })}
          value={info.phone}
        />
      </form>
    </>
  );
};

export default PersonalInfo;
