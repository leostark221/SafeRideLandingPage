import Reveal from './Reveal';
import PlayButton from './PlayButton';

export default function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <Reveal>
          <span className="kicker" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            Free to start
          </span>
          <h2>Someone should always know you got home safe.</h2>
          <p>
            Download Safe Ride, add your circle, and never make the &ldquo;text me when
            you&apos;re home&rdquo; promise alone again.
          </p>
          <PlayButton style={{ padding: '17px 32px', fontSize: '1.05rem' }} />
        </Reveal>
      </div>
    </section>
  );
}
