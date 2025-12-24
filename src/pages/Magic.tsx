import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Snowfall from '@/components/Snowfall';
import LightParticles from '@/components/LightParticles';
import PageTransition from '@/components/PageTransition';

const Magic = () => {
  const navigate = useNavigate();
  const [textVisible, setTextVisible] = useState(false);
  const [secondTextVisible, setSecondTextVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setTextVisible(true), 2000);
    const timer2 = setTimeout(() => setSecondTextVisible(true), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Snowfall />
      <LightParticles />
      
      {/* Animated background */}
      <div className="absolute inset-0 animate-zoom-slow">
        <div className="absolute inset-0 bg-gradient-to-br from-romantic-red-deep/30 via-background to-romantic-red-deep/20" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-romantic-red/15 rounded-full blur-[80px] animate-gentle-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-champagne/10 rounded-full blur-[100px] animate-gentle-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-romantic-red/8 rounded-full blur-[150px]" />
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.7)_70%,hsl(var(--background))_100%)]" />

      <PageTransition>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
          {/* Main text */}
          <div className="max-w-2xl mx-auto space-y-12">
            <h2 
              className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed text-foreground/90 transition-all duration-2000 ${
                textVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
              }`}
            >
              Some moments don't need words.
            </h2>

            <p 
              className={`font-serif text-xl md:text-2xl text-champagne/80 italic transition-all duration-2000 ${
                secondTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              They simply need to be felt… like this one.
            </p>

            {/* Decorative elements */}
            <div 
              className={`flex justify-center gap-6 transition-all duration-1500 ${
                secondTextVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              <span className="text-champagne/40 text-2xl animate-sparkle" style={{ animationDelay: '0s' }}>✦</span>
              <span className="text-romantic/50 text-xl animate-heartbeat">♥</span>
              <span className="text-champagne/40 text-2xl animate-sparkle" style={{ animationDelay: '0.5s' }}>✦</span>
            </div>
          </div>

          {/* Continue button */}
          <div 
            className={`mt-20 transition-all duration-1500 ${
              secondTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '2s' }}
          >
            <Button
              variant="romantic"
              size="xl"
              onClick={() => navigate('/letter')}
              className="group"
            >
              <span>Read My Letter</span>
              <span className="ml-2 text-lg group-hover:animate-heartbeat">💌</span>
            </Button>
          </div>

          {/* Ambient sparkles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-champagne/30 animate-sparkle"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`,
                  animationDelay: `${i * 0.5}s`,
                  fontSize: `${0.5 + Math.random() * 0.5}rem`,
                }}
              >
                ✦
              </div>
            ))}
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Magic;
