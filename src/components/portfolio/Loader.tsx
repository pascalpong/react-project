import { useEffect, useState } from 'react';

interface LoaderProps {
  onDone: () => void;
}

export default function Loader({ onDone }: LoaderProps) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('pp_seen');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (seen || reduce) {
      setGone(true);
      onDone();
      return;
    }

    document.body.classList.add('no-scroll');
    let n = 0;

    const tick = () => {
      n += Math.max(1, Math.round((100 - n) / 9));
      if (n >= 100) {
        n = 100;
        setCount(100);
        setTimeout(() => {
          setLeaving(true);
          document.body.classList.remove('no-scroll');
          sessionStorage.setItem('pp_seen', '1');
          setTimeout(() => { setGone(true); onDone(); }, 1000);
        }, 360);
        return;
      }
      setCount(n);
      setTimeout(tick, 70 + Math.random() * 60);
    };

    setTimeout(tick, 260);

    return () => { document.body.classList.remove('no-scroll'); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (gone) return null;

  return (
    <div id="loader" className={leaving ? 'done' : ''} aria-hidden="true">
      <div className="ld-count">{String(count).padStart(2, '0')}</div>
      <div className="ld-meta">
        <div className="label">Pascal Pongchinda</div>
        <div className="label">Full-Stack Developer</div>
        <div className="label" style={{ marginTop: 8, color: 'var(--fg)' }}>Portfolio — 2026</div>
      </div>
    </div>
  );
}
