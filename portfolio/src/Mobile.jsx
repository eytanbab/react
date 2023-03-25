import { useState, useEffect } from 'react';
import './App.css';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer';
import data from './data';
import Navbar from './components/Navbar';

const Mobile = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(false);

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
    <div className='flex min-h-screen flex-col items-center justify-start gap-4 bg-slate-900  text-slate-100'>
      <Navbar />
      <div className='flex grow flex-col justify-between'>
        {data.map((data, index) =>
          index === pageIndex - 1 ? (
            <ProjectPage
              key={index}
              data={data}
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

      <Footer />
    </div>
  );
};

export default Mobile;
