function scrollTo(id: string) {
  const el = document.getElementById(id);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}

export default function TopBar() {
  return (
    <header className="topbar">
      <button className="brand" onClick={() => scrollTo('hero')}>
        <b>Pascal</b> Pongchinda
      </button>
      <nav className="tb-right">
        <button className="tb-nav" onClick={() => scrollTo('work')}>Work</button>
        <button className="tb-nav" onClick={() => scrollTo('about')}>About</button>
        <button className="tb-nav" onClick={() => scrollTo('contact')}>Contact</button>
        <span className="tb-status">
          <span className="pulse" />
          Available for work
        </span>
      </nav>
    </header>
  );
}
