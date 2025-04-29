import Image from 'next/image';
import RegisterNow from '../buttons/RegisterNow';

export default function Reasons() {
  const reasonsArray = [
    {
      name: 'Regulated',
      icon: '/images/choose/icon-1.png',
      desc: 'The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance because your trust and peace of mind are everything.',
    },
    {
      name: '0 Commissions',
      icon: '/images/choose/icon-2.png',
      desc: 'When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app.',
    },
    {
      name: 'User friendly',
      icon: '/images/choose/icon-3.png',
      desc: 'With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!',
    },
    {
      name: 'Tier 1 liquidity',
      icon: '/images/choose/icon-4.png',
      desc: 'Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing.',
    },
  ];

  return (
    <div className="relative w-full mb-20 pb-10">
      <div className="absolute inset-0 w-full h-full z-0 ">
        <Image
          src="/images/bg-2.png"
          alt="background-image1"
          fill
          priority
          className="object-cover  -translate-y-[30%] md:-translate-y-[10%] "
        />
      </div>
      <div className="container mx-auto relative z-10 mt-10 px-4 sm:px-6 md:translate-y-[150px] mb-10">
        <div className="container mx-auto relative flex items-center justify-center z-10 my-20 translate-y-10 ">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-10 mb-5 text-center text-[#01f2f2]">
              Why Choose Us?
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-7xl space-y-3 md:space-y-4">
          {reasonsArray.map((obj, index) => (
            <div
              key={index}
              className="bg-white rounded-lg py-3 px-3 md:px-4 flex flex-col md:flex-row items-start md:items-center shadow-lg"
            >
              <div className="flex items-center w-full md:w-auto mb-2 md:mb-0">
                <div className="flex-shrink-0 mr-3 md:w-20 lg:w-24 md:ml-5">
                  <Image
                    src={obj.icon}
                    alt={obj.name}
                    width={80}
                    height={50}
                    className="w-12 h-12 md:w-16 md:h-16"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#040dbf]">
                  {obj.name}
                </h3>
              </div>
              <div className="md:ml-4 lg:ml-6 w-full md:w-3/5">
                <p className="text-sm md:text-base text-gray-700 font-medium md:font-semibold">
                  {obj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <RegisterNow />
        </div>
      </div>
    </div>
  );
}
