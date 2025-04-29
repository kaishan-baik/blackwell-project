'use client';
import Image from 'next/image';
import { useState } from 'react';
import Downloads from '../buttons/Download';

export default function TradeSteps() {
  const [activeTab, setActiveTab] = useState(1);
  const tabData = [
    {
      id: 1,
      desc: 'Install our app, “Blackwell Invest”',
      image: '/images/guide/guide-1.png',
    },
    {
      id: 2,
      desc: 'Choose a signal Master and click “Copy”',
      image: '/images/guide/guide-2.png',
    },
    {
      id: 3,
      desc: 'Set your trade size preferences',
      image: '/images/guide/guide-3.png',
    },
    {
      id: 4,
      desc: 'Click “Agree and Copy”',
      image: '/images/guide/guide-4.png',
    },
  ];

  return (
    <div className="relative w-full mb-20">
      <div className="absolute inset-0 w-full h-full -z-2 ">
        <Image
          src="/images/bg-1.png"
          alt="background-image1"
          fill
          priority
          className="object-cover -translate-y-[120px] "
        />
      </div>
      {/* title */}
      <div className=" my-10">
        <div className="container mx-auto relative flex items-center justify-center z-10 my-20 translate-y-10 ">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-10 mb-5 text-center text-[#01f2f2]">
              Trade Like a Pro in Minutes
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  mx-auto max-w-6xl gap-0">
          {/* Left side - Tabs */}
          <div className="flex flex-col w-full md:w-1/2 gap-4">
            {tabData.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center p-6 cursor-pointer transition-all duration-300 mr-2
              ${
                activeTab === tab.id
                  ? 'rounded-l-2xl border-l-2 border-t-2 border-b-2 border-[#F37406] border-r-0 z-10 bg-[#3A53BA] ml-2 scale-x-104'
                  : tab.id % 2
                  ? 'rounded-2xl border border-[#F37406]  '
                  : 'rounded-2xl border border-gray-300  '
              }`}
              >
                {/* Number */}
                <span
                  className={`text-5xl italic font-thin mr-6 
                ${tab.id % 2 ? 'text-white' : 'text-[#F37406]'}`}
                >
                  {tab.id}
                </span>

                {/* Text */}
                <span
                  className={`text-lg ${
                    activeTab === tab.id
                      ? 'text-[#01f2f2] font-semibold'
                      : 'text-white'
                  }`}
                >
                  {tab.desc}
                </span>

                {/* Right connector for active tab */}
                {activeTab === tab.id && (
                  <div className="absolute right-0 top-0 bottom-0 w-2  translate-x-full z-20"></div>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Content */}
          <div
            className={`w-full md:w-1/2 border-2 border-[#F37406] p-6 flex items-center justify-center h-full md:h-auto md:self-stretch
          ${
            activeTab === 1
              ? 'rounded-tr-2xl rounded-br-2xl rounded-bl-2xl'
              : ''
          }
          ${
            activeTab === tabData.length
              ? 'rounded-tr-2xl rounded-br-2xl rounded-tl-2xl'
              : ''
          }
          ${
            activeTab !== 1 && activeTab !== tabData.length
              ? 'rounded-tr-2xl rounded-br-2xl'
              : ''
          }
        `}
          >
            <Image
              src={
                tabData.find((tab) => tab.id === activeTab)?.image ||
                '/images/guide/guide-1.png'
              }
              alt={`Step ${activeTab} - ${
                tabData.find((tab) => tab.id === activeTab)?.desc
              }`}
              width={300}
              height={300}
              priority
              className="object-contain relative z-10"
            />
          </div>
        </div>
      </div>
      <Downloads />
    </div>
  );
}
