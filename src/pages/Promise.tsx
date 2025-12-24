import { useEffect, useState } from 'react';
import Snowfall from '@/components/Snowfall';
import PageTransition from '@/components/PageTransition';

const Promise = () => {
  const [showText, setShowText] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowText(true), 1500),
      setTimeout(() => setShowHeart(true), 4000),
      setTimeout(() => setFadeOut(true), 10000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className={`relative min-h-screen bg-background transition-all duration-[5000ms] ${fadeOut ? 'opacity-70' : 'opacity-100'}`}>
      <div className={`transition-opacity duration-[4000ms] ${fadeOut ? 'opacity-30' : 'opacity-100'}`}>
        <Snowfall />
      </div>
      
      {/* Very subtle ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-romantic-red/10 rounded-full blur-[150px] transition-all duration-[4000ms] ${fadeOut ? 'opacity-30 scale-75' : 'opacity-100'}`} />
      </div>

      <PageTransition>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
          {/* Final message */}
          <div className="max-w-xl mx-auto space-y-8">
            <h1 
              className={`font-script text-5xl md:text-6xl lg:text-7xl text-champagne transition-all duration-2000 ${
                showText ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
              }`}
            >
              Merry Christmas,
            </h1>
            
            <h2 
              className={`font-script text-5xl md:text-6xl lg:text-7xl text-romantic transition-all duration-2000 ${
                showText ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              Kiki.
            </h2>

            <p 
              className={`font-serif text-2xl md:text-3xl text-champagne/80 italic pt-4 transition-all duration-2000 ${
                showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1.5s' }}
            >
              Always.
            </p>

            {/* Animated heart */}
            <div 
              className={`pt-8 transition-all duration-2000 ${
                showHeart ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              <span className="text-5xl md:text-6xl text-romantic animate-heartbeat inline-block">
                ❤️
              </span>
            </div>
          </div>

          {/* Fade out effect - gentle dimming */}
          <div 
            className={`fixed inset-0 bg-background/50 pointer-events-none transition-opacity duration-[5000ms] ${
              fadeOut ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Bottom decorative elements */}
          <div 
            className={`absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-8 transition-all duration-2000 ${
              showHeart ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            <span className="text-champagne/20 text-xl animate-gentle-float" style={{ animationDelay: '0s' }}>❄</span>
            <span className="text-champagne/30 text-lg animate-gentle-float" style={{ animationDelay: '0.5s' }}>✦</span>
            <span className="text-champagne/20 text-xl animate-gentle-float" style={{ animationDelay: '1s' }}>❄</span>
          </div>

          {/* Restart hint */}
          <button
            onClick={() => window.location.href = '/'}
            className={`absolute bottom-6 left-1/2 -translate-x-1/2 font-serif text-sm text-muted-foreground/40 hover:text-champagne/60 transition-all duration-500 ${
              showHeart ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '3s' }}
          >
            ✦ Relive this moment ✦
          </button>
        </div>
      </PageTransition>
    </div>
  );
};

export default Promise;
