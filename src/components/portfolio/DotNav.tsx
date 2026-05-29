import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'Index' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Career' },
  { id: 'private', label: 'Vault' },
  { id: 'contact', label: 'Contact' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}

export default function DotNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const ios: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => { entries.forEach(e => { if (e.isIntersecting) setActive(id); }); },
        { threshold: 0.4, rootMargin: '-25% 0px -25% 0px' }
      );
      io.observe(el);
      ios.push(io);
    });
    return () => ios.forEach(io => io.disconnect());
  }, []);

  return (
    <nav className="dotnav" aria-label="Section navigation">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          className={active === id ? 'active' : ''}
          onClick={() => scrollTo(id)}
        >
          <span className="dn-label">{label}</span>
          <span className="dn-dot" />
        </button>
      ))}
    </nav>
  );
}
