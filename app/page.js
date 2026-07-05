import CursorGlow from '@/components/CursorGlow';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Pillars from '@/components/Pillars';
import HowItWorks from '@/components/HowItWorks';
import FeatureScrolly from '@/components/FeatureScrolly';
import SosDemo from '@/components/SosDemo';
import Plans from '@/components/Plans';
import Privacy from '@/components/Privacy';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Safe Ride',
  operatingSystem: 'ANDROID',
  applicationCategory: 'LifestyleApplication',
  description:
    'Personal-safety companion: share live location with trusted contacts, send one-tap SOS alerts, and set safety check-ins that alert your circle automatically.',
  url: 'https://saferride.org/',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <Ticker />
        <HowItWorks />
        <FeatureScrolly />
        <SosDemo />
        <Plans />
        <Privacy />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
