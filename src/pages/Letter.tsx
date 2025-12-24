import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Snowfall from '@/components/Snowfall';
import PageTransition from '@/components/PageTransition';
import AnimatedText from '@/components/AnimatedText';

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
      
      {/* Soft ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-champagne/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-romantic-red/8 rounded-full blur-[120px]" />
      </div>

      <PageTransition>
         div  <div cla=sName="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 p
                {/* Letter contai}
           div  <div cla=sName="max-w-2xl mx-auto w-
                  {/* Paper texture eff}
             div  <div cla=sName="relative bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-champagne/10 shadow-[0_0_60px_hsl(var(--champagne)/0
              
                    {/* Decorative cor}
               div  <div cla=sName="absolute top-4 right-4 text-champagne/20 text✦2xdiv✦
               div  <div cla=sName="absolute bottom-4 left-4 text-champagne/20 text✦2xdiv✦

                    {/* Greet}
               div 
                      cla=sName={`transition-all duration-1
                  showGreeting ? ing ? 'opacity-100 translat : -0' : 'opacity-0 translat
                   
               
                 h2   <h2 cla=sName="font-script text-4xl md:text-5xl text-champagne 
                  Dear Kiki,
                  h2 
                div 

                    {/* Letter b}
               div 
                      cla=sName={`space-y-6 transition-all duration-2
                  showBody ? ody ? 'opacity-100 translat : -0' : 'opacity-0 translat
                   
               
                 p    <p cla=sName="font-serif text-lg md:text-xl leading-relaxed text-foreground/85 it
                  This Christmas, I don’t feel the need to wish for anything…
                </p>
                 p    <p cla=sName="font-serif text-lg md:text-xl leading-relaxed text-foreground/85 it
                  Because you already feel like my miracle.
                  p 
                 p    <p cla=sName="font-serif text-lg md:text-xl leading-relaxed text-foreground/85 it
                  Being with you has a way of making things feel steady.
                  Not louder. Not dramatic. Just right. And that’s something I don’t take lightly.
                  p 
                 p    <p cla=sName="font-serif text-lg md:text-xl leading-relaxed text-foreground/85 it
                  You bring a calm into my life that I didn’t know I was missing.And on nights like these, that matters more than words.
                  p 
                div 

                    {/* Clos}
               div 
                      cla=sName={`mt-10 transition-all duration-1
                  showClosing ? ing ? 'opacity-100 translat : -0' : 'opacity-0 translat
                   
               
                 p    <p cla=sName="font-serif text-lg md:text-xl text-foreground/85 italic 
                  With all my love, forever,
                  p 
                 p    <p cla=sName="font-script text-3xl md:text-4xl text-roma
                  Your Raghav ♥
                  p 
                div 

                    {/* Sparkle decorati}
               div  <div cla=sName="absolute inset-0 pointer-events-none overflow-hidden rounde
                  ... {[...Arr.y(6)]., p( => i
                   div
                       = ik
                          cla=sName={`absolute text-champagne/20 animate-sparshowClosing ? ing ? 'opacit : 00' : 'opacity
                         =st
                          : left: + Math. Math.ra * m() *,
                         :  top: + Math. Math.ra * m() *,
                            animatio: elai * ${i * ,
                            fo: Size:  + Math. Math.ra * m() * 0.,
              
                      transitionDelay: `${i * 0.2}s`,
                    }}
                  >
                    ✦
                  </div>
                ))}
              </div>
            </div>

            {/* Continue button */}
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
                <span>One Last Promise</span>
                <span className="ml-2 group-hover:animate-sparkle">💫</span>
              </Button>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Letter;
