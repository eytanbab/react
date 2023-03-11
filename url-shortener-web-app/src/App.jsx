import { useState, useEffect } from 'react';
import './App.css';
import Logo from './assets/logo.svg';
import WomanImg from './assets/illustration-working.svg';
function App() {
  const [url, setUrl] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [shortenUrl, setShortenUrl] = useState('');
  const api = `https://api.shrtco.de/v2/shorten?url=${url}`;
  // console.log(api);
  const apiHandler = async () => {
    try {
      const response = await fetch(api).then((data) => data.json());
      console.log(response);
      if (response.ok) {
        setShortenUrl(response);
      } else {
        console.log('hello');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='bg-desktop w-screen px-96'>
      <nav className='font-bold text-gray-400 py-16  flex gap-12 items-center  w-full'>
        <img src={Logo} className='' />
        <button>Features</button>
        <button>Pricing</button>
        <button>Resources</button>
        <div className='flex gap-12 w-full items-center justify-end'>
          <button>Login</button>
          <button className='p-2 w-24 bg-cyan-400 rounded-3xl text-white'>
            Sign Up
          </button>
        </div>
      </nav>

      <main className='flex flex-col'>
        <section className='flex py-24 justify-between'>
          <div className='flex flex-col gap-6 w-[36rem]'>
            <h1 className='text-7xl font-bold text-gray-800  '>
              More than just shorter links
            </h1>
            <p className='text-2xl text-gray-400'>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className=' font-bold p-2 w-28 bg-cyan-400 rounded-3xl text-white'>
              Get Started
            </button>
          </div>
          <img src={WomanImg} />
        </section>

        <section className='flex w-full items-center rounded-lg justify-center h-36 bg-red-500'>
          <form className='flex gap-6 grow px-12'>
            <input
              type='text'
              className='flex px-4 rounded-lg flex-grow'
              placeholder='Shorten a link here...'
            />
            <input
              className=' font-bold p-2 w-28 bg-cyan-400 rounded-lg text-white'
              type='submit'
              value='Shorten It!'
            ></input>
          </form>
        </section>
      </main>
      {/* <button onClick={() => apiHandler(url)}>Click me</button>
      <h1 className='text-5xl text-black'>{shortenUrl.result?.code}</h1> */}
    </div>
  );
}

export default App;
