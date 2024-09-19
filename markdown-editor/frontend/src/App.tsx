import { ThemeProvider } from './components/theme-provider';
import SideNav from './components/side-nav';
import Separator from './components/separator';
import Nav from './components/nav';
import MarkdownEditor from './components/markdown-editor';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setRefresh((prev) => !prev); // Toggle to trigger re-render
  };
  return (
    <Router>
      <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
        <div className='h-screen flex bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-100'>
          <SideNav refresh={refresh} />
          <Separator />
          <div className='flex flex-col w-full gap-x-2'>
            <Nav />
            <Routes>
              <Route
                path='/'
                element={<MarkdownEditor onSave={handleSave} />}
              />
              <Route
                path='/:id'
                element={<MarkdownEditor onSave={handleSave} />}
              />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
