import Image from 'next/image';
import Analysis from './components/analysis/Analysis';
import Matching from './components/fast-matching/Matching';
import Landing from './components/landing/Landing';
import TradeSteps from './components/trade-steps/TradeSteps';
import Carousel from './components/slideshow/Carousel';
import Reasons from './components/reasons/Reasons';
import Navigate from './components/navigation/Navigate';

export default function Home() {
  return (
    <div className="w-[90vw] min-h-screen flex flex-col items-center justify-center shadow-xl mx-auto">
      <Landing />
      <Matching />
      <Analysis />
      <div className="flex w-full h-full z-0 translate-y-3 relative">
        <Image
          src="/images/bg-1.png"
          alt="background-image1"
          fill
          priority
          className="object-cover"
        />
      </div>
      <TradeSteps />
      <Carousel />
      <Reasons />
      <Navigate />
    </div>
  );
}
