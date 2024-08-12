import { useState } from 'react';
import { crew } from '../../../data.json';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Pagination from '../../shared/Pagination';

const MemberCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMemberHandler = () => {
    setCurrentIndex((c) => (c + 1) % crew.length);
  };
  const previousMemberHandler = () => {
    setCurrentIndex((c) => (c === 0 ? crew.length - 1 : c - 1));
  };

  return (
    <>
      {crew.map((member, idx) => {
        if (currentIndex === idx) {
          return (
            <div
              className='flex w-full items-center h-[40rem]'
              key={member.name}
            >
              <button
                onClick={previousMemberHandler}
                className='aspect-square p-2 border rounded-full flex items-center justify-center'
              >
                <FaArrowLeft size={20} />
              </button>
              {/* MEMBER INFORMATION */}
              <div className='flex flex-col gap-6 items-center h-full'>
                <div className='flex flex-col items-center gap-2'>
                  <p className='text-3xl'>{member.role}</p>
                  <p className='text-xl'>{member.name}</p>
                </div>
                <p className='flex-1'>{member.bio}</p>
                <Pagination
                  currentIndex={currentIndex}
                  length={crew.length}
                  styleVariant='Crew'
                />
                <img
                  src={member.images.webp}
                  alt={member.name}
                  className='h-80'
                />
              </div>
              <button
                onClick={nextMemberHandler}
                className='aspect-square p-2 border rounded-full flex items-center justify-center'
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          );
        }
      })}
    </>
  );
};

export default MemberCarousel;
