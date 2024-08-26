import React from 'react';
import { SignedOut, SignInButton } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className='bg-[url("./bg.jpg")] bg-cover bg-no-repeat w-full h-screen flex items-center justify-center'>
      <div className='bg-[url("./wood-pluck.jpg")] bg-cover bg-no-repeat w-full text-center text-white p-4 rounded-3xl flex items-center justify-center m-4 shadow-md'>
        <SignedOut>
          <SignInButton className='uppercase  text-6xl shadow-slate-500 [text-shadow:_0_4px_8px_rgb(0_0_0_/_100%)]' />
        </SignedOut>
      </div>
    </div>
  );
};

export default Login;
