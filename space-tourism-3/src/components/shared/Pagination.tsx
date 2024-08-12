import { technology } from '../../data.json';

type Technology = {
  name: string;
  images: { portrait: string; landscape: string };
  description: string;
};

type PaginationProps = {
  currentIndex?: number;
  length?: number;
  styleVariant: 'Crew' | 'Technology';
  selectedButton?: number;
  setSelectedTechnology?: (tech: Technology) => void;
  setSelectedButton?: (index: number) => void;
};

const Pagination = ({
  currentIndex,
  length,
  styleVariant,
  selectedButton,
  setSelectedTechnology,
  setSelectedButton,
}: PaginationProps) => {
  const handleSelectTechnology = (index: number) => {
    setSelectedTechnology!(technology[index]), setSelectedButton!(index);
  };

  if (styleVariant === 'Crew') {
    return (
      <div className='flex w-full justify-center gap-2'>
        {[...Array(length)].map((_, idx) => {
          return (
            <div
              key={idx}
              className={`${
                currentIndex === idx ? 'bg-white' : 'bg-white/50'
              } w-2 h-2 rounded-full `}
            />
          );
        })}
      </div>
    );
  }
  if (styleVariant === 'Technology') {
    return (
      <div className='flex gap-8 text-3xl'>
        <button
          className={`${
            selectedButton === 0 ? 'bg-white text-black' : ''
          } border p-2 rounded-full size-10 text-lg flex items-center justify-center`}
          onClick={() => handleSelectTechnology(0)}
        >
          1
        </button>
        <button
          className={`${
            selectedButton === 1 ? 'bg-white text-black' : ''
          } border p-2 rounded-full size-10 text-lg flex items-center justify-center`}
          onClick={() => handleSelectTechnology(1)}
        >
          2
        </button>
        <button
          className={`${
            selectedButton === 2 ? 'bg-white text-black' : ''
          } border p-2 rounded-full size-10 text-lg flex items-center justify-center`}
          onClick={() => handleSelectTechnology(2)}
        >
          3
        </button>
      </div>
    );
  }
};

export default Pagination;
