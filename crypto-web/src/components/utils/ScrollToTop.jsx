import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='relative'>
      {showTopBtn && (
        <FaAngleUp
          className='fixed bottom-10 right-6 z-50 h-10 w-10 rounded-md bg-white/20 backdrop-blur-xl'
          onClick={goToTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
