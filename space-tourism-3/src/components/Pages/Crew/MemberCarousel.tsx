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
              className='flex w-full items-center h-[40rem] md:h-full'
              key={member.name}
            >
              {/* LEFT ARROW*/}
              <button
                onClick={previousMemberHandler}
                className='aspect-square p-2 border rounded-full flex items-center justify-center'
              >
                <FaArrowLeft size={20} />
              </button>
              {/* MEMBER INFORMATION */}
              <div className='flex flex-col gap-6 items-center h-full text-center'>
                <div className='flex flex-col gap-6 pt-10'>
                  <div className='flex flex-col items-center gap-6 md:mt-10'>
                    <div className='flex flex-col gap-2 w-full'>
                      <p className='text-lg text-white/50 uppercase md:text-3xl'>
                        {member.role}
                      </p>
                      <p className='text-2xl uppercase md:text-5xl'>
                        {member.name}
                      </p>
                    </div>
                    <p className='h-44 md:px-20  md:text-center'>
                      {member.bio}
                    </p>
                  </div>
                  <Pagination
                    currentIndex={currentIndex}
                    length={crew.length}
                    styleVariant='Crew'
                  />
                </div>
                <img
                  src={member.images.webp}
                  alt={member.name}
                  className='h-full '
                />
              </div>
              {/* RIGHT ARROW */}
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
