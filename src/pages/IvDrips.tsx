import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import ItemGrid from '../components/ItemGrid';
import BranchFinder from '../components/BranchFinder';
import CTASection from '../components/CTASection';
import { ivDrips } from '../data/siteContent';

export default function IvDrips() {
  return (
    <>
      <PageHero
        eyebrow="IV Drips at The IV Booster Bar & Medical Centre"
        title="Your Fast Track to Feeling Better"
        subtitle="By delivering vitamins, minerals, antioxidants, and hydration directly into your bloodstream, IV drips skip the digestive process, allowing your body to absorb nutrients at nearly 100% efficiency."
      />

      <section className="section">
        <div className="container">
          <RevealOnScroll className="section-head">
            <h2>Why Choose IV Therapy?</h2>
          </RevealOnScroll>
          <RevealOnScroll className="why-choose-list" y={20} stagger={0.06} >
            <li>
              <span>
                <strong>Fast absorption</strong> – Feel the effects sooner, thanks to direct
                delivery into your bloodstream.
              </span>
            </li>
            <li>
              <span>
                <strong>High potency</strong> – Higher nutrient levels than oral supplements can
                provide.
              </span>
            </li>
            <li>
              <span>
                <strong>Tailored to you</strong> – From targeted support to all-in-one solutions,
                we have a drip for every need.
              </span>
            </li>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <h2>Our Range of IV Drips</h2>
            <p>Want to know more? Scroll down for information on our range of IV Drips.</p>
          </div>
          <ItemGrid items={ivDrips} />
        </div>
      </section>

      <BranchFinder />
      <CTASection />
    </>
  );
}
