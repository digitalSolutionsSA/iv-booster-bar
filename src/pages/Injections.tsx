import PageHero from '../components/PageHero';
import IntroSplit from '../components/IntroSplit';
import ItemGrid from '../components/ItemGrid';
import BranchFinder from '../components/BranchFinder';
import CTASection from '../components/CTASection';
import { injections } from '../data/siteContent';

const steps = [
  { title: 'Consultation', text: 'We discuss your health needs and determine the best injection for you.' },
  { title: 'Quick Administration', text: 'Performed by qualified professionals in a safe, comfortable setting.' },
  { title: 'Back to Your Day', text: 'No downtime required.' },
];

export default function Injections() {
  return (
    <>
      <PageHero
        eyebrow="Injections at The IV Booster Bar & Medical Centre"
        title="Fast, Effective Wellness Support"
        subtitle="One small injection, big results. Our wide range of injectable therapies offers a quick and efficient way to get the nutrients and treatments you need."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Our Injection Options</h2>
          </div>
          <ItemGrid items={injections} />
        </div>
      </section>

      <IntroSplit image="/images/services/injections-clinic.jpg" alt="Nurse preparing a vitamin injection" title="How It Works" altBg reverse>
        <div className="intro-split__steps">
          {steps.map((s, i) => (
            <div className="item-card" key={s.title}>
              <span className="eyebrow">Step {i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </IntroSplit>

      <BranchFinder />
      <CTASection />
    </>
  );
}
