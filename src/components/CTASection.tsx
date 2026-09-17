import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <RevealOnScroll className="cta-section__inner">
          <h2>
            Your Boost <span>is Just a Click Away</span>
          </h2>
          <p>
            Book your IV drip, injection, or wellness service online in minutes – and step into a
            healthier, more energised you.
          </p>
          <Link to="/book-a-consultation" className="btn btn-light">
            Book a Consultation
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
