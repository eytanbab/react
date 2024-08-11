import { useState } from 'react';
import { crew } from '../../data.json';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Pagination = ({ currentIndex }: { currentIndex: number }) => {
  return (
    <div className='flex w-full justify-center gap-2'>
      {crew.map((_, idx) => {
        return (
          <div
            className={`${
              currentIndex === idx ? 'bg-white' : 'bg-white/50'
            } w-2 h-2 rounded-full `}
          />
        );
      })}
    </div>
  );
};

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
            <div className=' flex w-full items-center' key={member.name}>
              <button
                onClick={previousMemberHandler}
                className='aspect-square p-2 border rounded-full flex items-center justify-center'
              >
                <FaArrowLeft size={20} />
              </button>
              <div className='flex flex-col gap-6 items-center'>
                <div className='flex flex-col items-center gap-2'>
                  <p className='text-3xl'>{member.role}</p>
                  <p className='text-xl'>{member.name}</p>
                </div>
                <p className='flex-1'>{member.bio}</p>
                <Pagination currentIndex={currentIndex} />
                <img
                  src={member.images.webp}
                  alt={member.name}
                  className='max-w-60 justify-self-end'
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
