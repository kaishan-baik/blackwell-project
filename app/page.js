import Image from 'next/image';
import Analysis from './components/analysis/Analysis';
import Matching from './components/fast-matching/Matching';
import Landing from './components/landing/Landing';
import TradeSteps from './components/trade-steps/TradeSteps';
import Carousel from './components/slideshow/Carousel';
import Reasons from './components/reasons/Reasons';

export default function Home() {
  return (
    <div className="w-[90vw] min-h-screen flex flex-col items-center justify-center shadow-xl mx-auto">
      <Landing />
      <Matching />
      <Analysis />
      <TradeSteps />
      <Carousel />
      <Reasons />
    </div>
  );
}
