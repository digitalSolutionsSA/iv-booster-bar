import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import ItemGrid from '../components/ItemGrid';
import BranchFinder from '../components/BranchFinder';
import CTASection from '../components/CTASection';
import { corporateOfferings } from '../data/siteContent';

export default function CorporateWellness() {
  const items = corporateOfferings.map((o) => ({ name: o.title, text: o.text }));

  return (
    <>
      <PageHero
        eyebrow="Corporate Wellness"
        title="Boost Your Team's Health – Boost Your Business"
        subtitle="Professional, on-site wellness solutions designed to energise, protect, and optimise your workforce."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>What We Offer</h2>
            <p>
              A healthy team member equals an increase in productivity. Our quick and efficient
              mobile medical team will come to you – whenever and wherever you need us.
            </p>
          </div>
          <ItemGrid items={items} />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <RevealOnScroll className="section-head">
            <h2>Why Choose Us</h2>
          </RevealOnScroll>
          <RevealOnScroll className="why-choose-list" y={20} stagger={0.06}>
            <li>
              <span>
                <strong>Accessibility</strong> – We come to you, no disruption to the workday.
              </span>
            </li>
            <li>
              <span>
                <strong>Professionalism</strong> – Medical expertise and safety protocols in every
                service.
              </span>
            </li>
            <li>
              <span>
                <strong>Results-Driven</strong> – Every treatment is designed for real, noticeable
                benefits.
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
