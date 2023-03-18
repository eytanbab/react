import React from 'react';

const FinishingUp = (personalInfo, selectedPlan) => {
  return (
    <>
      <h1 className='text-2xl font-bold text-blue-900'>Finishing up</h1>
      <p className=' text-neutral-400'>
        Double-check everything looks OK before confirming.
      </p>
      {/* FORM INPUTS */}
      <div className='flex flex-col bg-red-500 py-4 font-medium text-blue-900 '></div>
    </>
  );
};

export default FinishingUp;
