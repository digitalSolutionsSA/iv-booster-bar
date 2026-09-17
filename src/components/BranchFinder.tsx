import { Link } from 'react-router-dom';
import { branches } from '../data/siteContent';
import RevealOnScroll from './RevealOnScroll';

export default function BranchFinder() {
  return (
    <section className="section branch-finder">
      <div className="container">
        <div className="section-head">
          <h2>Find Your Nearest IV Booster Bar</h2>
          <p>Two locations. Same expert care. Choose the branch that's closest to you and start your wellness journey today.</p>
        </div>
        <RevealOnScroll className="branch-finder__grid">
          {branches.map((b) => (
            <Link to={b.slug} key={b.id} className="branch-finder__card">
              <img src={b.image} alt={b.name} loading="lazy" decoding="async" />
              <div>
                <h3>{b.name}</h3>
                <span>View Branch →</span>
              </div>
            </Link>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
