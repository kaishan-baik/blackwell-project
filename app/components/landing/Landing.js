'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Landing() {
  const appStoreButtonRef = useRef(null);
  const stampContainerRef = useRef(null);

  // Update stamp position when window resizes
  useEffect(() => {
    const updateStampPosition = () => {
      if (appStoreButtonRef.current && stampContainerRef.current) {
        const buttonRect = appStoreButtonRef.current.getBoundingClientRect();
        console.log('buttonRect >>', buttonRect);

        // Position the stamp just to the right of the App Store button
        stampContainerRef.current.style.left = `${buttonRect.right - 20}px`;
        stampContainerRef.current.style.top = `${buttonRect.top - 20}px`;
      }
    };

    // Initial positioning
    updateStampPosition();

    // Add event listener for window resize
    window.addEventListener('resize', updateStampPosition);

    // Clean up
    return () => {
      window.removeEventListener('resize', updateStampPosition);
    };
  }, []);

  return (
    <div className="flex items-start w-full text-white pt-10 -mb-10">
      <div className="w-full relative py-10">
        {/* Phone image */}
        <div className="relative z-10 flex ">
          <Image
            src="/images/hand.png"
            alt="Blackwell Invest App"
            width={800}
            height={1000}
            priority
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <div className="w-full flex flex-col  my-20 mx-auto  px-2">
        {/* Main Heading */}
        <div className="mb-6 md:mb-4 flex flex-col items-center">
          <h1 className="text-[#01f2f2] text-7xl md:text-6xl font-thin leading-tight">
            COPY TRADING
          </h1>
          <p className="text-5xl md:text-4xl font-light italic ">
            with Blackwell Invest
          </p>
        </div>

        {/* Download Buttons */}
        <div className="relative flex flex-wrap justify-center items-center gap-4 mb-8 w-full">
          {/* Store buttons with flex layout that will wrap on small screens */}
          <div className="flex flex-wrap items-center gap-4 z-10">
            <Link
              href="#"
              className="transition-transform hover:-translate-y-1"
            >
              <Image
                src="/images/google-play.jpg"
                alt="Get it on Google Play"
                width={100}
                height={50}
                className="rounded-lg"
              />
            </Link>
            <Link
              href="#"
              className="transition-transform hover:-translate-y-1"
              id="app-store-button" // Add ID to reference this element
            >
              <Image
                src="/images/app-store.jpg"
                alt="Download on App Store"
                width={100}
                height={50}
                className="rounded-lg"
              />
            </Link>
          </div>

          {/* Regulated Stamp with responsive positioning */}
          <div
            className="absolute -z-0 left-[180px] -top-2
                  sm:left-[200px] 
                  md:left-[300px] md:-top-3
                  lg:left-[560px] lg:-top-4"
          >
            <Image
              src="/images/regular.png"
              alt="Regulated"
              width={100}
              height={100}
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
            />
          </div>
        </div>

        {/* Trading Content */}
        <div className="my-6">
          <h2 className="text-[#01f2f2] text-2xl md:text-3xl font-semibold ">
            Choose & Trade
          </h2>
          <h3 className="text-[#f2df79] italic text-3xl font-bold mb-1">
            Ready-To-Go Strategies
          </h3>
          <p className="text-sm max-w-lg font-semibold">
            Browse and copy hundreds of investment strategies developed by
            master traders! Whether you are a pro or beginner, you can now trade
            quicker and more confidently.
          </p>
        </div>

        {/* Trading Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="text-white border border-gray-500 border-opacity-40 rounded-xl py-1 px-2 font-semibold text-sm hover:bg-opacity-30 transition-colors">
            Forex
          </button>
          <button className="text-white border border-[#F37406] border-opacity-40 rounded-xl py-1 px-2 font-semibold text-sm hover:bg-opacity-30 transition-colors">
            Precious Metals
          </button>
          <button className="text-white border border-red-500 border-opacity-40 rounded-xl py-1 px-2 font-semibold text-sm hover:bg-opacity-30 transition-colors">
            Oil
          </button>
          <button className="text-white border border-[#01f2f2] border-opacity-40 rounded-xl py-1 px-2 font-semibold text-sm hover:bg-opacity-30 transition-colors">
            Indices
          </button>
        </div>

        {/* Register Button */}
        <div>
          <button className="bg-[#ff7043] hover:bg-[#ff5722] text-white font-semibold py-2 px-4 rounded-xl text-md transition-all hover:-translate-y-1 cursor-pointer">
            Register Now
          </button>
          <p className="text-sm italic opacity-80 mt-4">
            When you invest, your capital is at risk. Be prudent.
          </p>
        </div>
      </div>
    </div>
  );
}
