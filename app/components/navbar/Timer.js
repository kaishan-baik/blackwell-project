'use client';
import { useState, useEffect } from 'react';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 27,
    hours: 23,
    minutes: 45,
    seconds: 7,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        // Simple countdown logic
        const newSeconds = prev.seconds - 1;

        if (newSeconds >= 0) {
          return { ...prev, seconds: newSeconds };
        }

        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prev, minutes: newMinutes, seconds: 59 };
        }

        const newHours = prev.hours - 1;
        if (newHours >= 0) {
          return { ...prev, hours: newHours, minutes: 59, seconds: 59 };
        }

        const newDays = prev.days - 1;
        if (newDays >= 0) {
          return {
            ...prev,
            days: newDays,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }

        // If countdown finished
        clearInterval(timer);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden md:flex items-center justify-center space-x-20">
      {/* Promotion text */}
      <div className="flex items-cente text-center text-sm font-medium w-10">
        <span>PROMOTION ENDS IN</span>
      </div>

      {/* Timer container */}
      <div className="flex items-start space-x-2 font-extralight">
        {/* days */}
        <div className="flex flex-col items-center">
          {/* Numbers row */}
          <div className="flex items-center">
            <span className="text-2xl font-thin">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
          </div>
          {/* Label row */}
          <span className="text-xs mt-1.5">Days</span>
        </div>

        {/* Colon aligned with numbers */}
        <div className="flex flex-col items-center">
          <span className="text-2xl font-thin mt-0 pt-0">:</span>
          <span className="text-xs invisible">.</span>
        </div>

        {/* hours */}
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <span className="text-2xl font-thin">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs mt-1.5">Hours</span>
        </div>

        {/* Colon aligned with numbers */}
        <div className="flex flex-col items-center">
          <span className="text-2xl font-thin">:</span>
          <span className="text-xs invisible">.</span>
        </div>

        {/* minutes */}
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <span className="text-2xl font-thin">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs mt-1.5">Minutes</span>
        </div>

        {/* Colon aligned with numbers */}
        <div className="flex flex-col items-center">
          <span className="text-2xl font-thin">:</span>
          <span className="text-xs invisible">.</span>
        </div>

        {/* seconds */}
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <span className="text-2xl font-thin">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs mt-1.5">Seconds</span>
        </div>
      </div>
    </div>
  );
}
