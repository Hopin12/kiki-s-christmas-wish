import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicToggle = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/christmas-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    // Autoplay music
    audioRef.current.play().catch(() => {
      // If autoplay fails (browser policy), set muted state
      setIsMuted(true);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-6 right-6 z-[100] p-3 rounded-full bg-muted/50 backdrop-blur-sm border border-romantic-red/30 text-champagne hover:bg-muted transition-all duration-300 hover:scale-110 glow-romantic"
      aria-label={isMuted ? 'Play music' : 'Mute music'}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5" />
      ) : (
        <Volume2 className="w-5 h-5 animate-pulse" />
      )}
    </button>
  );
};

export default MusicToggle;
