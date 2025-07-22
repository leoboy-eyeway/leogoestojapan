import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import JourneyStats from '@/components/JourneyStats';
import OutboundJourney from '@/components/OutboundJourney';
import InteractiveMap from '@/components/InteractiveMap';
import ReturnJourney from '@/components/ReturnJourney';
import AirlinesShowcase from '@/components/AirlinesShowcase';
import JourneyInsights from '@/components/JourneyInsights';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <JourneyStats />
      <OutboundJourney />
      <InteractiveMap />
      <ReturnJourney />
      <AirlinesShowcase />
      <JourneyInsights />
      <Footer />
    </div>
  );
};

export default Index;
