import { useState, useEffect } from 'react';
import './App.css';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer';
import data from './data';
import Navbar from './components/Navbar';
import About from './components/About';

const App = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [focus, setFocus] = useState('projects');

  const pageNextHandle = () => {
    setPageIndex((prev) => prev + 1);
  };

  const pagePrevHandle = () => {
    setPageIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (pageIndex === 1) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }
    if (pageIndex === data.length) {
      setNextDisabled(true);
    } else {
      setNextDisabled(false);
    }
  }, [pageIndex]);

  return (
    <div className='relative flex min-h-screen flex-col items-center justify-start gap-4 overflow-x-hidden  bg-slate-900 text-slate-100'>
      <Navbar setFocus={setFocus} setPageIndex={setPageIndex} />
      {focus === 'projects' ? (
        <div className='flex grow flex-col justify-between'>
          {data.map((item, index) =>
            index === pageIndex - 1 ? (
              <ProjectPage
                key={index}
                data={item}
                pagePrevHandle={pagePrevHandle}
                pageNextHandle={pageNextHandle}
                nextDisabled={nextDisabled}
                prevDisabled={prevDisabled}
              />
            ) : (
              ''
            )
          )}
        </div>
      ) : (
        <About />
      )}

      <Footer />
    </div>
  );
};

export default App;
