import { ThemeProvider } from './components/theme-provider';
import SideNav from './components/side-nav';
import Separator from './components/separator';
import Nav from './components/nav';
import MarkdownEditor from './components/markdown-editor';
import { useState } from 'react';

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const handleSave = () => {
    setRefresh((prev) => !prev); // Toggle to trigger re-render
  };
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <div className='h-screen flex bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-100'>
        <SideNav refresh={refresh} />
        <Separator />
        <div className='flex flex-col w-full gap-x-2'>
          <Nav />
          <MarkdownEditor onSave={handleSave} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
