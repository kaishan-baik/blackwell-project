'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const stepsArray = [
    {
      name: 'step-1',
      src: '/images/register/step-1.png',
      text: 'Download the Blackwell Invest app',
    },
    {
      name: 'step-2',
      src: '/images/register/step-2.png',
      text: 'Login to your account',
    },
    {
      name: 'step-3',
      src: '/images/register/step-3.png',
      text: 'Click on the "Account" icon to navigate to the Account page',
    },
    {
      name: 'step-4',
      src: '/images/register/step-4.png',
      text: 'Link an account to the Blackwell Invest app',
    },
    {
      name: 'step-5',
      src: '/images/register/step-5.png',
      text: 'Select "BlackwellGlobalAsia-Live" server',
    },
    {
      name: 'step-6',
      src: '/images/register/step-6.png',
      text: 'Fill in your Blackwell Global trading account OR create a new account',
    },
    {
      name: 'step-7',
      src: '/images/register/step-7.png',
      text: 'Click "Copy Trades"',
    },
    {
      name: 'step-8',
      src: '/images/register/step-8.png',
      text: 'Click "Done"',
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      Math.min(prevSlide + 1, stepsArray.length - 3)
    );
  };

  const getVisibleSlides = () => {
    // Showing 3 slides at a time on desktop
    const visibleCount = 3;
    const visibleSlides = [];

    // Don't go beyond array bounds
    const endIndex = Math.min(currentSlide + visibleCount, stepsArray.length);

    for (let i = currentSlide; i < endIndex; i++) {
      visibleSlides.push({
        ...stepsArray[i],
        index: i,
      });
    }

    return visibleSlides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className="w-full max-w-6xl h-[90vh] mx-auto p-8 flex flex-col items-center my-5 ">
      <h1 className="text-4xl text-cyan-300 font-bold mb-12 text-center">
        How to Link MT4 Account
      </h1>

      <div className="relative w-full flex items-center justify-center mb-8">
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2  rounded-full w-10 h-10 flex justify-center items-center cursor-pointer z-10 shadow-md"
          onClick={prevSlide}
        >
          <Image
            src="/images/arrow.png"
            alt="Previous"
            width={50}
            height={50}
          />
        </button>

        <div className="flex w-full justify-center items-stretch gap-0 overflow-hidden">
          {visibleSlides.map((slide, index) => (
            <div
              key={slide.name}
              className="flex flex-col items-center justify-start flex-1  relative"
            >
              <div className="flex flex-col rounded-2xl pt-10 px-8 pb-2 w-[330px] h-[420px] justify-start border border-orange-500  ">
                <Image
                  src={slide.src}
                  alt={slide.name}
                  width={500}
                  height={100}
                  className="max-w-full h-auto object-contain scale-125"
                />
                <p className="text-white text-center font-semibold mt-4 text-base px-2">
                  {slide.text}
                </p>
              </div>

              {/* Show arrow between slides, except after the last visible slide */}
              {index < visibleSlides.length - 1 && (
                <div className="absolute -right-10 top-1/2 -translate-y-1/2 z-5  bg-[#3a53ba]">
                  <Image
                    src="/images/arrow.png"
                    alt="arrow"
                    width={80}
                    height={80}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2  rounded-full w-10 h-10 flex justify-center items-center cursor-pointer z-10 shadow-md"
          onClick={nextSlide}
        >
          <Image
            src="/images/arrow.png"
            alt="Previous"
            width={50}
            height={50}
          />
        </button>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-orange-500 text-white font-thin tracking-wider border-none rounded px-4 py-2 text-md cursor-pointer transition-colors hover:bg-orange-600">
          Register Now
        </button>
      </div>
    </div>
  );
}
