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
    <div className="flex flex-col w-full justify-center items-center text-white mb-10">
      {/* Fast Matching Title */}
      <div className="w-[80%]">
        <h1 className="text-5xl font-bold mb-5 text-center text-[#01f2f2]">
          Fast Matching
        </h1>
        <p className="text-[#f2df79] font-semibold mx-auto tracking-wider text-center mb-5">
          Zero in on your ideal Master effortlessly. Sort by performance and
          drawdown levels or discover opportunities from new signals with our
          smart filters. Still can’t decide? Simply head over to Spotlight for
          quality signals curated by us.
        </p>
      </div>

      {/* Content Container */}
      <div className="flex w-[80%] items-center gap-5">
        {/* Left side - Video */}
        <div className="flex-1 flex justify-end pr-5">
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

        {/* Right side - Feature list */}
        <div className="flex-1 flex flex-col justify-center ">
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
