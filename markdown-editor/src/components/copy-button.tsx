import { useState } from 'react';
import { toast } from 'sonner';

type Props = {
  content: string;
};

const CopyButton = ({ content }: Props) => {
  const [isCopying, setIsCopying] = useState(false);

  const disabled = content === '' || isCopying;

  const handleCopy = async () => {
    try {
      setIsCopying(true);
      await navigator.clipboard.writeText(content);
      setIsCopying(false);
      toast('Text copied!', {
        duration: 1500,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsCopying(false);
    }
  };
  return (
    <button
      disabled={disabled}
      onClick={handleCopy}
      className='bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 absolute px-4 py-1 rounded-full right-4 bottom-6 drop-shadow-md disabled:bg-slate-400 disabled:dark:bg-slate-700 disabled:drop-shadow-none'
    >
      Copy
    </button>
  );
};

export default CopyButton;
