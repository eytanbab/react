import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiPencil, BiCategoryAlt } from 'react-icons/bi';
import { FaInbox, FaFirstdraft } from 'react-icons/fa';
import {
  AiOutlineStar,
  AiOutlineClockCircle,
  AiOutlineSend,
} from 'react-icons/ai';
import { MdLabelImportantOutline } from 'react-icons/md';
import { RiSpam2Line } from 'react-icons/ri';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${isOpen ? 'w-96' : 'w-32'}  h-full   bg-red-500 p-4`}>
      <div className='flex h-full flex-col items-center gap-4 bg-blue-300'>
        <GiHamburgerMenu size={30} />
        <div className='flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100 text-slate-900'>
          <BiPencil size={40} />
        </div>
        <FaInbox size={30} />
        <AiOutlineStar size={30} />
        <AiOutlineClockCircle size={30} />
        <MdLabelImportantOutline size={30} />
        <AiOutlineSend size={30} />
        <FaFirstdraft size={30} />
        <RiSpam2Line size={30} />
        <BiCategoryAlt size={30} />
      </div>
    </div>
  );
};

export default SideNav;
