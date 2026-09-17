import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import ServiceGrid from '../components/ServiceGrid';
import TestimonialSlider from '../components/TestimonialSlider';
import CTASection from '../components/CTASection';
import { branches, whyInvest } from '../data/siteContent';
import './Home.css';

const HeroScene = lazy(() => import('../three/HeroScene'));

export default function Home() {
  return (
    <>
      <section className="hero">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        <div className="hero__glow" />
        <div className="container hero__inner">
          <span className="eyebrow hero__eyebrow">Feel Better. Look Better. Live Better.</span>
          <h1>
            Your Wellness,
            <br />
            <span>Boosted</span>
          </h1>
          <p>Premium IV drips, wellness injections, and health screenings – delivered with expertise and care.</p>
          <Link to="/book-a-consultation" className="btn btn-primary hero__cta">
            Book Your Session Today
          </Link>
        </div>
      </section>

      <section className="section intro">
        <div className="container two-col">
          <RevealOnScroll>
            <img
              src="/images/hero-iv-drip.jpg"
              alt="Nurse administering an IV drip"
              loading="lazy"
              decoding="async"
              width={1024}
              height={683}
            />
          </RevealOnScroll>
          <RevealOnScroll>
            <span className="eyebrow">Your Health, Our Passion</span>
            <h2>
              This is <span style={{ color: 'var(--color-primary)' }}>The IV Booster Bar</span>
            </h2>
            <p>
              The IV Booster Bar &amp; Medical Centre was established in 2020 with the vision and
              mission to aid in everybody's wellbeing, inside out, with our expert IV drips,
              Injections and Wellness Services.
            </p>
            <Link to="/about-us" className="btn btn-outline">
              Explore More
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <div className="section-head">
            <h2>Let's get you dripping&hellip;</h2>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <section className="section locations">
        <div className="container">
          <div className="section-head">
            <h2>Two Locations – One Commitment to Wellness</h2>
            <p>Whether you're in the Vaal or Sandton, our expert team is ready to get you feeling your best – one drip at a time.</p>
          </div>
          <RevealOnScroll className="locations__grid">
            {branches.map((b) => (
              <div className="location-card" key={b.id}>
                <img src={b.image} alt={b.name} loading="lazy" decoding="async" />
                <div className="location-card__body">
                  <h3>{b.name}</h3>
                  <span className="location-card__tagline">{b.tagline}</span>
                  <p>{b.blurb}</p>
                  <Link to={b.slug} className="btn btn-outline">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--alt why-invest">
        <div className="container two-col">
          <RevealOnScroll>
            <span className="eyebrow">Why invest in feeling your best?</span>
            <h2>Wellness isn't just about avoiding illness</h2>
            <p>
              It's about giving your body the fuel, hydration, and care it needs to thrive. Our
              treatments are designed to help you:
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="why-invest__list" stagger={0.06}>
            {whyInvest.map((w) => (
              <div className="why-invest__item" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-head">
            <h2>What Our Patients Are Saying</h2>
            <p>Real stories. Real results. Real people who chose to feel better – and never looked back.</p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <CTASection />
    </>
  );
}
