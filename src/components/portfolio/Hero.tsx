import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Marquee from './Marquee';

interface HeroProps {
  started: boolean;
}

export default function Hero({ started }: HeroProps) {
  const [clkTh, setClkTh] = useState('--:--');
  const [clkTw, setClkTw] = useState('--:--');
  const bgWordRef = useRef<HTMLDivElement>(null);

  const fmt = (tz: string) =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz }).format(new Date());

  useEffect(() => {
    const upd = () => { setClkTh(fmt('Asia/Bangkok')); setClkTw(fmt('Asia/Taipei')); };
    upd();
    const id = setInterval(upd, 20000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const bg = bgWordRef.current;
    if (!bg) return;
    const onScroll = () => {
      bg.style.transform = `translate(-50%,-50%) translateY(${window.scrollY * 0.18}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="hero">
      <div className="hero-bgword" ref={bgWordRef} aria-hidden="true">FULLSTACK</div>

      <div className="hero-top wrap" style={{ paddingTop: 0 }}>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={started ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.35, ease }}
        >
          I'm a full-stack developer building web apps, CMS and CMMS systems — the kind of tools teams actually run their work on.
        </motion.p>
        <motion.div
          className="ht-right"
          initial={{ y: 20, opacity: 0 }}
          animate={started ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.43, ease }}
        >
          <div className="label">Based between</div>
          <div className="label" style={{ color: 'var(--fg)' }}>Bangkok <span>{clkTh}</span></div>
          <div className="label" style={{ color: 'var(--fg)' }}>Taipei <span>{clkTw}</span></div>
        </motion.div>
      </div>

      <div className="wrap">
        <div className="hero-name">
          {['Pascal', 'Pongchinda'].map((word, i) => (
            <span key={word} className="ln">
              <motion.span
                style={{ display: 'block' }}
                initial={{ y: 40, opacity: 0 }}
                animate={started ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.05, delay: 0.05 + i * 0.09, ease }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </div>

        <div className="hero-foot">
          <motion.div
            className="scrollcue"
            initial={{ y: 20, opacity: 0 }}
            animate={started ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.51, ease }}
          >
            <span className="arrow" />
            <span className="label">Scroll to explore</span>
          </motion.div>
          <motion.div
            className="label"
            initial={{ y: 20, opacity: 0 }}
            animate={started ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.59, ease }}
          >
            Full-Stack Developer — Est. 2020
          </motion.div>
        </div>
      </div>

      <Marquee direction={1} speed={0.6}>
        <span>Web Apps</span><span className="star">✳</span>
        <span className="dim">CMS</span><span className="star">✳</span>
        <span>CMMS</span><span className="star">✳</span>
        <span className="dim">Next.js</span><span className="star">✳</span>
        <span>Laravel</span><span className="star">✳</span>
        <span className="dim">React</span><span className="star">✳</span>
        <span>APIs</span><span className="star">✳</span>
        <span className="dim">TypeScript</span><span className="star">✳</span>
      </Marquee>
    </section>
  );
}
