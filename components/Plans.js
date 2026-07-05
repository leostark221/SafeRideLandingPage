'use client';

import Reveal from './Reveal';

function Check({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const PLANS = [
  {
    cls: '',
    flag: null,
    name: 'Free',
    tag: 'Safety basics, always free',
    color: '#B4B4B4',
    items: ['Core live location sharing', 'Trusted circle & QR invites', 'Safety essentials to get started'],
    cta: 'Included for everyone',
  },
  {
    cls: 'hot',
    flag: 'Most popular',
    name: 'Safe Ride Plus',
    tag: 'For getting yourself home safe',
    color: '#30D5C8',
    items: [
      'Automatic route-deviation alerts',
      'Unlimited safety check-ins',
      'Priority SOS delivery',
      'Trusted-contact live location',
    ],
    cta: 'See plans in the app',
  },
  {
    cls: 'circle',
    flag: 'For families & groups',
    name: 'Safe Ride Circle',
    tag: 'For keeping your whole circle safe',
    color: '#0273E6',
    items: [
      'Everything in Plus',
      'Up to 5 guardians get your alerts',
      'Shared live location with family',
      'Group journey monitoring',
    ],
    cta: 'See plans in the app',
  },
];

export default function Plans() {
  function spotlight(e) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }

  return (
    <section id="plans">
      <div className="wrap">
        <Reveal>
          <span className="kicker">Plans</span>
          <h2>Start free. Upgrade when you&apos;re ready.</h2>
          <p className="lead">
            Plus protects <strong>you</strong>. Circle protects <strong>your people</strong>.
            Pricing is shown inside the app for your region.
          </p>
        </Reveal>
        <div className="plans-grid">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div className={`plan ${p.cls}`} onMouseMove={spotlight} style={{ height: '100%' }}>
                {p.flag && <span className="plan-flag">{p.flag}</span>}
                <h3>{p.name}</h3>
                <p className="tag">{p.tag}</p>
                <ul>
                  {p.items.map((item) => (
                    <li key={item}>
                      <Check color={p.color} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="spacer" />
                <div className="plan-cta">{p.cta}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="plans-note">Pricing varies by region and is displayed in the app store &amp; in-app.</p>
      </div>
    </section>
  );
}
