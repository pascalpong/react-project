import { useState } from 'react';
import Loader from './Loader';
import Cursor from './Cursor';
import TopBar from './TopBar';
import DotNav from './DotNav';
import Hero from './Hero';
import Work from './Work';
import About from './About';
import Experience from './Experience';
import Vault from './Vault';
import Contact from './Contact';

export default function Portfolio() {
  const [started, setStarted] = useState(false);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Loader onDone={() => setStarted(true)} />
      <Cursor />
      <TopBar />
      <DotNav />
      <main>
        <Hero started={started} />
        <Work />
        <About />
        <Experience />
        <Vault />
        <Contact />
      </main>
    </>
  );
}
