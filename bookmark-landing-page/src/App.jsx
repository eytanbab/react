import { useState } from 'react';
import Logo from './assets/logo-bookmark.svg';
import HamburgerIcon from './assets/icon-hamburger.svg';
import CloseIcon from './assets/icon-close.svg';
import HeroBg from './assets/illustration-features-tab-1.svg';
import ChromeLogo from './assets/logo-chrome.svg';
import FirefoxLogo from './assets/logo-firefox.svg';
import OperaLogo from './assets/logo-opera.svg';
import Dots from './assets/bg-dots.svg';
import ArrowIcon from './assets/icon-arrow.svg';
import FacebookIcon from './assets/icon-facebook.svg';
import TwitterIcon from './assets/icon-twitter.svg';
function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='bg-gray-100 w-screen min-h-screen flex flex-col items-center justify-center'>
      <nav
        className={`${
          isExpanded ? 'bg-cyan-600' : ''
        } flex w-full h-24 items-center justify-between px-6 `}
      >
        <img src={Logo} alt='Logo' className=' w-40' />
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {!isExpanded ? (
            <img src={HamburgerIcon} alt='' className=' w-6' />
          ) : (
            <img src={CloseIcon} alt='' className=' w-6' />
          )}
        </button>
      </nav>
      {isExpanded && (
        <div
          className='
            flex flex-col items-center py-24  gap-12 bg-gray-800 w-screen h-screen uppercase text-white'
        >
          <a>Features</a>
          <a>Pricing</a>
          <a>Contact</a>
          <a className=' rounded-2xl bg-cyan-600 p-4'>Login</a>
        </div>
      )}

      {!isExpanded && (
        <>
          <div className='flex flex-col px-10 py-12 gap-10'>
            <img src={HeroBg} />
            <div className='flex flex-col justify-center items-center text-center gap-8'>
              {/* HERO */}
              <div className='flex flex-col gap-6'>
                <h1 className='font-bold text-3xl text-gray-900'>
                  A Simple Bookmark Manager
                </h1>
                <p className='text-lg text-gray-500'>
                  A clean and simple interface to organize your favourite
                  websites. Open a new browser tab and see your sites load
                  instantly. Try it for free.
                </p>
                <div className='flex items-center justify-center w-full gap-4'>
                  <button className='bg-blue-700 text-white p-4 rounded-lg basis-40 grow-0 shrink-0'>
                    Get it on Chrome
                  </button>
                  <button className='shadow-md text-gray-700 p-4 rounded-lg basis-40 grow-0 shrink-0'>
                    Get it on Firefox
                  </button>
                </div>
              </div>
              {/* FEATURES */}
              <div id='#features' className='flex flex-col gap-6 pt-20'>
                <h1 className='font-bold text-3xl text-gray-900'>Features</h1>
                <p className='text-lg text-gray-500'>
                  Our aim is to make it quick and easy for you to access your
                  favourite websites. Your bookmarks sync between your devices
                  so you can access them on the go.
                </p>
                <div className='flex flex-col gap-4 text-lg font-medium items-center '>
                  <div className='bg-gray-400 w-full h-[0.05rem]' />
                  <h1 className='hover:border-b-4 hover:border-red-500 hover:-mb-1'>
                    Simple Bookmarking
                  </h1>
                  <div className='bg-gray-400 w-full h-[0.05rem]' />
                  <h1 className='hover:border-b-4 hover:border-red-500 hover:-mb-1'>
                    Speedy Searching
                  </h1>
                  <div className='bg-gray-400 w-full h-[0.05rem]' />
                  <h1 className='hover:border-b-4 hover:border-red-500 hover:-mb-1'>
                    Easy Sharing
                  </h1>
                  <div className='bg-gray-400 w-full h-[0.05rem]' />
                </div>
              </div>
              <div className='flex flex-col gap-6 pt-12'>
                <img src={HeroBg} />
                <h1 className='font-bold text-3xl text-gray-900'>
                  Bookmark in one click
                </h1>
                <p className='text-lg text-gray-500'>
                  Organize your booksmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
              </div>
              <div className='flex flex-col gap-8 pt-12'>
                <h1 className='font-bold text-3xl text-gray-900'>
                  Download the extension
                </h1>
                <p className='text-lg text-gray-500'>
                  We've got more browsers in the pipeline. Please do let us know
                  if you've got a favourite you'd like us to prioritize.
                </p>
                {/* CHROME */}
                <div className='flex flex-col items-center justify-center w-full gap-4 shadow-md py-4  rounded-xl'>
                  <img src={ChromeLogo} alt='chrome-logo' />
                  <h1>Add to Chrome</h1>
                  <p className='text-gray-500'>Minimum version 62</p>
                  <img src={Dots} alt='dots' />
                  <button className='shadow-md bg-blue-700 text-white p-4 rounded-lg font-medium'>
                    Add & Install Extension
                  </button>
                </div>
                {/* FIREFOX */}
                <div className='flex flex-col items-center justify-center w-full gap-4 shadow-md py-4 rounded-xl'>
                  <img src={FirefoxLogo} alt='chrome-logo' />
                  <h1>Add to Firefox</h1>
                  <p className='text-gray-500'>Minimum version 55</p>
                  <img src={Dots} alt='dots' />
                  <button className='shadow-md bg-blue-700 text-white p-4 rounded-lg font-medium'>
                    Add & Install Extension
                  </button>
                </div>
                {/* OPERA */}
                <div className='flex flex-col items-center justify-center w-full gap-4 shadow-md py-4 rounded-xl'>
                  <img src={OperaLogo} alt='chrome-logo' />
                  <h1>Add to Opera</h1>
                  <p className='text-gray-500'>Minimum version 46</p>
                  <img src={Dots} alt='dots' />
                  <button className='shadow-md bg-blue-700 text-white p-4 rounded-lg font-medium'>
                    Add & Install Extension
                  </button>
                </div>
              </div>
              <div className='flex flex-col gap-6 pt-12'>
                <h1 className='font-bold text-3xl text-gray-900'>
                  Frequently Asked Questions
                </h1>
                <p className='text-lg text-gray-500'>
                  Here are some of our FAQs. If you have any other questions
                  you'd like answered please feel free to email us.
                </p>
                <div className='flex flex-col gap-4'>
                  <div className='flex items-center justify-between'>
                    <h1>What is Bookmark?</h1>
                    <img src={ArrowIcon} alt='arrow' />
                  </div>
                  <div className='bg-gray-400 w-full h-[0.05rem]' />
                  <div className='flex items-center justify-between'>
                    <h1>How can I request a new browser?</h1>
                    <img src={ArrowIcon} alt='arrow' />
                  </div>
                  <div className='bg-gray-400 w-full h-[0.05rem]' />
                  <div className='flex items-center justify-between'>
                    <h1>Is there a mobile app?</h1>
                    <img src={ArrowIcon} alt='arrow' />
                  </div>
                  <div className='bg-gray-400 w-full h-[0.05rem]' />
                  <div className='flex items-center justify-between'>
                    <h1>What about other Chromium browsers</h1>
                    <img src={ArrowIcon} alt='arrow' />
                  </div>
                  <div className='bg-gray-400 w-full h-[0.05rem]' />
                </div>
              </div>
              <button className='bg-blue-600 py-4 px-6 rounded-xl text-xl text-white shadow-md'>
                More Info
              </button>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center bg-blue-600 w-full p-12 text-white text-center'>
            <h1 className='text-2xl'>35,000+ ALREADY JOINED</h1>
            <p className='text-xl'>Stay up-to-date with what we're doing</p>
            <input
              className='w-full p-3 my-4 rounded-lg text-gray-900 outline-none'
              placeholder='Enter your email address'
            />
            <button className='w-full bg-red-500 p-3 rounded-lg'>
              Contact Us
            </button>
          </div>
          <footer className='py-10 flex flex-col gap-6 bg-gray-800 w-full text-white items-center justify-center uppercase text-xl'>
            <img src={Logo} alt='' className='fill-white text-white' />
            <a>Features</a>
            <a>Pricing</a>
            <a>Contact</a>
            <div className='flex  justify-center gap-10 items-center pt-4'>
              <img src={FacebookIcon} alt='' />
              <img src={TwitterIcon} alt='' />
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
