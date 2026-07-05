'use client';

import { useEffect, useRef, useState } from 'react';
import BrandMark from './BrandMark';
import PlayButton from './PlayButton';

const LINKS = [
  ['#features', 'Features'],
  ['#how', 'How it works'],
  ['#demo', 'Try SOS'],
  ['#plans', 'Plans'],
  ['#privacy', 'Privacy'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="Safe Ride home">
          <BrandMark />
          SAFE&nbsp;RIDE
        </a>
        <nav aria-label="Main">
          <button
            className={`menu-btn${open ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`nav-links${open ? ' open' : ''}`}>
            {LINKS.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
            <li className="nav-cta-item">
              <PlayButton small />
            </li>
          </ul>
        </nav>
      </div>
      <div className="scroll-progress" ref={barRef} aria-hidden="true" />
    </header>
  );
}
