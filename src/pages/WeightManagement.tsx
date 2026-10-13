import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import ItemGrid from '../components/ItemGrid';
import IntroSplit from '../components/IntroSplit';
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

      <IntroSplit image="/images/services/weight-management-new.jpg" alt="Scale, measuring tape, apple and dumbbells with a You Can Do It note" eyebrow="What We Offer" title="A Structured, Medically Guided Approach">
        <p>
          At <strong>The IV Booster Bar &amp; Medical Centre</strong>, we know that successful weight
          management is never one-size-fits-all. That is why we offer a{' '}
          <strong>structured, medically guided approach</strong> designed to support your personal
          goals safely and effectively.
        </p>
        <p>
          Every journey begins with a <strong>comprehensive consultation</strong>, allowing our
          medical team to design a bespoke treatment plan tailored uniquely to your body and
          lifestyle.
        </p>
      </IntroSplit>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <h2>Our Weight Management Solutions</h2>
          </div>
          <ItemGrid items={items} />
        </div>
      </section>

      <section className="section">
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
