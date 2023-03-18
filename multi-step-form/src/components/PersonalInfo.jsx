import { useState } from 'react';

const PersonalInfo = ({ personalInfo, setPersonalInfo }) => {
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
          type='text'
          className='mb-4 w-full rounded-md border border-gray-300 p-2 outline-none'
          placeholder='e.g. Stephen King'
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, name: e.target.value })
          }
          value={personalInfo.name}
        />
        <label className='text-sm'>Email Address</label>
        <input
          input='email'
          className='mb-4 w-full rounded-md border border-gray-300 p-2 outline-none'
          placeholder='e.g. stephenking@lorem.com'
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, email: e.target.value })
          }
          value={personalInfo.email}
        />
        <label className='text-sm'>Phone Number</label>
        <input
          className='mb-4 w-full rounded-md border border-gray-300 p-2 outline-none'
          placeholder='e.g. +1 234 567 890'
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, phone: e.target.value })
          }
          value={personalInfo.phone}
        />
      </form>
    </>
  );
};

export default PersonalInfo;
