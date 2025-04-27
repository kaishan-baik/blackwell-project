import Image from 'next/image';
import Link from 'next/link';

export default function TradeSteps() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/bg-1.png"
          alt="background-image1"
          fill
          priority
          className="object-cover "
          style={{ objectPosition: '50% 15%' }}
        />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10 ">
        <div className="text-center mb-12">
          <h1 className="text-4xl  font-bold text-[#01f2f2]">
            Trade Like a Pro in Minutes
          </h1>
        </div>

        {/* Content container */}
        <div className="flex flex-col md:flex-row justify-between gap-3 max-w-6xl mx-auto">
          {/* Left container - Steps */}
          <div className="flex-1 space-y-6 ">
            {/* Step 1 */}
            <div className="  rounded-2xl p-5 flex items-center border border-gray-300 shadow-lg">
              <div className="text-4xl font-bold text-white mr-6">1</div>
              <div className="text-white font-semibold text-sm tracking-wide ml-10">
                Install our app, "Blackwell Invest"
              </div>
            </div>

            {/* Step 2 */}
            <div className="  rounded-2xl p-5 flex items-center border border-[#F37406] shadow-lg">
              <div className="text-4xl font-bold text-[#F37406] mr-6">2</div>
              <div className="text-cyan-300 font-semibold text-sm tracking-wide ml-10">
                Choose a signal Master and click "Copy"
              </div>
            </div>

            {/* Step 3 */}
            <div className="  rounded-2xl p-5 flex items-center border border-gray-300 shadow-lg">
              <div className="text-4xl font-bold text-white mr-6">3</div>
              <div className="text-white font-semibold text-sm tracking-wide ml-10">
                Set your trade size preferences
              </div>
            </div>

            {/* Step 4 */}
            <div className="  rounded-2xl p-5 flex items-center border border-[#F37406] shadow-lg">
              <div className="text-4xl font-bold text-[#F37406] mr-6">4</div>
              <div className="text-white font-semibold text-sm tracking-wide ml-10">
                Click "Agree and Copy"
              </div>
            </div>
          </div>

          {/* Right container - Phone mockup */}
          <div className="flex-1 flex rounded-2xl justify-center items-center border border-orange-400">
            <Image
              src="/images/guide/guide-2.png"
              alt="background-image1"
              width={300}
              height={200}
              className="object-cover object-center"
            />
          </div>
        </div>
        {/* Download Buttons */}
        <div className="relative flex flex-wrap justify-center items-center gap-4 my-4 w-full">
          {/* Store buttons with flex layout that will wrap on small screens */}
          <div className="flex flex-wrap items-center gap-4 z-10">
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
              id="app-store-button" // Add ID to reference this element
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
      </div>
    </div>
  );
}
