'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className="w-full text-white  px-4 translate-y-[10%] mb-20">
      {/* Mobile layout - all containers stacked vertically in specific order */}
      <div className="md:hidden flex flex-col gap-1">
        {/* CONTAINER 1: Title container (first on mobile) */}
        <div className="py-5">
          {/* Main Heading with positioned stamp */}
          <div className="mb-6 flex flex-col items-center">
            <h1 className="text-[#01f2f2] text-5xl lg:text-6xl md:text-5xl font-thin leading-tight">
              COPY TRADING
            </h1>
            {/* Title and stamp wrapper with relative positioning */}
            <div className="relative inline-flex items-center">
              <p className="text-3xl lg:text-5xl md:text-4xl italic">
                with Blackwell Invest
              </p>
              {/* Stamp positioned absolutely within the relative container */}
              <div className="absolute -z-5 -right-20 -top-3">
                <Image
                  src="/images/regular.png"
                  alt="Regulated"
                  width={200}
                  height={200}
                  className="object-contain  w-[180px] h-[80px]"
                />
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-4 w-full">
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
        </div>

        {/* CONTAINER 2: Picture container (second on mobile) */}
        <div className="py-5 relative z-10">
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

        {/* CONTAINER 3: Content container (third on mobile) */}
        <div className=" text-right">
          {/* Trading Content */}
          <div className="mt-6">
            <h2 className="text-[#01f2f2] text-2xl font-semibold">
              Choose & Trade
            </h2>
            <h3 className="text-[#f2df79] italic text-3xl font-bold mb-1">
              Ready-To-Go Strategies
            </h3>
            <p className="text-[0.8rem] font-normal">
              Browse and copy hundreds of investment strategies developed by
              master traders! Whether you are a pro or beginner, you can now
              trade quicker and more confidently.
            </p>
          </div>

          {/* Trading Categories */}
          <div className="flex flex-wrap pt-2 justify-start gap-3 mb-4">
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
        </div>

        {/* CONTAINER 4: Register container (fourth on mobile) */}
        <div className="my-5 text-right ">
          <div className="flex flex-col items-end  ">
            <button className="bg-[#ff7043] hover:bg-[#ff5722] text-white font-semibold py-2 px-4 rounded-xl text-md transition-all hover:-translate-y-1 cursor-pointer -translate-y-5 sm:-translate-y-0 md:-translate-y-0 lg:-translate-y-0 ">
              Register Now
            </button>
            <p className="text-sm italic opacity-80 lg:mt-4 -translate-y-5">
              When you invest, your capital is at risk. Be prudent.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop layout - grid with picture on left, other containers stacked on right */}
      <div className="hidden md:grid md:grid-cols-2 py-10 gap-5">
        {/* CONTAINER 1: Picture container (left on desktop) */}
        <div className="py-10 relative z-10">
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

        {/* Right side containers (stacked on right side) */}
        <div className="flex flex-col">
          {/* CONTAINER 2: Title container (first on both views) */}
          <div className="mb-8">
            {/* Main Heading */}
            <div className="mb-6 md:mb-4 flex flex-col items-center">
              <h1 className="text-[#01f2f2] text-6xl md:text-5xl font-thin leading-tight">
                COPY TRADING
              </h1>
              {/* Title and stamp wrapper with relative positioning */}
              <div className="relative inline-flex items-center">
                <p className="text-5xl md:text-3xl font-light italic">
                  with Blackwell Invest
                </p>
                {/* Stamp positioned absolutely within the relative container */}
                <div className="absolute -right-24 -top-4">
                  <Image
                    src="/images/regular.png"
                    alt="Regulated"
                    width={100}
                    height={100}
                    className="object-contain w-[100px] h-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-4 w-full">
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
          </div>

          {/* CONTAINER 3: Content container (third on mobile) */}
          <div className="order-3 mb-8 text-left md:text-left sm:text-right">
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
            <div className="flex flex-wrap sm:justify-start gap-3 ">
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
          </div>

          {/* CONTAINER 4: Register container (fourth on mobile) */}
          <div className="order-4 text-left  md:text-left sm:text-right">
            {/* Register Button */}
            <div className="sm:flex sm:flex-col sm:items-start">
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
