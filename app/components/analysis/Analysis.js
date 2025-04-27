import Image from 'next/image';

export default function Analysis() {
  return (
    <div className="flex flex-col w-[70%] justify-center items-center text-white my-10">
      <h1 className="text-5xl font-bold mt-10 mb-5 text-center text-cyan-400">
        Easy Analysis
      </h1>
      <p className="text-[#f2df79] my-2 font-semibold mx-auto tracking-wider text-center mb-2">
        Instant clarity on the Master's profile. Get a snapshot of their trade
        history, profitability, risk, and portfolio all in one place.
      </p>
      {/* image container */}
      <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] flex justify-center items-center my-6 ">
        {/* background image */}
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <div className="relative">
            {/* Phone shadow effect */}
            <div className="absolute -bottom-6 inset-x-8 h-10 bg-black/20 blur-xl rounded-full"></div>

            <Image
              src="/images/mobile-2.png"
              alt="Blackwell Invest App"
              width={235}
              height={500}
              priority
              className="object-contain relative z-10"
            />
          </div>
        </div>

        {/* foreground images - left side */}
        <div className="absolute z-20 w-full h-full">
          {/* Top left card */}
          <div className="absolute -top-[4%] left-[22%] transform w-[300px] md:w-[250px]">
            <Image
              src="/images/analysis/function-1.png"
              alt="Function 1"
              width={235}
              height={150}
              priority
              className="rounded-sm"
            />
          </div>

          {/* Middle left card */}
          <div className="absolute top-[34%] left-[22%] transform w-[300px] md:w-[250px]">
            <Image
              src="/images/analysis/function-3.png"
              alt="Function 3"
              width={235}
              height={150}
              priority
              className="rounded-sm "
            />
          </div>

          {/* Bottom left card */}
          <div className="absolute -bottom-[5%] left-[22%] transform w-[300px] md:w-[250px]">
            <Image
              src="/images/analysis/function-5.png"
              alt="Function 5"
              width={235}
              height={150}
              priority
              className="rounded-sm "
            />
          </div>

          {/* Top right card */}
          <div className="absolute top-[17%] right-[21%] transform w-[220px] md:w-[250px]">
            <Image
              src="/images/analysis/function-2.png"
              alt="Function 2"
              width={235}
              height={150}
              priority
              className="rounded-sm "
            />
          </div>

          {/* Bottom right card */}
          <div className="absolute bottom-[16%] right-[21%] transform w-[240px] md:w-[250px]">
            <Image
              src="/images/analysis/function-4.png"
              alt="Function 4"
              width={235}
              height={150}
              priority
              className="rounded-sm "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
