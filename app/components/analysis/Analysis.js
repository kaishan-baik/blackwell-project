import Image from 'next/image';

export default function Analysis() {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto justify-center items-center text-white my-10 mb-20 px-4">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-10 mb-5 text-center text-[#01f2f2]">
          Easy Analysis
        </h1>
        <p className="text-sm md:text-base text-[#f2df79] my-2 font-semibold mx-auto tracking-wider text-center mb-8">
          Instant clarity on the Masters' profile. Get a snapshot of their trade
          history, profitability, risk, and portfolio all in one place.
        </p>
      </div>

      {/* Mobile app showcase with floating cards */}
      <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] flex justify-center items-center">
        {/* Phone in the center */}
        <div className="absolute -z-30 transform translate-y-0 flex justify-center items-center">
          {/* Phone shadow */}
          <div className="absolute -bottom-6 inset-x-8 h-8 bg-black/20 blur-xl rounded-full"></div>

          <Image
            src="/images/mobile-2.png"
            alt="Blackwell Invest App"
            width={235}
            height={500}
            priority
            className="object-contain relative z-30"
          />
        </div>

        <div className="absolute z-20 w-full h-full">
          {/* Layer 1 (furthest back) */}
          <div className="absolute top-[5%] left-[55%] transform -translate-x-1/2 -translate-y-4 md:-translate-y-8 -ml-[150px] md:-ml-[180px] w-[180px] sm:w-[200px] md:w-[220px] transition-all duration-300 hover:scale-105">
            <Image
              src="/images/analysis/function-1.png"
              alt="Trade Statistics"
              width={250}
              height={150}
              priority
              className="rounded-lg "
            />
          </div>

          {/* Layer 2 */}
          <div className="absolute top-[18%] left-[48%] transform -translate-x-1/2 translate-y-4 md:translate-y-10 ml-[130px] md:ml-[160px] w-[180px] sm:w-[200px] md:w-[220px] transition-all duration-300 hover:scale-105">
            <Image
              src="/images/analysis/function-2.png"
              alt="Copy Feature"
              width={250}
              height={150}
              priority
              className="rounded-lg "
            />
          </div>

          {/* Layer 3 */}
          <div className="absolute top-[38%] left-[55%] transform -translate-x-1/2 -translate-y-4 -ml-[150px] md:-ml-[180px] w-[180px] sm:w-[200px] md:w-[220px] transition-all duration-300 hover:scale-105">
            <Image
              src="/images/analysis/function-3.png"
              alt="Performance Metrics"
              width={250}
              height={150}
              priority
              className="rounded-lg "
            />
          </div>

          {/* Layer 4 */}
          <div className="absolute bottom-[22%] left-[48%] transform -translate-x-1/2 translate-y-4 ml-[130px] md:ml-[160px] w-[180px] sm:w-[200px] md:w-[220px] transition-all duration-300 hover:scale-105">
            <Image
              src="/images/analysis/function-4.png"
              alt="Portfolio Allocation"
              width={250}
              height={150}
              priority
              className="rounded-lg "
            />
          </div>

          {/* Layer 5  */}
          <div className="absolute bottom-[5%] left-[55%] transform -translate-x-1/2 translate-y-4 md:translate-y-8 -ml-[150px] md:-ml-[180px] w-[180px] sm:w-[200px] md:w-[220px] transition-all duration-300 hover:scale-105">
            <Image
              src="/images/analysis/function-5.png"
              alt="Performance Chart"
              width={250}
              height={150}
              priority
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
