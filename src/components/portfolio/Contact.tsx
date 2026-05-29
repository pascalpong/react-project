import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const BIG_LINES = ['Let\'s make', 'something.'];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}

function copyEmail() {
  navigator.clipboard?.writeText('pongchindap@gmail.com').catch(() => {});
}

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-idx">(05)</span>
          <h2>Contact</h2>
          <span className="label">Let's build</span>
        </div>

        <div className="contact-big" aria-label="Let's make something.">
          {BIG_LINES.map((line, i) => (
            <motion.span
              key={line}
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

        <div className="contact-mail">
          <motion.a
            className="mail"
            href="mailto:pongchindap@gmail.com"
            onClick={e => { e.preventDefault(); copyEmail(); }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
            title="Click to copy"
          >
            pongchindap@gmail.com
          </motion.a>
          <span className="label">(click to copy)</span>
        </div>

        <div className="contact-cols">
          <div className="col">
            <div className="label">Email</div>
            <a href="mailto:pongchindap@gmail.com">pongchindap@gmail.com</a>
          </div>
          <div className="col">
            <div className="label">WhatsApp / Call</div>
            <a href="https://wa.me/66909892510" target="_blank" rel="noopener noreferrer">TH +66 90 989 2510</a>
            <a href="https://wa.me/886972307540" target="_blank" rel="noopener noreferrer">TW +886 972 307 540</a>
          </div>
          <div className="col">
            <div className="label">Documents</div>
            <a href="https://drive.google.com/file/d/10KX5sxC3ifiPkR_Kt6EPS50Z-T9Ae_mt/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Download CV ↗</a>
            <button onClick={() => scrollTo('work')} style={{ display: 'block', textAlign: 'left', fontSize: '14.5px', color: 'var(--fg-dim)', padding: '5px 0', transition: 'color 0.3s, transform 0.3s' }}>View Work ↗</button>
          </div>
          <div className="col">
            <div className="label">Status</div>
            <div className="v">
              <span className="tb-status mono" style={{ color: 'var(--fg)' }}>
                <span className="pulse" />
                Available for work
              </span>
            </div>
            <div className="v" style={{ color: 'var(--muted)' }}>Bangkok ⇄ Taipei</div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="label">© {year} Pascal Pongchinda</span>
          <span className="label">Full-Stack Developer · Web Apps · CMS · CMMS</span>
          <button className="label footer-back" style={{ color: 'var(--fg)' }} onClick={() => scrollTo('hero')}>Back to top ↑</button>
        </div>
      </div>
    </section>
  );
}
