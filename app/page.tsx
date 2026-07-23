import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeaturesSection from '@/components/FeaturesSection';
import JourneySection from '@/components/JourneySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <TestimonialsSection />
        <FeaturesSection />
        <JourneySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}