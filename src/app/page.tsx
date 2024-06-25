'use client'; 

import Image from "next/image";
import Link from "next/link";
import Button from "../app/Components/Button";
import Divider from "../app/Components/Divider";
import Collapse from "../app/Components/Collapse";
import { RightOutlined } from '@ant-design/icons';

export default function Home() {
  return (
    <main className="font-sans leading-tight">
      <section className="relative bg-fixed">
        <div className="absolute inset-0 bg-cover-Image opacity-35 z-0"></div>
        <header className="relative flex justify-between px-8 py-4 md:px-48 md:py-8 z-10">
          <Image
            src="/logo.png"
            width={100}
            height={150}
            alt="Netflix Logo"
            className="w-16 md:w-48"
          />
           <button className="bg-red-600 w-20 h-10 text-sm rounded-md">
            {<Link href="/login">Sign In</Link>}
           </button>          
        </header>

        <div className="p-8 relative content-center h-128 text-center z-10">
          <h1 className="text-3xl md:text-4xl">Unlimited movies, TV shows, and more</h1>
          <p className="text-xl my-3 md:text-3xl md:my-6">Watch anywhere. Cancel anytime.</p>
          <p className="md:text-xl">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="get-started">
            {/* <Input 
              type="email"
              text="Email Address"
            /> */}
            <input type="email" placeholder="Email Address"></input>
            <Button 
              width="180px" 
              height="60px" 
              text="Get Started" 
              icon={RightOutlined} />
          </div>
        </div>
      </section>

      <Divider />

      <section className="p-4 mt-36 h-110">
        <div className="flex flex-col items-center gap-y-10 md:flex-row md:justify-center md:gap-x-24">
          <div className="text-center md:text-start md:gap-8">
            <h1 className="text-3xl md:text-5xl">Enjoy on your TV</h1>
            <p className="md:text-xl md:w-98 mt-4">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
          <div className="relative w-[460px] h-[400px] fixed">
            <Image
              src="/pngwing.png"
              layout="fill"
              objectFit="contain"
              alt="TV frame"
            />
            <video
              className="absolute top-16 left-5 fixed"
              width="400"
              height="280"
              autoPlay
              
              controls
              preload="auto"
            >
              <source src="/Frame1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        </div>
      </section>

      <Divider />

      <section className="p-4 mt-20 h-110">
        <div className="flex flex-col-reverse items-center gap-y-10 md:flex-row md:justify-center md:gap-x-24">
          <div className="content-center">
          <Image 
              src={"/popcorn.png"}
              width={480}
              height={400}
              alt="Kid Image"
            />
          </div>
          <div className="text-center md:text-start gap-8 max-w-2xl">
            <h1 className="text-3xl md:text-5xl">Download your shows to watch offline</h1>
            <p className="md:text-xl md:w-98 mt-4">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="p-4 mb-12 h-72 content-center md:h-98">
        <div className="text-center md:text-start md:px-72 md:py-12 md:max-w-sm">
          <h1 className="text-3xl md:text-5xl">Watch everywhere</h1>
          <p className="md:text-xl md:w-98 mt-4 md:max-w-72">
            Stream unlimited movies and TV shows on your phone,
            tablet, laptop, and TV.
          </p>
        </div>
      </section>

      <Divider />

      <section className="p-4 mt-24 h-110">
        <div className="flex flex-col-reverse items-center gap-y-10 md:flex-row md:justify-center md:gap-x-24">
          <div>
            <Image 
              src={"/Kids.png"}
              width={560}
              height={480}
              alt="Kid Image"
            />
          </div>
          <div className="text-center md:text-start max-w-2xl">
            <h1 className="text-3xl md:text-5xl">Create profiles for kids</h1>
            <p className="md:text-xl md:w-98 mt-4">
              Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section>
        <div className="p-4 flex flex-col gap-y-10 md:flex-col md:justify-center md:gap-x-24">
          <div className="m-12 h-full">
            <h1 className="text-2xl md:text-5xl text-center">Frequently Asked Questions</h1>
          </div>

          <Collapse />

          <div>
            <p className="text-xl text-center">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="flex-row md:flex justify-center md:gap-x-2 h-10 my-16">
              {/* <Input type="email" text="    Email Address" /> */}
              <input  type="email" placeholder="Email Address"></input>
              <Button width="180px" height="45px" text="Get Started" />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section>
        <div className="p-24 gap-x-36 text-zinc-400 text-md underline ">
        <Link href="/dashboard">Questions? Contact us.</Link>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
            <Link href="/dashboard">FAQ</Link>
            <Link href="/dashboard">Help Center</Link>
            <Link href="/dashboard">Account</Link>
            <Link href="/dashboard">Media Center</Link>
            <Link href="/dashboard">Investor Relations</Link>
            <Link href="/dashboard">Jobs</Link>
            <Link href="/dashboard">Ways to Watch</Link>
            <Link href="/dashboard">Terms of Use</Link>
            <Link href="/dashboard">Privacy</Link>
            <Link href="/dashboard">Cookie Preferences</Link>
            <Link href="/dashboard">Corporate Information</Link>
            <Link href="/dashboard">Contact Us</Link>
            <Link href="/dashboard">Speed Test</Link>
            <Link href="/dashboard">Legal Notices</Link>
            <Link href="/dashboard">Only on Netflix</Link>
           
          </div>
        </div>
      </section>
    </main>
  );
}
