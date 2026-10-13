import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import { team } from '../data/siteContent';

export default function MeetOurTeam() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Meet the IV Booster Bar Team"
        subtitle="At The IV Booster Bar & Medical Centre, our medically qualified team combines clinical expertise with a friendly, client-first approach. Meet the IV Booster Bar team who design and deliver personalised IV drips, injections and wellness plans – safely, professionally, and with your goals in mind."
      />

      <section className="section">
        <div className="container">
          <RevealOnScroll className="team-grid" y={26} stagger={0.06}>
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-card__photo">
                  <img src={member.image} alt={member.name} loading="lazy" decoding="async" />
                </div>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <RevealOnScroll className="cta-section__inner">
            <h2>Ready to feel your best?</h2>
            <p>Book your consultation and we'll get you set up with the right treatment for your need.</p>
            <Link to="/book-a-consultation" className="btn btn-light">
              Enquire Now
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
