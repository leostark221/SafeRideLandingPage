'use client';

import { useEffect, useRef, useState } from 'react';
import MapSvg from './MapSvg';

const STEPS = [
  {
    id: 'live',
    icon: '📍',
    iconClass: 'blue',
    title: 'See your people, live',
    body: 'Your trusted circle on one interactive map, in real time. If a friend goes offline, you still see their last-known location — no guessing, no “where are you??” texts.',
    tags: ['Real-time map', 'Offline fallback', 'Close friends only'],
  },
  {
    id: 'sos',
    icon: '🚨',
    iconClass: 'red',
    title: 'One tap. Everyone who matters, alerted.',
    body: 'The SOS button lives on your home screen. One confirmation and every close friend gets an immediate alert with your live location attached.',
    tags: ['Instant alert', 'Live location attached'],
  },
  {
    id: 'checkin',
    icon: '⏱️',
    iconClass: '',
    title: 'Check-ins that watch your back',
    body: 'Set a 15, 30, or 60-minute timer. Don’t confirm “I’m safe” in time, and your circle is alerted with your last location. It runs server-side — it fires even if the app is closed or your phone dies.',
    tags: ['15 / 30 / 60 min', 'Works when phone is off'],
  },
  {
    id: 'route',
    icon: '🧭',
    iconClass: 'blue',
    title: 'They can watch the whole trip',
    body: 'Pick a route to your destination and let your circle follow along. Stray off the expected path and they get an automatic route-deviation alert.',
    tags: ['Route monitoring', 'Deviation alerts'],
  },
];

function SosScreen() {
  return (
    <div className="scr-center scr-sos-bg">
      <div className="sos-ring">SOS</div>
      <b style={{ fontSize: '0.95rem' }}>Alert sent to your circle</b>
      <div className="avatar-row">
        {['M', 'S', 'A', 'J', 'K'].map((n, i) => (
          <span key={n} className="avatar lit" style={{ animationDelay: `${i * 0.12}s` }}>
            {n}
          </span>
        ))}
      </div>
      <span style={{ fontSize: '0.78rem', color: '#b4b4b4', maxWidth: 200 }}>
        They can see your live location right now
      </span>
    </div>
  );
}

function CheckinScreen() {
  return (
    <div className="scr-center scr-checkin-bg">
      <div className="big-timer">
        <svg viewBox="0 0 150 150">
          <circle cx="75" cy="75" r="64" fill="none" stroke="#343333" strokeWidth="8" />
          <circle
            cx="75"
            cy="75"
            r="64"
            fill="none"
            stroke="#30D5C8"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="402"
            strokeDashoffset="120"
          />
        </svg>
        <div className="bt-label">
          <b>21:14</b>
          <span>until check-in</span>
        </div>
      </div>
      <div className="dur-chips">
        <span className="dur-chip">15 min</span>
        <span className="dur-chip on">30 min</span>
        <span className="dur-chip">1 hour</span>
      </div>
      <button className="imsafe" tabIndex={-1} style={{ padding: '12px 26px', fontSize: '0.85rem' }}>
        I&apos;m safe
      </button>
    </div>
  );
}

export default function FeatureScrolly() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.idx);
            setActive(idx);
          }
        });
      },
      { threshold: 0.55 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="scrolly-section" id="features">
      <div className="wrap">
        <span className="kicker">Features</span>
        <h2>Watch it work as you scroll</h2>
        <p className="lead">
          Built around one promise: the people who care about you always know you&apos;re okay.
        </p>

        <div className="scrolly">
          <div className="scrolly-steps">
            {STEPS.map((s, i) => (
              <div
                key={s.id}
                ref={(el) => (refs.current[i] = el)}
                data-idx={i}
                className={`sstep${active === i ? ' active' : ''}`}
              >
                <div className={`feat-icon ${s.iconClass}`} style={{ fontSize: '1.3rem' }}>
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="mini-tags">
                  {s.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="scrolly-sticky" aria-hidden="true">
            <div className="phone" style={{ animation: 'none' }}>
              <div className="screen">
                {/* live map */}
                <div className={`scr${active === 0 ? ' active' : ''}`}>
                  <MapSvg showRoute={false} />
                  <div className="status-pill">
                    <span className="live-dot" />
                    Sharing live with 3 friends
                  </div>
                  <div className="friends-list">
                    {[
                      ['M', 'Maya', 'Home · now'],
                      ['S', 'Sara', 'Campus · 2 min'],
                      ['J', 'James', 'Last seen · 5 min'],
                    ].map(([ini, name, meta]) => (
                      <div className="friend-row" key={name}>
                        <span className="avatar">{ini}</span>
                        {name}
                        <span>
                          {meta} <span className="dot" style={{ display: 'inline-block' }} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* sos */}
                <div className={`scr${active === 1 ? ' active' : ''}`}>
                  <SosScreen />
                </div>

                {/* check-in */}
                <div className={`scr${active === 2 ? ' active' : ''}`}>
                  <CheckinScreen />
                </div>

                {/* route */}
                <div className={`scr${active === 3 ? ' active' : ''}`}>
                  <MapSvg animateAlong />
                  <div className="status-pill">
                    <span className="live-dot" />
                    On route · being watched
                  </div>
                  <div className="route-banner">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#30D5C8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                    <div>
                      <b>On route to Home</b>
                      <span>12 min away · 3 friends watching</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
