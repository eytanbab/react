import { useState } from 'react';
import { Switch } from '@headlessui/react';

const Toggle = ({ darkMode, setDarkMode }) => {
  const [enabled, setEnabled] = useState(false);

  const handleChange = () => {
    setEnabled(!enabled);
    setDarkMode(!darkMode);
  };
  return (
    <Switch
      checked={enabled}
      onChange={handleChange}
      className={`${enabled ? 'bg-gray-400' : 'bg-gray-300'}
          relative inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className='sr-only'>Use setting</span>
      <span
        aria-hidden='true'
        className={`${enabled ? 'translate-x-8' : 'translate-x-0'}
            pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};

export default Toggle;
