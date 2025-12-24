import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  top: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
}

const LightParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items: Particle[] = [];
    const count = 20;

    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDuration: 4 + Math.random() * 6,
        animationDelay: Math.random() * 5,
        size: 3 + Math.random() * 4,
      });
    }

    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="light-particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.animationDuration}s`,
            animationDelay: `${particle.animationDelay}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default LightParticles;
