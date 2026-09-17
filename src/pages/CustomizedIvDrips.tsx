import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
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

      <section className="section">
        <div className="container two-col">
          <RevealOnScroll>
            <img src="/images/services/customized.jpg" alt="Custom IV drip equipment" loading="lazy" decoding="async" />
          </RevealOnScroll>
          <RevealOnScroll>
            <h2>Our 1-2-3 Process</h2>
            <div className="why-invest__list">
              {steps.map((s, i) => (
                <div className="why-invest__item" key={s.title}>
                  <h3>
                    {i + 1}. {s.title}
                  </h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <BranchFinder />
      <CTASection />
    </>
  );
}
