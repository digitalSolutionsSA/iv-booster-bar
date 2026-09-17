import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import BookingForm from '../components/BookingForm';

export default function BookConsultation() {
  return (
    <>
      <PageHero
        eyebrow="Let's Get You Boosted"
        title="Book a Consultation"
        subtitle="Your drip is one step away. No fuss, no waiting. Just pick your date and we'll handle the rest."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <RevealOnScroll>
            <BookingForm />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
