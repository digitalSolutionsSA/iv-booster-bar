import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import BranchFinder from '../components/BranchFinder';
import CTASection from '../components/CTASection';
import { galleryPhotos } from '../data/siteContent';

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Step Inside The IV Booster Bar & Medical Centre"
        subtitle="Our gallery highlights the calm, modern spaces, friendly team, and wellness-focused environment that make us a trusted choice in the Vaal Triangle and Sandton."
      />

      <section className="section">
        <div className="container">
          <h2 className="gallery-section__title">Our Vaal Triangle Branch</h2>
          <RevealOnScroll className="gallery-grid" y={20} stagger={0.05}>
            {galleryPhotos.vaal.map((src) => (
              <a href={src} target="_blank" rel="noreferrer" key={src}>
                <img src={src} alt="Vaal Triangle branch" loading="lazy" decoding="async" />
              </a>
            ))}
          </RevealOnScroll>

          <h2 className="gallery-section__title">Our Sandton Branch</h2>
          <RevealOnScroll className="gallery-grid" y={20} stagger={0.05}>
            {galleryPhotos.sandton.map((src) => (
              <a href={src} target="_blank" rel="noreferrer" key={src}>
                <img src={src} alt="Sandton branch" loading="lazy" decoding="async" />
              </a>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <BranchFinder />
      <CTASection />
    </>
  );
}
