import Reveal from './Reveal';

const PILLARS = [
  {
    color: '#30D5C8',
    title: 'Someone always knows',
    body: 'Share live location with your trusted circle in real time.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#30D5C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    color: '#ee1c2f',
    title: 'Help is one tap away',
    body: 'SOS instantly alerts your circle with your live location.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ee1c2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    color: '#30D5C8',
    title: 'Automatic peace of mind',
    body: 'Check-ins alert your circle even if your phone is off.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#30D5C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    color: '#0273E6',
    title: 'Watch the whole trip',
    body: 'Your circle follows your route and is warned if you go off-course.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0273E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <div className="pillars">
      <div className="wrap">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div className="pillar">
              {p.icon}
              <div>
                <b>{p.title}</b>
                <span>{p.body}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
