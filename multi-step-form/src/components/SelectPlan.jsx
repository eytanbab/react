import React from 'react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import IconArcade from '../assets/images/icon-arcade.svg';
import IconAdvanced from '../assets/images/icon-advanced.svg';
import IconPro from '../assets/images/icon-pro.svg';
import { useEffect } from 'react';

const SelectPlan = ({ selectedPlan, setSelectedPlan, enabled, setEnabled }) => {
  return (
    <>
      <div className='flex flex-col gap-2 '>
        <h1 className='text-2xl font-bold text-blue-900'>Select your plan</h1>
        <p className=' text-neutral-400'>
          You have the option of monthly or yearly billing.
        </p>
        {/* SELECT BUTTONS */}
        <div className='flex flex-col gap-4'>
          {/* ARCADE */}
          <button
            className={`${
              selectedPlan === 'arcade'
                ? ' border-purple-900 bg-purple-100/30'
                : ''
            }  flex h-20 w-full items-center  justify-start gap-6 rounded-lg border border-gray-400  px-4`}
            onClick={() => setSelectedPlan('arcade')}
          >
            <img src={IconArcade} alt='arcade-logo' />
            <div className='flex flex-col items-center justify-start'>
              <h1 className='self-start font-bold text-blue-900'>Arcade</h1>
              {enabled ? (
                <div className='flex flex-col items-start '>
                  <p className='text-sm text-neutral-400'>$90/yr</p>
                  <p className='text-sm text-blue-900'>2 months free</p>
                </div>
              ) : (
                <p className='self-start text-sm text-neutral-400'>$9/mo</p>
              )}
            </div>
          </button>

          {/* ADVANCED */}
          <button
            className={`${
              selectedPlan === 'advanced'
                ? ' border-purple-900 bg-purple-100/30'
                : ''
            } flex h-20 w-full items-center  justify-start gap-6 rounded-lg border border-gray-400  px-4`}
            onClick={() => setSelectedPlan('advanced')}
          >
            <img src={IconAdvanced} alt='advanced-logo' />
            <div className='flex flex-col items-center justify-start'>
              <h1 className='self-start font-bold text-blue-900'>Advanced</h1>
              {enabled ? (
                <div className='flex flex-col items-start '>
                  <p className='text-sm text-neutral-400'>$120/yr</p>
                  <p className='text-sm text-blue-900'>2 months free</p>
                </div>
              ) : (
                <p className='self-start text-sm text-neutral-400'>$12/mo</p>
              )}
            </div>
          </button>

          {/* PRO */}
          <button
            className={`${
              selectedPlan === 'pro'
                ? ' border-purple-900 bg-purple-100/30'
                : ''
            } flex h-20 w-full items-center  justify-start gap-6 rounded-lg border border-gray-400  px-4`}
            onClick={() => setSelectedPlan('pro')}
          >
            <img src={IconPro} alt='pro-logo' />
            <div className='flex flex-col items-center justify-start'>
              <h1 className='self-start font-bold text-blue-900'>Pro</h1>
              {enabled ? (
                <div className='flex flex-col items-start '>
                  <p className='text-sm text-neutral-400'>$150/yr</p>
                  <p className='text-sm text-blue-900'>2 months free</p>
                </div>
              ) : (
                <p className='self-start text-sm text-neutral-400'>$15/mo</p>
              )}
            </div>
          </button>
        </div>
        {/* TOGGLE BUTTON */}
        <div className='flex h-full items-center justify-center gap-4 py-8'>
          <h1
            className={`${
              !enabled ? 'text-blue-900' : 'text-neutral-400'
            } font-bold`}
          >
            Monthly
          </h1>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className='relative 
          inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-blue-900 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75'
          >
            <span
              aria-hidden='true'
              className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <h1
            className={`${
              enabled ? 'text-blue-900' : 'text-neutral-400'
            } font-bold`}
          >
            Yearly
          </h1>
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
