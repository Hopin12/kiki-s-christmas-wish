import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  letterDelay?: number;
}

const AnimatedText = ({ text, className = '', delay = 0, letterDelay = 80 }: AnimatedTextProps) => {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (visibleLetters < text.length) {
      const timer = setTimeout(() => {
        setVisibleLetters(visibleLetters + 1);
      }, letterDelay);

      return () => clearTimeout(timer);
    }
  }, [visibleLetters, text.length, started, letterDelay]);

  return (
    <span className={className}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-300"
          style={{
            opacity: index < visibleLetters ? 1 : 0,
            transform: index < visibleLetters ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
