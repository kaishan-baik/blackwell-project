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
    <div className="relative w-full mb-20 ">
      <div className="absolute inset-0 w-full h-full z-0 ">
        <Image
          src="/images/bg-2.png"
          alt="background-image1"
          fill
          priority
          className="object-cover -translate-y-[120px] "
        />
      </div>
      <div className="container mx-auto relative z-10 mt-10 translate-y-[150px] mb-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#01f2f2]">
          Why Choose Us?
        </h2>

        <div className=" mx-10 space-y-4">
          {reasonsArray.map((obj, index) => (
            <div
              key={index}
              className="bg-white rounded-lg py-1 px-4 flex items-center shadow-lg"
            >
              <div className="flex-shrink-0 w-1/5 ml-5">
                <Image src={obj.icon} alt={obj.name} width={80} height={50} />
              </div>
              <div className="flex w-1/5 -ml-4">
                <h3 className="text-xl font-bold text-[#040dbf]">{obj.name}</h3>
              </div>
              <div className="flex font-semibold w-3/5">
                <p className="text-sm">{obj.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <RegisterNow />
      </div>
    </div>
  );
}
