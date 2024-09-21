type Props = {
  content: string;
};

const CopyButton = ({ content }: Props) => {
  const disabled = content === '';

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
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
