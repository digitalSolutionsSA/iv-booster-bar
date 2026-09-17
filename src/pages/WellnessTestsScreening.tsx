import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import ItemGrid from '../components/ItemGrid';
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Our Wellness Tests & Screening Services</h2>
          </div>
          <ItemGrid items={wellnessTests} />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <RevealOnScroll className="section-head">
            <h2>Why Choose Us for Wellness Testing?</h2>
          </RevealOnScroll>
          <RevealOnScroll className="why-choose-list" y={20} stagger={0.06}>
            <li>
              <span>
                <strong>Fast &amp; Convenient</strong> – Walk-in or book ahead.
              </span>
            </li>
            <li>
              <span>
                <strong>Discreet &amp; Confidential</strong> – Your privacy is always respected.
              </span>
            </li>
            <li>
              <span>
                <strong>Clear Results</strong> – We explain your results in plain language.
              </span>
            </li>
            <li>
              <span>
                <strong>Professional Care</strong> – Experienced healthcare professionals you can
                trust.
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
