import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Snowfall from '@/components/Snowfall';
import HeartParticles from '@/components/HeartParticles';
import PageTransition from '@/components/PageTransition';

const wishes = [
  {
    text: "Kiki, the way you came into my life was quiet — but it changed more than you realize.",
    emphasis: "gently",
  },
  {
    text: "This Christmas doesn’t feel ordinary anymore.",
    emphasis: "warmer",
  },
  {
    text: "Moments like this make me understand what love is supposed to feel like.",
    emphasis: "love",
  },
  {
    text: "You matter to me more than you know.",
    emphasis: "favorite gift",
  },
  {
    text: "Some nights make you think of one person. Tonight, it’s you.",
    emphasis: "your name",
  },
];

const Wishes = () => {
  const navigate = useNavigate();
  const [visibleWishes, setVisibleWishes] = useState<number[]>([]);
  const wishRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    wishRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  setVisibleWishes((prev) => 
                    prev.includes(index) ? prev : [...prev, index]
                  );
                }, 300);
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const renderWishText = (text: string, emphasis: string, isVisible: boolean) => {
    const parts = text.split(emphasis);
    return (
      <span className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {parts[0]}
        <span className="text-romantic font-semibold">{emphasis}</span>
        {parts[1]}
      </span>
    );
  };

  return (
    <div className="relative min-h-screen romantic-gradient">
      <Snowfall />
      <HeartParticles />
      
      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-romantic-red/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-champagne/8 rounded-full blur-[80px]" />
      </div>

      <PageTransition>
        <div className="relative z-10 min-h-screen">
          {/* Header */}
          <div className="fixed top-0 left-0 right-0 z-20 py-6 text-center bg-gradient-to-b from-background via-background/80 to-transparent">
            <h2 className="font-script text-3xl md:text-4xl text-champagne">
              Words From the Heart
            </h2>
          </div>

          {/* Wishes */}
          <div className="pt-32 pb-40 px-6 max-w-3xl mx-auto space-y-32 md:space-y-48">
            {wishes.map((wish, index) => (
              <div
                key={index}
                ref={(el) => (wishRefs.current[index] = el)}
                className={`transition-all duration-1500 ease-out ${
                  visibleWishes.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  {/* Decorative quote marks */}
                  <span 
                    className="absolute -top-8 -left-4 text-6xl text-champagne/20 font-serif"
                    style={{ lineHeight: 1 }}
                  >
                    "
                  </span>
                  
                  <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground/90 text-center italic">
                    {renderWishText(wish.text, wish.emphasis, visibleWishes.includes(index))}
                  </p>
                  
                  <span 
                    className="absolute -bottom-4 -right-4 text-6xl text-champagne/20 font-serif"
                    style={{ lineHeight: 1 }}
                  >
                    "
                  </span>
                </div>

                {/* Decorative line */}
                <div className={`flex justify-center mt-8 transition-all duration-1000 delay-500 ${
                  visibleWishes.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent to-champagne/40" />
                    <span className="text-champagne/60 text-sm">❤</span>
                    <div className="w-16 h-px bg-gradient-to-l from-transparent to-champagne/40" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Continue button */}
          <div className="fixed bottom-8 left-0 right-0 z-20 flex justify-center">
            <div className="bg-gradient-to-t from-background via-background/90 to-transparent pt-12 pb-4 px-6">
              <Button
                variant="gold"
                size="lg"
                onClick={() => navigate('/magic')}
                className="group"
              >
                <span>Feel the Magic</span>
                <span className="ml-2 group-hover:animate-sparkle">✨</span>
              </Button>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Wishes;￼Enter
