import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from './theme-provider';

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <button
      onClick={handleClick}
      className='size-8 flex items-center justify-center border border-slate-800/50 dark:border-slate-300/50 rounded-lg'
    >
      {theme === 'dark' ? (
        <FaSun className='fill-[#ED8A19] size-5' />
      ) : (
        <FaMoon className='fill-[#ED8A19] size-5' />
      )}
    </button>
  );
};

export default ModeToggle;
