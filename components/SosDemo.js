'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const GUARDIANS = [
  ['M', 'Maya'],
  ['S', 'Sara'],
  ['A', 'Ali'],
  ['J', 'James'],
  ['K', 'Kim'],
];

const HOLD_MS = 900;

export default function SosDemo() {
  const [state, setState] = useState('idle'); // idle | holding | sent
  const timer = useRef(null);

  function startHold() {
    if (state === 'sent') return;
    setState('holding');
    timer.current = setTimeout(() => setState('sent'), HOLD_MS);
  }

  function cancelHold() {
    if (state !== 'holding') return;
    clearTimeout(timer.current);
    setState('idle');
  }

  useEffect(() => () => clearTimeout(timer.current), []);

  // auto reset a while after sending
  useEffect(() => {
    if (state !== 'sent') return;
    const id = setTimeout(() => setState('idle'), 5200);
    return () => clearTimeout(id);
  }, [state]);

  return (
    <section className="sos-demo" id="demo">
      <div className="wrap">
        <Reveal>
          <span className="kicker" style={{ justifyContent: 'center' }}>
            Try it right here
          </span>
          <h2>Hold the button. Feel the backup arrive.</h2>
          <p className="lead" style={{ marginInline: 'auto' }}>
            This is what one moment of pressure does in the app — your whole circle, alerted with
            your live location.
          </p>
        </Reveal>

        <Reveal className="hold-zone">
          <div style={{ position: 'relative', width: 170, height: 170 }}>
            {state === 'sent' && (
              <>
                <span className="ripple" />
                <span className="ripple r2" />
                <span className="ripple r3" />
              </>
            )}
            <button
              className={`hold-btn ${state === 'holding' ? 'holding' : ''} ${
                state === 'sent' ? 'sent' : ''
              }`}
              onPointerDown={startHold}
              onPointerUp={cancelHold}
              onPointerLeave={cancelHold}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && !e.repeat) startHold();
              }}
              onKeyUp={cancelHold}
              aria-label="Demo: hold to send SOS"
            >
              {state === 'sent' ? 'SENT ✓' : state === 'holding' ? 'KEEP HOLDING' : 'HOLD FOR SOS'}
            </button>
            <svg className={`hold-progress${state === 'holding' ? ' holding' : ''}`} viewBox="0 0 194 194">
              <circle className="track" cx="97" cy="97" r="94" />
              <circle className="fill" cx="97" cy="97" r="94" />
            </svg>
          </div>

          <div className="guardian-strip" aria-hidden="true">
            {GUARDIANS.map(([ini, name], i) => (
              <div
                key={name}
                className={`guardian${state === 'sent' ? ' lit' : ''}`}
                style={state === 'sent' ? { transitionDelay: `${i * 0.12}s` } : undefined}
              >
                <span className={`avatar${state === 'sent' ? ' lit' : ''}`} style={{ animationDelay: `${i * 0.12}s` }}>
                  {ini}
                </span>
                <small>{name}</small>
              </div>
            ))}
          </div>

          <p className={`hold-caption${state === 'sent' ? ' sent' : ''}`} role="status">
            {state === 'sent'
              ? 'Your circle has your live location. Help is on the way.'
              : state === 'holding'
              ? 'Sending in a moment…'
              : 'Press and hold for one second.'}
          </p>
          <p className="demo-note">Just a demo — nothing is sent from this page.</p>
        </Reveal>
      </div>
    </section>
  );
}
