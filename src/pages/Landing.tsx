import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedText from '@/components/AnimatedText';
import Snowfall from '@/components/Snowfall';
import LightParticles from '@/components/LightParticles';
import PageTransition from '@/components/PageTransition';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden vignette">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/christmas-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      <Snowfall />
      <LightParticles />
      
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-romantic-red/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-champagne/10 rounded-full blur-[100px]" />
      </div>

      <PageTransition>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
          {/* Main title */}
          <div className="mb-8">
            <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-champagne mb-4 animate-gentle-float">
              <AnimatedText text="Merry Christmas" delay={500} letterDelay={100} />
            </h1>
            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="font-script text-5xl md:text-7xl lg:text-8xl text-romantic animate-heartbeat" style={{ animationDelay: '2s' }}>
                <AnimatedText text="Kiki" delay={2500} letterDelay={150} />
              </span>
              <span className="text-4xl md:text-6xl animate-pulse" style={{ animationDelay: '3.5s', opacity: 0, animation: 'fadeInSlow 1s ease-out 3.5s forwards' }}>
                ❤️
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p 
            className="font-serif text-xl md:text-2xl text-champagne/80 tracking-wide max-w-lg mx-auto mb-16 italic"
            style={{ opacity: 0, animation: 'fadeInUp 1.5s ease-out 4.5s forwards' }}
          >
            This little moment was made just for you.
          </p>

          {/* CTA Button */}
          <div style={{ opacity: 0, animation: 'fadeInUp 1.5s ease-out 5.5s forwards' }}>
            <Button
              variant="romantic"
              size="xl"
              onClick={() => navigate('/wishes')}
              className="group"
            >
              <span className="mr-2">Come Closer</span>
              <span className="text-xl group-hover:animate-sparkle">✨</span>
            </Button>
          </div>

          {/* Decorative elements */}
          <div 
            className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-8"
            style={{ opacity: 0, animation: 'fadeInSlow 2s ease-out 6s forwards' }}
          >
            <span className="text-champagne/30 text-2xl animate-gentle-float" style={{ animationDelay: '0s' }}>✦</span>
            <span className="text-champagne/40 text-xl animate-gentle-float" style={{ animationDelay: '0.5s' }}>❄</span>
            <span className="text-champagne/30 text-2xl animate-gentle-float" style={{ animationDelay: '1s' }}>✦</span>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Landing;
