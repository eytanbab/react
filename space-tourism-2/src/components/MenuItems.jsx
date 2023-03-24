import React from 'react';
import MenuItem from './MenuItem';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuItems = ({ isOpen }) => {
  return (
    <ul
      className={`${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } bg-white-500/10 absolute right-0 top-0 flex h-screen w-64  flex-col gap-4  bg-white/10 px-8 pt-20 font-barlow-condensed backdrop-blur-xl transition-transform  duration-500`}
    >
      <NavLink
        to='/'
        style={({ isActive, isPending }) => {
          return {
            borderLeftColor: isActive ? 'white' : '',
            borderLeftWidth: isActive ? 2 : '',
          };
        }}
      >
        <MenuItem id='00' name='Home' />
      </NavLink>

      <NavLink
        to='/destination'
        style={({ isActive }) => {
          return {
            borderLeftColor: isActive ? 'white' : '',
            borderLeftWidth: isActive ? 2 : '',
          };
        }}
      >
        <MenuItem id='01' name='Destination' />
      </NavLink>

      <NavLink
        to='/crew'
        style={({ isActive }) => {
          return {
            borderLeftColor: isActive ? 'white' : '',
            borderLeftWidth: isActive ? 2 : '',
          };
        }}
      >
        <MenuItem id='02' name='Crew' />
      </NavLink>

      <NavLink
        to='/technology'
        style={({ isActive }) => {
          return {
            borderLeftColor: isActive ? 'white' : '',
            borderLeftWidth: isActive ? 2 : '',
          };
        }}
      >
        <MenuItem id='03' name='Technology' />
      </NavLink>
    </ul>
  );
};

export default MenuItems;
