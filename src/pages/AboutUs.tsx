import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import BranchFinder from '../components/BranchFinder';
import CTASection from '../components/CTASection';

export default function AboutUs() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Your Boost, Your Way – Wellness That Works For You"
        subtitle="We're here to help you feel your best – with professional care, premium drips, and a touch of sparkle."
      />

      <section className="section">
        <div className="container two-col">
          <RevealOnScroll>
            <img src="/images/services/about-hero.jpg" alt="Close up of an IV drip" loading="lazy" decoding="async" />
          </RevealOnScroll>
          <RevealOnScroll>
            <h2>Our Story</h2>
            <p>
              The IV Booster Bar &amp; Medical Centre began in 2023 in the heart of the Vaal
              Triangle, with a vision to make wellness more accessible, professional, and
              results-driven.
            </p>
            <p>
              What started as a single branch quickly grew and in 2024, we opened our Sandton
              location to bring the same level of care and expertise to a wider community.
            </p>
            <p>
              Our &ldquo;why&rdquo; is simple – everyone deserves the tools, treatments, and
              support to feel and perform at their best. Whether it's recharging your energy,
              boosting your immunity, enhancing recovery, or supporting long-term health, we make
              it easy to access the right solution for your needs.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <RevealOnScroll className="section-head">
            <h2>What We Do</h2>
            <p>
              At The IV Booster Bar &amp; Medical Centre, we provide advanced IV drip therapies,
              injectable treatments, and wellness services designed to help you look, feel, and
              perform at your best.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="why-choose-list" y={20} stagger={0.06}>
            <li>
              <span>
                <strong>IV Drip Therapies</strong> – for immunity, hydration, skin health,
                recovery, weight management, and more.
              </span>
            </li>
            <li>
              <span>
                <strong>Injectable Boosters</strong> – including B12, B-Complex, weight loss
                support, and energy enhancers.
              </span>
            </li>
            <li>
              <span>
                <strong>Wellness Tests &amp; Screenings</strong> – blood pressure, HIV testing,
                ECG, sugar levels, and other essential health checks.
              </span>
            </li>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <RevealOnScroll className="section-head">
            <h2>Our Approach to Care</h2>
            <p>
              We believe wellness should be personal, accessible, and results-driven. Every
              treatment at The IV Booster Bar is guided by medical expertise, tailored to your
              goals, and delivered in a comfortable, welcoming environment.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <BranchFinder />
      <CTASection />
    </>
  );
}
