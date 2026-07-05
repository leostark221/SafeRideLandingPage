const ITEMS = [
  ['💚', 'Made it home'],
  ['🚶', 'Starting my walk — watch me?'],
  ['🛡️', 'Check-in set for 30 min'],
  ['📍', 'Sharing my live location'],
  ['✈️', 'Landed safe'],
  ['🚌', 'On the bus, tracking on'],
  ['🌙', 'Leaving now, follow my route'],
  ['✅', "I'm safe"],
];

export default function Ticker() {
  // duplicated list = seamless infinite loop
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {loop.map(([emoji, text], i) => (
          <span className="ticker-item" key={i}>
            <i>{emoji}</i>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
