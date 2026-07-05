'use client';

import { useRef } from 'react';

function PlayGlyph({ size = 22 }) {
  return (
    <svg width={size} height={size * 1.09} viewBox="0 0 24 26" aria-hidden="true">
      <path
        d="M1.6.9C1.2 1.3 1 1.9 1 2.7v20.6c0 .8.2 1.4.6 1.8l.1.1L13.3 13.7v-.3L1.7.8l-.1.1z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M17.2 17.6l-3.9-3.9v-.3l3.9-3.9.1.1 4.6 2.6c1.3.7 1.3 2 0 2.7l-4.6 2.6-.1.1z"
        fill="currentColor"
        opacity="0.65"
      />
      <path d="M17.3 17.5l-4-4L1.6 25.2c.4.5 1.2.5 2 .1l13.7-7.8" fill="currentColor" opacity="0.8" />
      <path d="M17.3 9.4L3.6.7C2.8.2 2 .3 1.6.8l11.7 11.7 4-3.1z" fill="currentColor" />
    </svg>
  );
}

/**
 * Primary store CTA. Magnetic on desktop.
 * TODO: wire the Play Store link — onClick is intentionally empty for now.
 */
export default function PlayButton({ small = false, style }) {
  const ref = useRef(null);

  function onMove(e) {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
  }

  function onLeave() {
    if (ref.current) ref.current.style.transform = '';
  }

  return (
    <button
      ref={ref}
      className={`btn btn-play${small ? ' btn-sm' : ''}`}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => {}}
      aria-label="Get Safe Ride on Google Play"
    >
      <PlayGlyph size={small ? 16 : 22} />
      <span className="lbl">
        {!small && <small>GET IT ON</small>}
        Google Play
      </span>
    </button>
  );
}
