import { motion } from 'framer-motion';
import ExperienceDetails from '../Information/experiences';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-idx">(03)</span>
          <h2>Career</h2>
          <span className="label">2019 — Present</span>
        </div>

        <div className="exp-list">
          {ExperienceDetails.map((exp, i) => {
            const start = `${exp.durations.start.month} ${exp.durations.start.year}`;
            const end = exp.durations.end.present
              ? <span className="now">Now</span>
              : `${exp.durations.end.month} ${exp.durations.end.year}`;

            return (
              <motion.article
                key={exp.name}
                className="exp-row"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.9, delay: i * 0.05, ease }}
              >
                <div className="ex-logo">
                  <img src={exp.avatar2x} alt={exp.name} loading="lazy" />
                </div>
                <div className="ex-name">
                  {exp.name}
                  <span className="role">{exp.position} · {exp.location}</span>
                </div>
                <div className="ex-stack">
                  {exp.stacks.map(s => <span key={s}>{s}</span>)}
                </div>
                <div className="ex-when">{start} — {end}</div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
