import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import ItemGrid from '../components/ItemGrid';
import IntroSplit from '../components/IntroSplit';
import BranchFinder from '../components/BranchFinder';
import CTASection from '../components/CTASection';
import { wellnessTests } from '../data/siteContent';

export default function WellnessTestsScreening() {
  return (
    <>
      <PageHero
        eyebrow="Wellness Tests & Screening"
        title="Your Health Insights, Right When You Need Them"
        subtitle="At The IV Booster Bar & Medical Centre, we believe that prevention and caution are better than cure."
      />

      <IntroSplit
        image="/images/services/wellness-tests-new.jpg"
        alt="Nurse fitting a blood pressure cuff during a health screening"
        eyebrow="Prevention First"
        title="Fast, Simple & Completely Discreet"
      >
        <p>
          At <strong>The IV Booster Bar &amp; Medical Centre</strong>, we believe true wellness starts
          with prevention. Our on-site health screenings and diagnostic tests are{' '}
          <strong>fast, simple, and completely discreet</strong>.
        </p>
        <p>
          We deliver your results rapidly and explain them clearly, empowering you to take
          immediate, confident action for your health.
        </p>
      </IntroSplit>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <h2>Our Wellness Tests &amp; Screening Services</h2>
          </div>
          <ItemGrid items={wellnessTests} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <RevealOnScroll className="section-head">
            <h2>Why Choose Our Screening Services?</h2>
          </RevealOnScroll>
          <RevealOnScroll className="why-choose-list" y={20} stagger={0.06}>
            <li>
              <span>
                <strong>Rapid Turnaround</strong> – Get the answers you need without the long wait.
              </span>
            </li>
            <li>
              <span>
                <strong>Complete Discretion</strong> – Your privacy is our top priority in a
                comfortable, professional environment.
              </span>
            </li>
            <li>
              <span>
                <strong>Clear Guidance</strong> – No confusing medical jargon; just transparent,
                actionable insights from our medical team.
              </span>
            </li>
          </RevealOnScroll>
        </div>
      </section>

      <BranchFinder />
      <CTASection />
    </>
  );
}
