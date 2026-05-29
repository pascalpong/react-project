import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckSerial, CreateTimeLog } from '../../utilities/generalFunctions';

const ease = [0.16, 1, 0.3, 1] as const;

const LOCKED = [
  'British Club Bangkok — Booking System',
  'CPN — Internal Management Tools',
  'Best Pick — Master Data Platform',
];

export default function Vault() {
  const [code, setCode] = useState('');
  const [msg, setMsg] = useState("Don't have one? Ask me — I'll send a code over.");
  const [msgClass, setMsgClass] = useState('lock-msg');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = code.trim();
    if (!v) {
      setMsg('Enter the access code you were given.');
      setMsgClass('lock-msg err');
      return;
    }
    setMsg('Verifying…');
    setMsgClass('lock-msg');

    const result = await CheckSerial(v);
    if (result) {
      CreateTimeLog(v);
      localStorage.setItem('access', JSON.stringify({ data: { authenticated: true }, serial: v }));
      setMsg('Access granted — loading private work…');
      setMsgClass('lock-msg ok');
      setTimeout(() => navigate('/projects'), 800);
    } else {
      setMsg("Code not recognised — request access via email and I'll send one over.");
      setMsgClass('lock-msg err');
    }
  };

  return (
    <section id="private">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-idx">(04)</span>
          <h2>The Vault</h2>
          <span className="label">Private / NDA</span>
        </div>

        <motion.div
          className="vault"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="lock-copy">
            <h3>Some work<br />stays behind<br />the curtain.</h3>
            <p>
              A few client projects are under NDA — internal CMMS tools, booking systems and dashboards for bigger names.
              Got a code? Drop it in to unlock the full case studies and private GitHub.
            </p>
            <div className="locked-list">
              {LOCKED.map(item => (
                <div key={item} className="li">
                  <span className="dotlock" />
                  {item} &nbsp;·&nbsp; LOCKED
                </div>
              ))}
            </div>
          </div>

          <form className="lock-form" onSubmit={handleSubmit}>
            <div className="label">Enter access code</div>
            <div className="lock-field">
              <input
                type="text"
                placeholder="• • • • • •"
                autoComplete="off"
                spellCheck={false}
                value={code}
                onChange={e => setCode(e.target.value)}
              />
              <button type="submit">Unlock</button>
            </div>
            <div className={msgClass}>{msg}</div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
