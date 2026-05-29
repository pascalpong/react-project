import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  { idx: '01', title: 'YVY', tags: 'E-commerce · Next.js · Shopify · Typo3', year: '2024 ↗', img: '/imgs/projects/yvy.png', url: 'https://yvy.ch/shop/' },
  { idx: '02', title: 'Photo Studio AI', tags: 'Web App · Auth · Next.js · Firebase', year: '2024 ↗', img: '/imgs/projects/photostudio.png', url: 'https://studio.photostudioai.app/' },
  { idx: '03', title: 'Bualuang Venture', tags: 'Editorial · Headless CMS', year: '2023 ↗', img: '/imgs/projects/bualuang.png', url: 'https://www.bualuangventures.com/' },
  { idx: '04', title: 'Good Tech Thailand', tags: 'Sales & Invoicing CMMS · PHP · Laravel', year: '2022', img: '/imgs/projects/goodtech.png' },
  { idx: '05', title: 'Central Pattana', tags: 'Form & Review Management · PHP · Laravel', year: '2022', img: '/imgs/projects/centralpattana.png' },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Work() {
  const hoverImgRef = useRef<HTMLDivElement>(null);
  const hoverImgEl = useRef<HTMLImageElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const imgPos = useRef({ x: 0, y: 0 });
  const hoveringRef = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { posRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', onMove, { passive: true });

    let rafId: number;
    const loop = () => {
      imgPos.current.x += (posRef.current.x - imgPos.current.x) * 0.12;
      imgPos.current.y += (posRef.current.y - imgPos.current.y) * 0.12;
      if (hoverImgRef.current) {
        const scale = hoveringRef.current ? 1 : 0.9;
        hoverImgRef.current.style.transform =
          `translate(${imgPos.current.x}px,${imgPos.current.y}px) translate(-50%,-50%) scale(${scale})`;
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleEnter = (img: string) => {
    if (hoverImgEl.current) hoverImgEl.current.src = img;
    hoverImgRef.current?.classList.add('show');
    hoveringRef.current = true;
  };

  const handleLeave = () => {
    hoverImgRef.current?.classList.remove('show');
    hoveringRef.current = false;
  };

  const handleClick = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener');
  };

  return (
    <section id="work">
      {/* floating hover preview */}
      <div className="hoverimg" ref={hoverImgRef} aria-hidden="true">
        <img ref={hoverImgEl} alt="" />
      </div>

      <div className="wrap">
        <div className="sec-head">
          <span className="sec-idx">(01)</span>
          <h2>Selected Work</h2>
          <span className="label">2020 — 2026</span>
        </div>

        <div className="work-list">
          {PROJECTS.map((p) => (
            <motion.article
              key={p.idx}
              className="work-row"
              data-has-img={p.img ? '' : undefined}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.12 }}
              transition={{ duration: 0.9, ease }}
              onMouseEnter={() => handleEnter(p.img)}
              onMouseLeave={handleLeave}
              onClick={() => handleClick(p.url)}
            >
              <span className="wr-idx">{p.idx}</span>
              <h3 className="wr-title">{p.title}</h3>
              <div className="wr-meta">
                <span className="wr-tags">{p.tags}</span>
                <span className="wr-year">{p.year}</span>
              </div>
              <div className="work-thumb">
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
