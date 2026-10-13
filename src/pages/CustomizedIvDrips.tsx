import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import IntroSplit from '../components/IntroSplit';
import BranchFinder from '../components/BranchFinder';
import CTASection from '../components/CTASection';

const steps = [
  { title: 'Consultation', text: 'Share your health goals and concerns with our team.' },
  { title: 'Personalization', text: 'We design a nutrient blend that fits your needs.' },
  { title: 'Your Drip, Your Way', text: 'Relax while we administer your custom infusion in a safe, comfortable environment.' },
];

export default function CustomizedIvDrips() {
  return (
    <>
      <PageHero
        eyebrow="Customized IV Drips"
        title="Ensure You Get the Exact Nutrients Your Body Needs"
        subtitle="No more, no less. At The IV Booster Bar & Medical Centre, we know that one size doesn't fit all – your drip is built for you."
      />

      <IntroSplit image="/images/services/customized-new.jpg" alt="Nurse holding a customised IV drip bag" eyebrow="Tailor-Made For You" title="Your body is unique. Your wellness routine should be too.">
        <p>
          At <strong>The IV Booster Bar &amp; Medical Centre</strong>, we know that generic solutions
          don&rsquo;t deliver exceptional results. That&rsquo;s why we offer{' '}
          <strong>Customised IV Drips</strong> – tailor-made vitamin and nutrient infusions
          formulated specifically for your body, lifestyle, and recovery goals.
        </p>
        <p>
          Whether you are looking to amplify your energy, radiant skin from within, or ironclad
          immunity, we build a blend designed exclusively for you.
        </p>
      </IntroSplit>

      <section className="section section--alt">
        <div className="container">
          <RevealOnScroll className="section-head">
            <h2>Our 1-2-3 Process</h2>
          </RevealOnScroll>
          <RevealOnScroll className="item-grid" y={24}>
            {steps.map((s, i) => (
              <div className="item-card" key={s.title}>
                <span className="eyebrow">Step {i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <BranchFinder />
      <CTASection />
    </>
  );
}
