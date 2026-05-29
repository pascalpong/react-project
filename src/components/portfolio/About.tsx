import { motion } from 'framer-motion';
import Marquee from './Marquee';

const ease = [0.16, 1, 0.3, 1] as const;
const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.12 as any }, transition: { duration: 0.9, ease } };

const STATEMENT_LINES = [
  <><span>I build the quiet</span></>,
  <><span>software that <em>keeps</em></span></>,
  <><span>businesses running.</span></>,
];

const SKILLS = ['PHP', 'Laravel', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Redux', 'MySQL', 'MongoDB', 'Firebase', 'Shopify', 'Typo3', 'WordPress', 'Docker', 'Git'];

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-idx">(02)</span>
          <h2>About</h2>
          <span className="label">Profile</span>
        </div>

        <div className="about-statement">
          {STATEMENT_LINES.map((line, i) => (
            <motion.span
              key={i}
              className="ln"
              style={{ display: 'block', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: i * 0.08, ease }}
            >
              {line}
            </motion.span>
          ))}
        </div>

        <div className="about-grid">
          <div className="about-main">
            <motion.p {...reveal}>
              Over the past few years I've built web apps and internal systems for teams in Thailand and abroad —
              booking tools, form and management platforms, e-commerce, dashboards and the CMMS systems that
              keep day-to-day operations moving.
            </motion.p>
            <motion.p {...reveal} transition={{ duration: 0.9, delay: 0.1, ease }}>
              I work across the stack: PHP &amp; Laravel on one side, JavaScript, React, Next.js and Node on the other.
              Before all that I spent two years as a part-time 3D visualizer — which is probably why I still
              care a lot about how things look and feel.
            </motion.p>
            <motion.p {...reveal} transition={{ duration: 0.9, delay: 0.2, ease }}>
              I studied at an international design school in Bangkok. I like clean code, fast pages, and
              building things people don't have to think about.
            </motion.p>
          </div>

          <aside className="about-side">
            <motion.div className="ab-block" {...reveal}>
              <div className="label">Education</div>
              <div className="v">Assumption University</div>
              <div className="v small">School of Architecture · Class of 2018 · Bangkok</div>
            </motion.div>
            <motion.div className="ab-block" {...reveal} transition={{ duration: 0.9, delay: 0.1, ease }}>
              <div className="label">Languages</div>
              <div className="v">English — IELTS 7.5</div>
              <div className="v small">Thai — Native</div>
            </motion.div>
            <motion.div className="ab-block" {...reveal} transition={{ duration: 0.9, delay: 0.2, ease }}>
              <div className="label">Focus</div>
              <div className="v small">Web Apps · CMS · CMMS · E-commerce · API Integration</div>
            </motion.div>
          </aside>
        </div>

        <div className="stats">
          {[
            { n: '5+', k: 'Years building' },
            { n: '6', k: 'Teams & clients' },
            { n: '2', k: 'Countries · TH / TW' },
          ].map((s, i) => (
            <motion.div key={s.k} className="stat" {...reveal} transition={{ duration: 0.9, delay: i * 0.08, ease }}>
              <div className="n">{s.n}</div>
              <div className="k label">{s.k}</div>
            </motion.div>
          ))}
        </div>

        <Marquee direction={-1} speed={0.45} className="skills">
          {SKILLS.map(s => <span key={s}>{s}</span>)}
        </Marquee>
      </div>
    </section>
  );
}
