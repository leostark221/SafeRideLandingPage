import BrandMark from './BrandMark';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <a className="brand" href="#top" aria-label="Safe Ride home">
          <BrandMark size={30} />
          SAFE&nbsp;RIDE
        </a>
        <ul className="foot-links">
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
          <li>
            <a href="mailto:support@saferride.org">Support</a>
          </li>
        </ul>
        <small>
          © {new Date().getFullYear()} Safe Ride · saferride.org · Alerts are sent to your chosen
          contacts, not emergency services.
        </small>
      </div>
    </footer>
  );
}
