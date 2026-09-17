import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import BranchInfoCard from '../components/BranchInfoCard';
import BranchQuickLinks from '../components/BranchQuickLinks';
import CTASection from '../components/CTASection';
import { branches } from '../data/siteContent';

const branch = branches.find((b) => b.id === 'vaal')!;

export default function VaalTriangleBranch() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Vaal Triangle Homebase"
        subtitle="Our Vaal Triangle branch is situated in Three Rivers, Vereeniging – and it's where it all began in 2020."
      />

      <section className="section">
        <div className="container two-col">
          <RevealOnScroll>
            <img
              src={branch.topImage}
              alt="The IV Booster Bar Vaal Triangle branch"
              loading="lazy"
              decoding="async"
            />
          </RevealOnScroll>
          <RevealOnScroll>
            <p>
              Whether you visit us for the first time or as a regular client, our space is set up
              so our medically qualified team can always assure your health and vitality come
              first, by being approachable to suit every individual's needs.
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
            <iframe src={branch.mapEmbed} loading="lazy" title="Vaal Triangle branch map" />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  );
}
