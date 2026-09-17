import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import BranchInfoCard from '../components/BranchInfoCard';
import BranchQuickLinks from '../components/BranchQuickLinks';
import CTASection from '../components/CTASection';
import { branches } from '../data/siteContent';

const branch = branches.find((b) => b.id === 'sandton')!;

export default function SandtonBranch() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Wellness Hub in Sandton"
        subtitle="At The IV Booster Bar Sandton, we bring premium wellness to one of Johannesburg's most dynamic districts."
      />

      <section className="section">
        <div className="container two-col">
          <RevealOnScroll>
            <img src={branch.topImage} alt="The IV Booster Bar Sandton branch" loading="lazy" decoding="async" />
          </RevealOnScroll>
          <RevealOnScroll>
            <p>
              Whether you're here for a quick boost before a big meeting, a beauty treatment
              before a night out, or a health reset after travel, our Sandton branch combines
              convenience with world-class care.
            </p>
            <p>
              Our modern medical centre is designed to help you look, feel, and perform your best
              – all in a relaxing, private setting.
            </p>
            <BranchQuickLinks />
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container two-col">
          <RevealOnScroll>
            <BranchInfoCard branch={branch} />
          </RevealOnScroll>
          <RevealOnScroll className="map-embed">
            <iframe src={branch.mapEmbed} loading="lazy" title="Sandton branch map" />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  );
}
