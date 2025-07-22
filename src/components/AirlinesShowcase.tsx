import { useState } from 'react';
import { Plane, Star, Award, Users } from 'lucide-react';

const AirlinesShowcase = () => {
  const [activeAirline, setActiveAirline] = useState(0);

  const airlines = [
    {
      name: 'Cebu Pacific',
      country: 'Philippines',
      segments: 3,
      aircraft: ['A320', 'A330'],
      emissions: '285 kg CO₂e',
      description: 'The Philippines\' largest airline, connecting our journey from start to finish with reliable service and extensive domestic network.',
      highlights: ['Largest Philippine carrier', 'Extensive route network', 'Modern fleet'],
      color: 'primary'
    },
    {
      name: 'Jetstar',
      country: 'Australia/Japan',
      segments: 2,
      aircraft: ['A320', 'A321'],
      emissions: '325 kg CO₂e',
      description: 'Low-cost carrier excellence connecting Manila to Tokyo and onward to Sapporo with efficient operations.',
      highlights: ['Budget-friendly', 'Pacific routes', 'Reliable operations'],
      color: 'accent'
    },
    {
      name: 'Peach Aviation',
      country: 'Japan',
      segments: 1,
      aircraft: ['A320'],
      emissions: '35 kg CO₂e',
      description: 'Japan\'s vibrant low-cost carrier bringing efficiency and style to domestic Japanese aviation.',
      highlights: ['Japanese LCC leader', 'Domestic expertise', 'Modern operations'],
      color: 'primary'
    },
    {
      name: 'Cebgo',
      country: 'Philippines',
      segments: 1,
      aircraft: ['ATR 72-600'],
      emissions: '26 kg CO₂e',
      description: 'Regional aviation specialist providing essential connectivity to secondary Philippine cities with turboprop efficiency.',
      highlights: ['Regional specialist', 'Turboprop efficiency', 'Secondary cities'],
      color: 'accent'
    }
  ];

  const aircraftTypes = [
    {
      model: 'Airbus A330',
      category: 'Wide-body',
      airlines: ['Cebu Pacific'],
      efficiency: 'High',
      description: 'Long-haul workhorse for international routes'
    },
    {
      model: 'Airbus A321',
      category: 'Narrow-body',
      airlines: ['Jetstar'],
      efficiency: 'Very High',
      description: 'Extended range single-aisle for medium-haul routes'
    },
    {
      model: 'Airbus A320',
      category: 'Narrow-body',
      airlines: ['Cebu Pacific', 'Jetstar', 'Peach'],
      efficiency: 'Excellent',
      description: 'Industry standard for short to medium-haul flights'
    },
    {
      model: 'ATR 72-600',
      category: 'Turboprop',
      airlines: ['Cebgo'],
      efficiency: 'Outstanding',
      description: 'Regional specialist with exceptional fuel efficiency'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Airlines & Aircraft
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four distinctive airlines and five aircraft types showcasing the diversity 
            and efficiency of modern Asian aviation networks
          </p>
        </div>

        {/* Airlines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {airlines.map((airline, index) => (
            <div
              key={airline.name}
              className={`flight-card cursor-pointer transition-all duration-500 ${
                activeAirline === index ? 'ring-2 ring-primary shadow-hover' : ''
              }`}
              onClick={() => setActiveAirline(index)}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${airline.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                    <Plane className={`w-6 h-6 ${airline.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{airline.name}</h3>
                    <p className="text-muted-foreground">{airline.country}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{airline.segments}</div>
                  <div className="text-sm text-muted-foreground">Segments</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {airline.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Aircraft Used</div>
                  <div className="font-semibold">{airline.aircraft.join(', ')}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Total Emissions</div>
                  <div className="font-semibold text-accent">{airline.emissions}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {airline.highlights.map((highlight, idx) => (
                  <span 
                    key={idx}
                    className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {activeAirline === index && (
                <div className="mt-6 pt-6 border-t border-border animate-fade-in-up">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-accent" />
                    <span className="font-semibold">Journey Contribution</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Operated {airline.segments} flight{airline.segments > 1 ? 's' : ''} using {airline.aircraft.length} different aircraft types, 
                    contributing to our journey's efficiency and reliability.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Aircraft Types */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12">Aircraft Fleet Diversity</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aircraftTypes.map((aircraft, index) => (
              <div key={aircraft.model} className="bg-white/70 rounded-2xl p-6 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-full ${index % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10'}`}>
                    <Plane className={`w-5 h-5 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{aircraft.category}</div>
                  </div>
                </div>
                
                <h4 className="font-bold text-lg mb-2">{aircraft.model}</h4>
                <p className="text-sm text-muted-foreground mb-4">{aircraft.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Efficiency:</span>
                    <span className="font-semibold text-accent">{aircraft.efficiency}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Used by: {aircraft.airlines.join(', ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-muted-foreground">Airlines</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">5</div>
              <div className="text-muted-foreground">Aircraft Types</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-muted-foreground">Reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirlinesShowcase;