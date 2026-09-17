import PageHero from '../components/PageHero';
import RevealOnScroll from '../components/RevealOnScroll';
import './PrivacyPolicy.css';

const sections = [
  {
    title: 'Introduction',
    body: `At The IV Booster Bar & Medical Centre, your privacy is important to us. This policy explains how we collect, use, store, and protect your personal information when you visit our website or use our services.`,
  },
  {
    title: 'What Information We Collect',
    body: `We may collect the following information: personal details such as your name, email address, phone number, and physical address; health information related to your wellness treatments and medical history, provided voluntarily; website usage data including cookies, IP address, browser type, and pages visited; and booking information you provide when scheduling appointments.`,
  },
  {
    title: 'How We Use Your Information',
    body: `Your information helps us to provide and manage our services (including bookings and consultations), communicate with you about your appointments and treatment plans, improve our website and services based on usage data, and comply with legal obligations and protect your rights.`,
  },
  {
    title: 'How We Share Your Information',
    body: `We do not sell or rent your personal information. We may share it only with trusted service providers who help us operate our business (under confidentiality agreements), or when required by law or to protect your or others' safety.`,
  },
  {
    title: 'Cookies and Tracking Technologies',
    body: `Our website uses cookies and similar technologies to improve your experience. Cookies may collect information about your browsing habits. You can control cookies through your browser settings or via our cookie consent banner.`,
  },
  {
    title: 'Data Security',
    body: `We take reasonable measures to protect your data from unauthorized access, loss, or misuse. However, no online system is completely secure.`,
  },
  {
    title: 'Your Rights',
    body: `Under POPIA, you have the right to access the personal information we hold about you, request correction or deletion of your data, object to or restrict processing of your personal information, and withdraw your consent at any time. To exercise these rights, please contact us at info@ivboosterbar.co.za (Vaal) or sandton@ivboosterbar.co.za (Sandton).`,
  },
  {
    title: 'Retention of Information',
    body: `We keep your personal data only as long as necessary for the purposes it was collected, or as required by law.`,
  },
  {
    title: 'Changes to This Policy',
    body: `We may update this privacy policy from time to time. The latest version will always be available on our website.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="section privacy-policy">
        <div className="container" style={{ maxWidth: 780 }}>
          {sections.map((s) => (
            <RevealOnScroll key={s.title} y={16}>
              <h2>{s.title}</h2>
              <p>{s.body}</p>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
