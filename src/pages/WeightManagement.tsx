import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import ItemGrid from '../components/ItemGrid';
import BranchFinder from '../components/BranchFinder';
import CTASection from '../components/CTASection';
import { weightManagementOfferings } from '../data/siteContent';

export default function WeightManagement() {
  const items = weightManagementOfferings.map((o) => ({ name: o.title, text: o.text }));

  return (
    <>
      <PageHero
        eyebrow="Weight Management"
        title="Weight Management Solutions That Fit Your Goals"
        subtitle="From GLP-1 medication to targeted support with IV drips and injections, we offer a personalised approach to weight management."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>What We Offer</h2>
            <p>
              Every treatment plan starts with a consultation, so we can guide you toward the
              option that best suits your needs.
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
                <strong>Medically guided support</strong> – Every plan begins with a consultation
                and screening process.
              </span>
            </li>
            <li>
              <span>
                <strong>Personalised approach</strong> – We do not believe in a generic solution
                for everyone.
              </span>
            </li>
            <li>
              <span>
                <strong>Ongoing progress tracking</strong> – Baseline measurements and regular
                weigh-ins help you stay accountable.
              </span>
            </li>
            <li>
              <span>
                <strong>Support beyond medication</strong> – We include practical guidance with
                nutrition and exercise planning.
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
