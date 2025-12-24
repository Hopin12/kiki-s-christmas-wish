import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  top: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
}

const HeartParticles = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const items: Heart[] = [];
    const count = 12;

    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        left: Math.random() * 100,
        top: 20 + Math.random() * 60,
        animationDuration: 5 + Math.random() * 5,
        animationDelay: Math.random() * 8,
        size: 0.6 + Math.random() * 0.5,
      });
    }

    setHearts(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-particle"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.animationDelay}s`,
            fontSize: `${heart.size}rem`,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default HeartParticles;
