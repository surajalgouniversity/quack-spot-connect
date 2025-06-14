
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-07-21T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Launch Countdown
        </h2>
        <p className="text-xl mb-12 opacity-90">
          Get ready to connect with your community like never before
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl md:text-6xl font-bold mb-2">{timeLeft.days}</div>
            <div className="text-sm md:text-lg uppercase tracking-wider opacity-80">Days</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl md:text-6xl font-bold mb-2">{timeLeft.hours}</div>
            <div className="text-sm md:text-lg uppercase tracking-wider opacity-80">Hours</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl md:text-6xl font-bold mb-2">{timeLeft.minutes}</div>
            <div className="text-sm md:text-lg uppercase tracking-wider opacity-80">Minutes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl md:text-6xl font-bold mb-2">{timeLeft.seconds}</div>
            <div className="text-sm md:text-lg uppercase tracking-wider opacity-80">Seconds</div>
          </div>
        </div>
        
        <div className="mt-12">
          <p className="text-lg mb-6">Monday, July 21st, 2025</p>
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
            <span className="text-2xl mr-3">🎉</span>
            <span className="font-medium">Be the first to experience Quackspot</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
