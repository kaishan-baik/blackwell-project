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
    <div className="w-full text-white py-10 px-4 translate-y-[10%] mb-10">
      {/* Main container - mobile is a stack, desktop is a row */}
      <div className="flex flex-col md:flex-row gap-5">
        {/* LEFT SIDE (on desktop): Phone image - appears second on mobile */}
        <div className="order-2 md:order-1 md:w-1/2 py-10 relative z-10">
          <div className="relative">
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

        {/* RIGHT SIDE (on desktop): Contains both Container 1 and Container 3 stacked */}
        <div className="order-1 md:order-2 md:w-1/2 flex flex-col">
          {/* CONTAINER 1: Title and Download buttons (appears first overall) */}
          <div className="order-1">
            {/* Main Heading */}
            <div className="mb-6 md:mb-4 flex flex-col items-center  ">
              <h1 className="text-[#01f2f2] text-6xl md:text-5xl font-thin leading-tight">
                COPY TRADING
              </h1>
              <p className="text-5xl md:text-3xl font-light italic">
                with Blackwell Invest
              </p>
            </div>

            {/* Download Buttons */}
            <div className="relative flex flex-wrap justify-center  items-center gap-4 mb-8 w-full">
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
                  ref={appStoreButtonRef}
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
                ref={stampContainerRef}
                className="absolute -z-0 right-[5%] top-[1%]"
              >
                <Image
                  src="/images/regular.png"
                  alt="Regulated"
                  width={100}
                  height={100}
                  className="object-contain w-[80px] h-[80px]"
                />
              </div>
            </div>
          </div>

          {/* CONTAINER 3: Trading content and Register button (appears third overall) */}
          <div className="order-3">
            {/* Trading Content */}
            <div className="my-6">
              <h2 className="text-[#01f2f2] text-2xl md:text-3xl font-semibold">
                Choose & Trade
              </h2>
              <h3 className="text-[#f2df79] italic text-3xl font-bold mb-1">
                Ready-To-Go Strategies
              </h3>
              <p className="text-sm max-w-lg font-normal">
                Browse and copy hundreds of investment strategies developed by
                master traders! Whether you are a pro or beginner, you can now
                trade quicker and more confidently.
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
      </div>
    </div>
  );
}
