'use client';
import Image from 'next/image';
import { useState } from 'react';
import Downloads from '../buttons/Download';

export default function Navigate() {
  const [activeTab, setActiveTab] = useState(1);

  const navArr = [
    {
      id: 1,
      title: 'Discover',
      desc: 'Explore all the investment Masters available on Blackwell Invest. Dive into their profiles and analyse their profitability at a glance.',
      imageContent: '/images/reason/reason-1.png',
      iconActive: '/images/navigate/icon1-blue.png',
      icon: '/images/navigate/icon1.png',
    },
    {
      id: 2,
      title: 'Activity',
      desc: 'See the past trades made by the signals you are copying from the last 30 days or track their open positions. Monitor their strategy, and make informed decisions with timely updates of the trades shaping your portfolio.',
      imageContent: '/images/reason/reason-2.png',
      iconActive: '/images/navigate/icon2-blue.png',
      icon: '/images/navigate/icon2.png',
    },
    {
      id: 3,
      title: 'Trade',
      desc: 'Seamlessly trade oil CFDs, indices, and currency pairs with ease.',
      imageContent: '/images/reason/reason-3.png',
      iconActive: '/images/navigate/icon3-blue.png',
      icon: '/images/navigate/icon3.png',
    },
    {
      id: 4,
      title: 'Positions',
      desc: 'Easily track the status of all your trades and monitor your account metrics in real-time.',
      imageContent: '/images/reason/reason-4.png',
      iconActive: '/images/navigate/icon4-blue.png',
      icon: '/images/navigate/icon4.png',
    },
    {
      id: 5,
      title: 'Account',
      desc: 'Access detailed information about your trading account, monitor copier drawdown levels, assess your profitability, and keep track of your  trade performance – all in one place!',
      imageContent: '/images/reason/reason-5.png',
      iconActive: '/images/navigate/icon5-blue.png',
      icon: '/images/navigate/icon5.png',
    },
  ];
  return (
    <div className="flex flex-col  ">
      <div>
        <h1 className="text-4xl font-bold mt-10 mb-5 text-center text-[#01f2f2]">
          Navigate Our App in 5 Clicks
        </h1>
      </div>
      <div className="w-[80%] ">
        {/* Top Navigation */}
        <div className="w-[80%]">
          {/* Tab Navigation Buttons */}
          <div className="flex">
            {navArr.map((item) => (
              <div className="flex bg-white rounded-l-xl rounded-b-none rounded-r-xl rounded-t-xl overflow-hidden">
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center justify-center  cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-[#f2df79]'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  <div className="text-orange-500 w-22 h-14 relative">
                    <Image
                      src={activeTab === item.id ? item.iconActive : item.icon}
                      alt={item.title}
                      fill
                      // sizes="24px"
                      className="object-contain"
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-[#f2df79] px-5 pt-8  flex-1 w-[80vw] rounded-r-2xl rounded-b-2xl rounded-t-2xl rounded-l-none">
          {navArr.map((item) => (
            <div
              key={item.id}
              className={`${
                activeTab === item.id ? 'block' : 'hidden'
              } flex justify-center items-center p-4`}
            >
              <div className="w-[70%]">
                <h2 className="text-2xl font-bold text-[#040dbf] mb-6">
                  {item.title}
                </h2>
                <p className="text-gray-800 mb-8">{item.desc}</p>
              </div>

              {/* Default content for other tabs */}
              {activeTab === item.id ? (
                <div className="w-[50%] relative ">
                  <Image
                    src={item.imageContent}
                    alt={item.title}
                    width={400}
                    height={100}
                    className="object-cover "
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>

      <Downloads />
    </div>
  );
}
