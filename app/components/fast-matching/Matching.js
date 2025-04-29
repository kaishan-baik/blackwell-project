import React from 'react';
import Image from 'next/image';

const Matching = () => {
  const features = [
    'Spotlight',
    'Top Strategies',
    'Low Drawdown',
    'Medium Drawdown',
    'High Drawdown',
    'New Strategies',
  ];

  return (
    <div className="flex flex-col w-full justify-center items-center text-white my-10">
      {/* Fast Matching Title */}
      <div className="w-full md:w-[80%] mx-auto px-4 md:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5 text-center text-[#01f2f2] mt-6 sm:mt-10">
          Fast Matching
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#f2df79] font-semibold mx-auto tracking-tight md:tracking-wider text-center mb-4 md:mb-5 leading-relaxed">
          Zero in on your ideal Master effortlessly. Sort by performance and
          drawdown levels or discover opportunities from new signals with our
          smart filters. Still can't decide? Simply head over to Spotlight for
          quality signals curated by us.
        </p>
      </div>

      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:justify-end order-1 md:pr-5">
          <video
            className="object-contain w-72 max-w-md rounded-2xl shadow-lg"
            controls
            autoPlay
            loop
            muted
            width="300"
            height="200"
          >
            <source src="/videos/mobile-video.mov" type="video/quicktime" />
            <source src="/videos/mobile-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Feature list - Will be below in mobile, on right in desktop */}
        <div className="flex flex-col justify-center order-2 sm:mt-10 sm:items-center">
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-xl">
                <Image
                  src="/images/list-icon.png"
                  alt=""
                  width={100}
                  height={20}
                />
                <span className="-translate-y-2 ml-3">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Matching;
