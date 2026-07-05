import Reveal from './Reveal';

const STEPS = [
  {
    title: 'Add your trusted circle',
    body: "Invite close friends and family — just scan a QR code to connect. You decide exactly who's in your circle.",
  },
  {
    title: 'Start a check-in or share your route',
    body: 'Heading out? Set a 15, 30, or 60-minute check-in, or pick a route and let your circle follow along live.',
  },
  {
    title: "They're alerted if anything goes wrong",
    body: 'Miss a check-in or stray off-route, and your circle is notified with your last location — automatically.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="wrap">
        <Reveal>
          <span className="kicker">How it works</span>
          <h2>Three steps to peace of mind</h2>
          <p className="lead">
            No complicated setup. Sign in with your phone number, add the people you trust, and
            Safe Ride takes care of the rest.
          </p>
        </Reveal>
        <Reveal className="steps-zone">
          <svg className="steps-line" viewBox="0 0 600 2" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 1 H600" pathLength="600" />
          </svg>
          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="step" key={s.title}>
                <span className="step-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
