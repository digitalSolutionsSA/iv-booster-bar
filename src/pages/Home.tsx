import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import ServiceGrid from '../components/ServiceGrid';
import TestimonialSlider from '../components/TestimonialSlider';
import CTASection from '../components/CTASection';
import { branches, ivDrips, whyInvest } from '../data/siteContent';
import { gsap } from '../lib/gsapSetup';
import './Home.css';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero__line > span', { yPercent: 110, duration: 1, stagger: 0.12 })
        .from('.hero__fade', { y: 24, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.6')
        .from('.hero__media', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.3, ease: 'power4.inOut' }, 0.1)
        .from('.hero__media img', { scale: 1.3, duration: 1.8 }, 0.1)
        .from('.hero__float', { y: 30, opacity: 0, duration: 0.7, stagger: 0.12 }, '-=0.8');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const tickerItems = ivDrips.map((d) => d.name.replace(/ (IV )?Drip$/, ''));

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="hero__kicker hero__fade">
              <i /> IV Drips · Injections · Wellness Screening
            </span>
            <h1>
              <span className="hero__line"><span>Feel better.</span></span>
              <span className="hero__line"><span>Look better.</span></span>
              <span className="hero__line"><span><em>Live better.</em></span></span>
            </h1>
            <p className="hero__fade">
              Premium IV drips, vitamin injections and health screenings – delivered by a medically
              qualified team in the Vaal Triangle and Sandton.
            </p>
            <div className="hero__actions hero__fade">
              <Link to="/book-a-consultation" className="btn hero__btn-main">
                Book Your Drip
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link to="/iv-drips" className="btn hero__btn-ghost">
                Explore the Drip Menu
              </Link>
            </div>
            <dl className="hero__stats hero__fade">
              <div>
                <dt>{ivDrips.length}+</dt>
                <dd>Signature drips</dd>
              </div>
              <div>
                <dt>2</dt>
                <dd>Branches</dd>
              </div>
              <div>
                <dt>100%</dt>
                <dd>Nurse-administered</dd>
              </div>
            </dl>
          </div>

          <div className="hero__visual">
            <div className="hero__media">
              <img src="/images/services/iv-drips.jpg" alt="IV drip being administered at The IV Booster Bar" width={683} height={1024} />
            </div>
            <div className="hero__float hero__float--card">
              <span className="hero__float-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5c-.3 0-.6.2-.8.4C9.7 5 6 10 6 14a6 6 0 0 0 12 0c0-4-3.7-9-5.2-11.1-.2-.2-.5-.4-.8-.4Z" />
                </svg>
              </span>
              <span>
                <strong>Nearly 100% absorption</strong>
                Straight into the bloodstream
              </span>
            </div>
            <div className="hero__float hero__float--badge" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs>
                  <path id="hero-badge-circle" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1 -88 0" />
                </defs>
                <text>
                  <textPath href="#hero-badge-circle" textLength="270">Feel your best • Book a drip • </textPath>
                </text>
              </svg>
              <svg className="hero__badge-drop" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.5c-.3 0-.6.2-.8.4C9.7 5 6 10 6 14a6 6 0 0 0 12 0c0-4-3.7-9-5.2-11.1-.2-.2-.5-.4-.8-.4Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="hero__ticker" aria-hidden="true">
          <div className="hero__ticker-track">
            {[...tickerItems, ...tickerItems].map((name, i) => (
              <span key={i}>{name}</span>
            ))}
          </div>
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

      <section className="section paperless">
        <div className="container paperless__inner">
          <RevealOnScroll className="paperless__media">
            <img
              className="paperless__photo"
              src="/images/paperless/nurse-tablet.jpg"
              alt="Registered nurse capturing a client's vitals on a tablet"
              loading="lazy"
              decoding="async"
              width={960}
              height={1280}
            />
            <img
              className="paperless__inset"
              src="/images/paperless/tablet-onboarding.jpg"
              alt="Client onboarding screen on The IV Booster Bar tablet"
              loading="lazy"
              decoding="async"
              width={960}
              height={1280}
            />
            <span className="paperless__badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              100% Paperless
            </span>
          </RevealOnScroll>

          <RevealOnScroll className="paperless__body">
            <span className="paperless__kicker">
              <i /> Smarter Care
            </span>
            <h2>
              We&rsquo;ve gone <em>paperless.</em>
            </h2>
            <p>
              No clipboards, no paperwork, no filling in the same forms every visit. Every client
              at The IV Booster Bar is onboarded on one of our tablets – and your nurse records
              your vitals and treatment digitally, right at your chair.
            </p>
            <ol className="paperless__steps">
              <li>
                <strong>Fill in your details once</strong>
                <span>Complete your onboarding on a tablet while you wait – no login required.</span>
              </li>
              <li>
                <strong>Your profile is saved</strong>
                <span>Your information is stored securely and reviewed by our healthcare team.</span>
              </li>
              <li>
                <strong>Walk straight in next time</strong>
                <span>On every return visit we simply pull up your profile, so you can get dripping sooner.</span>
              </li>
            </ol>
          </RevealOnScroll>
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
