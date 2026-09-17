import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import BranchInfoCard from '../components/BranchInfoCard';
import BookingForm from '../components/BookingForm';
import { branches } from '../data/siteContent';

export default function ContactUs() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're Here to Help"
        subtitle="Whether you're ready to book, have a question, or just want to know which IV drip is right for you, we're here to help."
      />

      <section className="section">
        <div className="container">
          <RevealOnScroll className="branch-finder__grid" y={20}>
            {branches.map((b) => (
              <BranchInfoCard branch={b} key={b.id} />
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="section-head">
            <span className="eyebrow">Let's Get Dripping.</span>
            <h2>We're Just a Message Away</h2>
          </div>
          <RevealOnScroll>
            <BookingForm />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
