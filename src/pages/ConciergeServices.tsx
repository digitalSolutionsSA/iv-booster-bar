import PageHero from '../components/PageHero';
import ItemGrid from '../components/ItemGrid';
import IntroSplit from '../components/IntroSplit';
import CTASection from '../components/CTASection';

const conciergeExperience = [
  {
    name: 'Bespoke In-Home IV Therapy',
    text: 'Custom vitamin infusions, hydration boosts, and wellness drips administered exactly where you are most relaxed.',
  },
  {
    name: 'Luxury Hotel & Travel Revival',
    text: 'Step off a long international flight and straight into rejuvenation. We come directly to your hotel room to erase jet lag, restore hydration, and boost your energy for the holiday ahead.',
  },
  {
    name: 'Aviation & Flight Crew Care',
    text: 'We proudly cater to the professionals who ensure a seamless journey. Dedicated wellness and recovery treatments tailored specifically for flight captains, pilots, and cabin crew.',
  },
  {
    name: 'Corporate & Event Group Bookings',
    text: 'Tailored wellness packages designed to elevate private events, corporate wellness days, or executive meetings.',
  },
];

export default function ConciergeServices() {
  return (
    <>
      <PageHero
        eyebrow="Elite Concierge Medical Services"
        title="Premium Wellness, Delivered Directly to Your Door"
        subtitle="Skip the traffic and the waiting room. Experience medical-grade wellness in the absolute comfort and privacy of your own space."
      />

      <IntroSplit
        image="/images/services/concierge.jpg"
        alt="Nurse administering IV drips to a couple in a luxury hotel room"
        eyebrow="Mobile Concierge Service"
        title="Healthcare that adapts to your schedule"
      >
        <p>
          At <strong>The IV Booster Bar &amp; Medical Centre</strong>, we believe that exceptional
          healthcare should adapt to your schedule, not the other way around. Our premium{' '}
          <strong>Mobile Concierge Service</strong> brings our full suite of medical and IV
          therapies directly to your home, luxury hotel room, or office.
        </p>
        <p>
          Skip the traffic and the waiting room. Experience medical-grade wellness in the absolute
          comfort and privacy of your own space.
        </p>
      </IntroSplit>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <h2>The Concierge Experience</h2>
          </div>
          <ItemGrid items={conciergeExperience} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
