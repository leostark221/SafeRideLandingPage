import Reveal from './Reveal';

const ITEMS = [
  {
    title: 'Only the people you choose',
    body: 'Your location is shared exclusively with the trusted contacts you explicitly add. No one else — ever.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#30D5C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Biometric lock',
    body: 'Protect the app with your fingerprint or Face ID, so your circle and history stay private even if someone has your phone.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#30D5C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a5 5 0 0 1 5 5v4H7V6a5 5 0 0 1 5-5z" />
        <rect x="4" y="10" width="16" height="12" rx="2" />
      </svg>
    ),
  },
  {
    title: 'You control your circle',
    body: 'Add or remove trusted contacts at any time. Background location exists for one reason: keeping your trips monitored, for the people you picked.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#30D5C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function Privacy() {
  return (
    <section className="privacy" id="privacy">
      <div className="wrap">
        <Reveal>
          <span className="kicker">Trust &amp; privacy</span>
          <h2>Your location. Your circle. Your rules.</h2>
          <p className="lead">Safe Ride is built on trust — starting with how it treats your data.</p>
          <div className="priv-list">
            {ITEMS.map((item) => (
              <div className="priv-item" key={item.title}>
                {item.icon}
                <div>
                  <b>{item.title}</b>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="priv-visual" aria-hidden="true">
            <svg width="300" height="300" viewBox="0 0 300 300">
              <circle cx="150" cy="150" r="120" fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="1.5" />
              <circle cx="150" cy="150" r="78" fill="none" stroke="rgba(48,213,200,.22)" strokeWidth="1.5" strokeDasharray="4 6" />
              {/* you */}
              <circle cx="150" cy="150" r="30" fill="rgba(48,213,200,.12)" />
              <circle cx="150" cy="150" r="17" fill="#30D5C8" />
              <path
                d="M150 143a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm-8 15c0-4 4-6 8-6s8 2 8 6"
                fill="none"
                stroke="#04302c"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              {/* guardians orbiting slowly */}
              <g className="orbit-spin">
                <g>
                  <circle cx="150" cy="72" r="13" fill="#0273E6" stroke="#1c1b1b" strokeWidth="3" />
                  <text x="150" y="76" fill="#fff" fontFamily="Arial,sans-serif" fontSize="10" fontWeight="700" textAnchor="middle">M</text>
                </g>
                <g>
                  <circle cx="224" cy="189" r="13" fill="#0273E6" stroke="#1c1b1b" strokeWidth="3" />
                  <text x="224" y="193" fill="#fff" fontFamily="Arial,sans-serif" fontSize="10" fontWeight="700" textAnchor="middle">A</text>
                </g>
                <g>
                  <circle cx="76" cy="189" r="13" fill="#0273E6" stroke="#1c1b1b" strokeWidth="3" />
                  <text x="76" y="193" fill="#fff" fontFamily="Arial,sans-serif" fontSize="10" fontWeight="700" textAnchor="middle">J</text>
                </g>
                <g>
                  <circle cx="95" cy="96" r="13" fill="#0273E6" stroke="#1c1b1b" strokeWidth="3" />
                  <text x="95" y="100" fill="#fff" fontFamily="Arial,sans-serif" fontSize="10" fontWeight="700" textAnchor="middle">S</text>
                </g>
                <g>
                  <circle cx="205" cy="96" r="13" fill="#0273E6" stroke="#1c1b1b" strokeWidth="3" />
                  <text x="205" y="100" fill="#fff" fontFamily="Arial,sans-serif" fontSize="10" fontWeight="700" textAnchor="middle">K</text>
                </g>
              </g>
              {/* shield */}
              <g transform="translate(150 246)">
                <circle r="16" fill="#1c1b1b" stroke="rgba(48,213,200,.4)" strokeWidth="1.5" />
                <path
                  d="M0 -7l6 2.2v4.3c0 4.2-3.4 7.2-6 8.5-2.6-1.3-6-4.3-6-8.5v-4.3z"
                  fill="none"
                  stroke="#30D5C8"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
