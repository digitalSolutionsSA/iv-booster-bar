import { Link } from 'react-router-dom';
import { footerLinks } from '../data/siteContent';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src="/images/logo-footer.png" alt="The IV Booster Bar" loading="lazy" decoding="async" />
          <p>
            Premium IV drips, wellness injections, and health screenings – delivered with expertise
            and care in Sandton &amp; the Vaal Triangle.
          </p>
        </div>

        <div className="site-footer__col">
          <h4>Quick Links</h4>
          <ul>
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Get In Touch</h4>
          <ul>
            <li>Vaal: 016 100 6051 / 073 541 4308</li>
            <li>Sandton: 072 844 7429</li>
            <li>info@ivboosterbar.co.za</li>
          </ul>
          <Link to="/book-a-consultation" className="btn btn-primary" style={{ marginTop: 12 }}>
            Book a Consultation
          </Link>
        </div>
      </div>

      <div className="site-footer__bottom container">
        <span>© {new Date().getFullYear()} The IV Booster Bar & Medical Centre. All rights reserved.</span>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
