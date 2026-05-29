import { useEffect, useRef } from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 1 | -1;
  speed?: number;
  className?: string;
}

export default function Marquee({ children, direction = 1, speed = 0.5, className = '' }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const track = trackRef.current;
    if (!track || reduce) return;

    let x = 0;
    let w = track.scrollWidth / 2;
    let rafId: number;

    const step = () => {
      x -= speed * direction;
      if (direction > 0 && -x >= w) x += w;
      if (direction < 0 && x >= 0) x -= w;
      track.style.transform = `translateX(${x}px)`;
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);

    const onResize = () => { w = track.scrollWidth / 2; };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, [direction, speed]);

  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div className="track" ref={trackRef}>
        {children}
        {children}
      </div>
    </div>
  );
}
