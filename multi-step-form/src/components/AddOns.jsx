import React from 'react';

const AddOns = ({
  enabled,
  online,
  setOnline,
  storage,
  setStorage,
  profile,
  setProfile,
}) => {
  return (
    <>
      <h1 className='text-2xl font-bold text-blue-900'>Pick add-ons</h1>
      <p className=' text-neutral-400'>
        Add-ons help enhance your gaming experience.
      </p>
      {/* CHECKBOX BUTTONS */}
      <div className='flex flex-col items-start gap-4'>
        {/* ONLINE SERVICE */}
        <div
          className={`${
            online ? ' border-purple-900 bg-purple-100/30' : ''
          }  flex h-20 w-full items-center justify-between gap-6 rounded-lg border border-gray-400  px-4`}
        >
          <div className='flex items-center gap-4'>
            <input
              type='checkbox'
              className='h-6 w-6 border border-gray-400'
              onChange={() => setOnline(!online)}
            />
            <div className='flex flex-col text-left'>
              <h1 className='self-start font-bold text-blue-900'>
                Online service
              </h1>
              <p className='self-start text-sm text-neutral-400'>
                Access to multiplayer games
              </p>
            </div>
          </div>
          {enabled ? (
            <p className='text-sm text-purple-600'>+$10/yr</p>
          ) : (
            <p className='text-sm text-purple-600 '>+$1/yr</p>
          )}
        </div>

        {/* LARGER STORAGE */}
        <div
          className={`${
            storage ? ' border-purple-900 bg-purple-100/30' : ''
          }  flex h-20 w-full items-center justify-between rounded-lg border border-gray-400 px-4`}
        >
          <div className='flex items-center gap-4'>
            <input
              type='checkbox'
              className='h-6 w-6 border border-gray-400'
              onChange={() => setStorage(!storage)}
            />
            <div className='flex flex-col '>
              <h1 className='self-start font-bold text-blue-900'>
                Larger storage
              </h1>
              <p className='self-start text-sm text-neutral-400'>
                Extra 1TB of cloud save
              </p>
            </div>
          </div>
          {enabled ? (
            <p className='text-sm text-purple-600'>+$20/yr</p>
          ) : (
            <p className='text-sm text-purple-600 '>+$2/yr</p>
          )}
        </div>
        {/* CUSTOMIZABLE PROFILE */}
        <div
          className={`${
            profile ? ' border-purple-900 bg-purple-100/30' : ''
          }  flex h-20 w-full items-center justify-between rounded-lg border border-gray-400 px-4`}
        >
          <div className='flex items-center gap-4'>
            <input
              type='checkbox'
              className='h-6 w-6 border border-gray-400'
              onChange={() => setProfile(!profile)}
            />
            <div className='flex flex-col '>
              <h1 className='self-start font-bold text-blue-900'>
                Customizable profile
              </h1>
              <p className='self-start text-sm text-neutral-400'>
                Custom theme on your profile
              </p>
            </div>
          </div>
          {enabled ? (
            <p className='text-sm text-purple-600'>+$20/yr</p>
          ) : (
            <p className='text-sm text-purple-600 '>+$2/yr</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AddOns;
