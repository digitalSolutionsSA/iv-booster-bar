import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ScrollTrigger } from './lib/gsapSetup';

const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const MeetOurTeam = lazy(() => import('./pages/MeetOurTeam'));
const SandtonBranch = lazy(() => import('./pages/SandtonBranch'));
const VaalTriangleBranch = lazy(() => import('./pages/VaalTriangleBranch'));
const IvDrips = lazy(() => import('./pages/IvDrips'));
const Injections = lazy(() => import('./pages/Injections'));
const CustomizedIvDrips = lazy(() => import('./pages/CustomizedIvDrips'));
const WeightManagement = lazy(() => import('./pages/WeightManagement'));
const WellnessTestsScreening = lazy(() => import('./pages/WellnessTestsScreening'));
const CorporateWellness = lazy(() => import('./pages/CorporateWellness'));
const Gallery = lazy(() => import('./pages/Gallery'));
const BookConsultation = lazy(() => import('./pages/BookConsultation'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Suspense fallback={<div className="route-loading" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-us/meet-our-team" element={<MeetOurTeam />} />
            <Route path="/about-us/sandton-branch" element={<SandtonBranch />} />
            <Route path="/about-us/vaal-triangle-branch" element={<VaalTriangleBranch />} />
            <Route path="/iv-drips" element={<IvDrips />} />
            <Route path="/injections" element={<Injections />} />
            <Route path="/customized-iv-drips" element={<CustomizedIvDrips />} />
            <Route path="/weight-management" element={<WeightManagement />} />
            <Route path="/wellness-tests-screening" element={<WellnessTestsScreening />} />
            <Route path="/corporate-wellness" element={<CorporateWellness />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/book-a-consultation" element={<BookConsultation />} />
            <Route path="/contacts-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
