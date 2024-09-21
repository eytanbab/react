type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ onChange, value }: Props) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder='Search saved markdowns...'
      className='rounded-full px-4 py-1 w-full min-w-0 max-w-80 outline-none bg-slate-50 dark:bg-slate-800 drop-shadow-md placeholder:text-slate-400 font-light'
    />
  );
};

export default SearchBar;
