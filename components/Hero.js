'use client';

import { useEffect, useRef, useState } from 'react';
import MapSvg from './MapSvg';
import PlayButton from './PlayButton';

const TOASTS = [
  { icon: '💚', title: 'Maya arrived Home', sub: 'Just now' },
  { icon: '🛡️', title: 'Sara started a check-in', sub: '30 min · watching' },
  { icon: '📍', title: 'Ali shared a route with you', sub: 'Campus → Home' },
  { icon: '✅', title: 'James is safe', sub: 'Check-in confirmed' },
];

const CHECKIN_START = 25 * 60 + 14;

function fmt(secs) {
  const m = String(Math.floor(secs / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return `${m}:${s}`;
}

export default function Hero() {
  const zoneRef = useRef(null);
  const tiltRef = useRef(null);
  const reduced = useRef(false);
  const [secs, setSecs] = useState(CHECKIN_START);
  const [safe, setSafe] = useState(false);
  const [sos, setSos] = useState(false);
  const [toast, setToast] = useState(0);
  const [hinted, setHinted] = useState(false);

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // check-in countdown
  useEffect(() => {
    const id = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : CHECKIN_START)), 1000);
    return () => clearInterval(id);
  }, []);

  // rotating notification toasts
  useEffect(() => {
    const id = setInterval(() => setToast((t) => (t + 1) % TOASTS.length), 3400);
    return () => clearInterval(id);
  }, []);

  // auto-reset the mini demos
  useEffect(() => {
    if (!sos) return;
    const id = setTimeout(() => setSos(false), 3400);
    return () => clearTimeout(id);
  }, [sos]);

  useEffect(() => {
    if (!safe) return;
    const id = setTimeout(() => {
      setSafe(false);
      setSecs(CHECKIN_START);
    }, 3200);
    return () => clearTimeout(id);
  }, [safe]);

  function onMove(e) {
    if (reduced.current) return;
    const zone = zoneRef.current;
    const tilt = tiltRef.current;
    if (!zone || !tilt) return;
    const r = zone.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  }

  function onLeave() {
    if (tiltRef.current) tiltRef.current.style.transform = '';
  }

  const ringOffset = 113 - (secs / CHECKIN_START) * 113;
  const t = TOASTS[toast];

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div>
          <h1>
            Get home safe — and let the people who matter <em>know it</em>.
          </h1>
          <p className="hero-sub">
            Share your live location, send an instant SOS, and set safety check-ins so someone
            always knows you&apos;re okay.
          </p>
          <div className="hero-ctas">
            <PlayButton />
            <a className="btn btn-ghost" href="#how">
              See how it works
            </a>
          </div>
          <p className="hero-note">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#30D5C8"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Your location is only ever shared with the contacts you choose.
          </p>
          <div className="badge-row">
            <span className="chip">
              <span className="dot" style={{ background: '#30D5C8' }} />
              Free to start
            </span>
            <span className="chip">
              <span className="dot" style={{ background: '#0273E6' }} />
              Android &amp; iOS
            </span>
            <span className="chip">
              <span className="dot" style={{ background: '#0eb50e' }} />
              Alerts work even if your phone dies
            </span>
          </div>
        </div>

        <div className="phone-zone" ref={zoneRef} onMouseMove={onMove} onMouseLeave={onLeave}>
          <div className="phone-tilt" ref={tiltRef}>
            <div className="phone">
              {!hinted && <div className="tap-hint">✨ It&apos;s live — try SOS</div>}
              <div className="screen">
                <MapSvg />
                <div className={`status-pill${safe ? ' safe' : ''}`}>
                  <span className="live-dot" />
                  {safe ? 'Circle notified — you’re safe' : 'Sharing live with 3 friends'}
                </div>

                <button
                  className="sos-fab"
                  aria-label="Demo: send SOS"
                  onClick={() => {
                    setSos(true);
                    setHinted(true);
                  }}
                >
                  SOS
                </button>

                <div className={`sheet${safe ? ' safe' : ''}`}>
                  <div className="sheet-row">
                    <div className="timer-ring" aria-hidden="true">
                      <svg viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="18" fill="none" stroke="#3a3939" strokeWidth="4" />
                        <circle
                          cx="22"
                          cy="22"
                          r="18"
                          fill="none"
                          stroke={safe ? '#0eb50e' : '#30D5C8'}
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeDasharray="113"
                          strokeDashoffset={ringOffset}
                          transform="rotate(-90 22 22)"
                        />
                      </svg>
                      <b style={safe ? { color: '#0eb50e' } : undefined}>
                        {safe ? '✓' : fmt(secs)}
                      </b>
                    </div>
                    <div className="sheet-info">
                      <b>{safe ? 'You’re safe 💚' : 'Safety check-in active'}</b>
                      <span>
                        {safe
                          ? 'Your circle just got the good news'
                          : 'Your circle is alerted if you don’t confirm'}
                      </span>
                    </div>
                    <button
                      className="imsafe"
                      onClick={() => {
                        setSafe(true);
                        setHinted(true);
                      }}
                    >
                      I&apos;m safe
                    </button>
                  </div>
                </div>

                <div className={`sos-overlay${sos ? ' show' : ''}`} aria-hidden={!sos}>
                  <div className="sos-ring">SOS</div>
                  <b>Alert sent to your circle</b>
                  <div className="avatar-row">
                    {['M', 'S', 'A', 'J', 'K'].map((n, i) => (
                      <span
                        key={n}
                        className={`avatar${sos ? ' lit' : ''}`}
                        style={{ animationDelay: `${i * 0.12}s` }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  <span>They can see your live location right now</span>
                </div>
              </div>
            </div>
          </div>

          <div className="toast-zone" aria-hidden="true">
            <div className="toast" key={toast}>
              <span className="t-ico">{t.icon}</span>
              <div>
                <b>{t.title}</b>
                <span>{t.sub}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
