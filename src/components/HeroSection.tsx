import { useState, useEffect } from 'react';
import { Plane, MapPin, Calendar } from 'lucide-react';
import heroSky from '@/assets/hero-sky.jpg';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroSky})` }}
      >
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="animate-cloud-drift absolute top-20 left-10 w-20 h-12 bg-white/20 rounded-full blur-sm"></div>
        <div className="animate-cloud-drift absolute top-40 right-20 w-16 h-8 bg-white/15 rounded-full blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="animate-cloud-drift absolute bottom-40 left-20 w-24 h-10 bg-white/10 rounded-full blur-sm" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Flying Plane Animation */}
      <div className="absolute top-1/3 left-0 animate-flight-path">
        <Plane className="text-white w-8 h-8" />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center text-white px-6 max-w-5xl mx-auto transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">October 20-24, 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Journey Through
            <br />
            <span className="text-gradient bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              the Skies
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            An epic aviation story connecting the Philippines to Japan through 
            six flights, four airlines, and unforgettable experiences across Asian skies
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
            <div className="flex items-center justify-center mb-3">
              <Plane className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold mb-2">6 Flights</div>
            <div className="text-white/80">Complete Journey</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
            <div className="flex items-center justify-center mb-3">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold mb-2">671 kg</div>
            <div className="text-white/80">Total CO₂e</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
            <div className="flex items-center justify-center mb-3">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                %
              </div>
            </div>
            <div className="text-3xl font-bold mb-2">21% Below</div>
            <div className="text-white/80">Average Emissions</div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-flight hover:scale-105 animate-pulse-glow">
          Begin the Journey
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;