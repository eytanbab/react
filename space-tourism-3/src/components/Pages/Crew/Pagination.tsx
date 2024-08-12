const Pagination = ({
  currentIndex,
  length,
}: {
  currentIndex: number;
  length: number;
}) => {
  return (
    <div className='flex w-full justify-center gap-2'>
      {[...Array(length)].map((_, idx) => {
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

export default Pagination;
