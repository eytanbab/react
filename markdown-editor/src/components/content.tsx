import { ForwardedRef, useCallback } from 'react';
import CopyButton from './copy-button';

type Props = {
  markdown: string;
  setMarkdown: (e: string) => void;
  forwardedRef: ForwardedRef<HTMLTextAreaElement>;
};

const Content = ({ markdown, setMarkdown, forwardedRef }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.ctrlKey || e.metaKey) {
        const textarea = (forwardedRef as React.RefObject<HTMLTextAreaElement>)
          .current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = markdown.substring(start, end);

        let prevented = true;

        switch (e.key.toLowerCase()) {
          case 'b':
            wrapText('**', '**', start, end, selectedText);
            break;
          case 'i':
            wrapText('*', '*', start, end, selectedText);
            break;
          case '`':
            if (e.shiftKey) {
              wrapText('```\n', '\n```', start, end, selectedText);
            } else {
              wrapText('`', '`', start, end, selectedText);
            }
            break;
          case 'k':
            insertLink(start, end, selectedText);
            break;
          case '-':
            insertListItem(start, '-');
            break;
          case '.':
            if (e.shiftKey) {
              insertListItem(start, '1.');
            }
            break;
          case '>':
            insertBlockquote(start);
            break;
          default:
            prevented = false;
        }

        if (prevented) {
          e.preventDefault();
        }
      }
    },
    [markdown, setMarkdown, forwardedRef]
  );

  const wrapText = (
    startChar: string,
    endChar: string,
    start: number,
    end: number,
    selectedText: string
  ) => {
    const newText =
      markdown.substring(0, start) +
      startChar +
      selectedText +
      endChar +
      markdown.substring(end);
    setMarkdown(newText);
    setCursorPosition(start + startChar.length, end + startChar.length);
  };

  const insertLink = (start: number, end: number, selectedText: string) => {
    const linkText = selectedText || 'Link text';
    const newText = `${markdown.substring(
      0,
      start
    )}[${linkText}](url)${markdown.substring(end)}`;
    setMarkdown(newText);
    setCursorPosition(
      start + linkText.length + 3,
      start + newText.length - markdown.substring(end).length - 1
    );
  };

  const insertListItem = (start: number, listType: string) => {
    const lineStart = markdown.lastIndexOf('\n', start - 1) + 1;
    const newText = `${markdown.substring(
      0,
      lineStart
    )}${listType} ${markdown.substring(lineStart)}`;
    setMarkdown(newText);
    setCursorPosition(
      lineStart + listType.length + 1,
      lineStart + listType.length + 1
    );
  };

  const insertBlockquote = (start: number) => {
    const lineStart = markdown.lastIndexOf('\n', start - 1) + 1;
    const newText = `${markdown.substring(0, lineStart)}> ${markdown.substring(
      lineStart
    )}`;
    setMarkdown(newText);
    setCursorPosition(lineStart + 2, lineStart + 2);
  };

  const setCursorPosition = (start: number, end: number) => {
    const textarea = (forwardedRef as React.RefObject<HTMLTextAreaElement>)
      .current;
    if (textarea) {
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, end);
      }, 0);
    }
  };

  return (
    <div className='w-full border-none outline-none resize-none bg-slate-50 dark:bg-slate-900 px-4 py-8 rounded-xl drop-shadow-md relative h-1/2 lg:h-full lg:overflow-y-scroll scrollbar-hide'>
      <textarea
        ref={forwardedRef}
        value={markdown}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className='w-full border-none outline-none resize-none bg-slate-50 dark:bg-slate-900 scrollbar-hide h-full'
      />
      <CopyButton content={markdown} />
    </div>
  );
};

export default Content;
