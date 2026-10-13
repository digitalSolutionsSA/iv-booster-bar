import PageHero from '../components/PageHero';
import IntroSplit from '../components/IntroSplit';
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

      <IntroSplit image="/images/services/iv-drips-clinic.jpg" alt="Nurse preparing an IV drip at The IV Booster Bar" title="Why Choose IV Therapy?">
        <ul className="why-choose-list">
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
        </ul>
      </IntroSplit>

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
