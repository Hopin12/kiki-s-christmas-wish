import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Snowfall from '@/components/Snowfall';
import PageTransition from '@/components/PageTransition';

const Letter = () => {
  const navigate = useNavigate();

  const [showGreeting, setShowGreeting] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showClosing, setShowClosing] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowGreeting(true), 1000),
      setTimeout(() => setShowBody(true), 3000),
      setTimeout(() => setShowClosing(true), 8000),
      setTimeout(() => setShowButton(true), 11000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative min-h-screen romantic-gradient">
      <Snowfall />

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-champagne/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-romantic-red/8 rounded-full blur-[120px]" />
      </div>

      <PageTransition>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="max-w-2xl w-full">
            <div className="relative bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-champagne/10 shadow-[0_0_60px_hsl(var(--champagne)/0.15)]">

              {/* Decorations */}
              <div className="absolute top-4 right-4 text-champagne/20 text-2xl">✦</div>
              <div className="absolute bottom-4 left-4 text-champagne/20 text-2xl">✦</div>

              {/* Greeting */}
              <div
                className={`transition-all duration-1000 ${
                  showGreeting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <h2 className="font-script text-4xl md:text-5xl text-champagne mb-8">
                  Dear Kiki,
                </h2>
              </div>

              {/* Body */}
              <div
                className={`space-y-6 transition-all duration-2000 ${
                  showBody ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/85">
                  This Christmas, I don’t feel the need to wish for anything…
                </p>

                <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/85">
                  Because you already feel like my miracle.
                </p>

                <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/85">
                  Being with you has a way of making things feel steady.
                  Not louder. Not dramatic. Just right.
                </p>

                <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/85">
                  You bring a calm into my life that I didn’t know I was missing.
                  And on nights like these, that matters more than words.
                </p>
              </div>

              {/* Closing */}
              <div
                className={`mt-10 transition-all duration-1500 ${
                  showClosing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="font-serif text-lg md:text-xl text-foreground/85 italic">
                  With all my love, forever,
                </p>
                <p className="font-script text-3xl md:text-4xl text-romantic-red mt-2">
                  Your Raghav ♥
                </p>
              </div>

              {/* Sparkles */}
              {showClosing &&
                [...Array(6)].map((_, i) => (
                  <span
                    key={i}
                    className="absolute text-champagne/20 animate-sparkle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    ✦
                  </span>
                ))}
            </div>

            {/* Button */}
            <div
              className={`flex justify-center mt-12 transition-all duration-1500 ${
                showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Button
                variant="gold"
                size="lg"
                onClick={() => navigate('/promise')}
                className="group"
              >
                One Last Promise <span className="ml-2">💫</span>
              </Button>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Letter;
