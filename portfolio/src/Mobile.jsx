import { useState } from 'react';

import Page from './components/Page';
import Footer from './components/Footer';
import data from './data';

const Mobile = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const pageNextHandle = () => {
    if (pageIndex >= data.length) return;
    setPageIndex((prev) => prev + 1);
  };

  const pagePrevHandle = () => {
    if (pageIndex <= 1) return;
    setPageIndex((prev) => prev - 1);
  };

  return (
    <div className='flex  h-screen flex-col items-center justify-start gap-4 bg-slate-900 p-6 text-slate-100'>
      <h1 className='text-3xl uppercase'>my portfolio</h1>
      <div className='flex h-screen flex-col justify-between'>
        {data.map((data, index) =>
          index === pageIndex - 1 ? <Page key={index} data={data} /> : ''
        )}
        {/* BUTTONS AND FOOTER DIV */}
        <Footer
          pagePrevHandle={pagePrevHandle}
          pageNextHandle={pageNextHandle}
        />
      </div>
    </div>
  );
};

export default Mobile;
