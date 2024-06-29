'use client';

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Checkbox from '../Components/Checkbox';

function Login() {
  return (
    <>
      <main className='bg-black text-white'>
        <div className="absolute inset-0 md:bg-cover-Image bg-center h-135 opacity-35 bg-fixed"></div>
        <Image
            src="/logo.png"
            width={100}
            height={150}
            alt="Netflix Logo"
            className="relative my-2 md:mx-48 w-48" />
        <div className="relative p-12 bg-black bg-opacity-70 rounded-lg z-10 h-130 w-97 m-auto">
          <h1 className="login-title text-white text-3xl tracking-wider mb-6">Sign In</h1>
          <form className="login-form space-y-4">
            
                <div className='mb-6'>
                <Input 
                type="email" 
                placeholder="Email or mobile number"
                className="w-full"
                />
                </div>

                <div  className='mb-6'>
                <Input 
                type="password" 
                placeholder="Password"
                className="w-full"
                />
                </div>

                <div className='mb-2'>
                  <Link href="/">
                    <Button radius="full" className="bg-red-600 w-full">
                    Sign In
                    </Button>
                  </Link>
                </div>
                <p className='text-center mb-1'>OR</p>
                <div className='mb-6'>
                <Button radius="full" className="bg-zinc-700 w-full">
                Use a Sign-In code
                </Button>
                </div>

            <div className="flex space-x-2">
                <Checkbox />
                <p>Remeber Me</p>
            </div>
            <div className="flex text-md space-x-2">
                <p className="text-zinc-400">New to Netflix?</p> <a href="#" className="text-white">Sign up now.</a>
            </div>
            <p className='text-sm text-zinc-700'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          </form>
        </div>

        <div className='relative h-48 mt-24 p-24 bg-gradient-to-b from-black text-16 text-zinc-400 underline'>
            <Link
              href='/Dashboard'>Questions? Contact us.</Link>
            <div className='text-sm md:text-16 grid grid-cols-2 md:grid-cols-4 gap-2 mt-3'>
                <Link href='/Dashboard'>FAQ</Link>
                <Link href='/Dashboard'>Help Center</Link>
                <Link href='/Dashboard'>Terms of Use</Link>
                <Link href='/Dashboard'>Privacy</Link>
                <Link href='/Dashboard'>Cookie Preferences</Link>
                <Link href='/Dashboard'>Corporate Information</Link>
            </div>
        </div>
      </main>
    </>
  )
}

export default Login
