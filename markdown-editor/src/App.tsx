import { ThemeProvider } from './components/theme-provider';
import SideNav from './components/side-nav';
import Separator from './components/separator';
import Nav from './components/nav';
import MarkdownEditor from './components/markdown-editor';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarkdownGuide from './components/markdown-guide';
import { Toaster } from 'sonner';

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [content, setContent] = useState('');
  const handleRefresh = () => {
    setRefresh((prev) => !prev); // Toggle to trigger re-render
  };
  return (
    <Router>
      <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
        <div className='w-full h-screen flex flex-col lg:flex-row bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-100'>
          <Toaster
            toastOptions={{
              className:
                'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 drop-shadow-md',
            }}
            position='bottom-right'
            offset='16px'
          />
          <SideNav
            refresh={refresh}
            onDelete={handleRefresh}
            setContent={setContent}
          />
          <Separator />
          <div className='flex h-dvh flex-col w-full gap-x-2 overflow-hidden'>
            <Nav />
            <Routes>
              <Route
                path='/'
                element={
                  <MarkdownEditor
                    onSave={handleRefresh}
                    content={content}
                    setContent={setContent}
                  />
                }
              />
              <Route
                path='/:id'
                element={
                  <MarkdownEditor
                    onSave={handleRefresh}
                    content={content}
                    setContent={setContent}
                  />
                }
              />
              <Route path='/how-to-use' element={<MarkdownGuide />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
