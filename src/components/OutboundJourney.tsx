import { useState } from 'react';
import { Plane, MapPin, Clock, Users, Fuel } from 'lucide-react';

const OutboundJourney = () => {
  const [activeSegment, setActiveSegment] = useState(0);

  const segments = [
    {
      id: 'cgy-mnl',
      airline: 'Cebu Pacific',
      aircraft: 'Airbus A330',
      departure: { code: 'CGY', city: 'Cagayan de Oro', time: '06:25' },
      arrival: { code: 'MNL', city: 'Manila', time: '08:00' },
      duration: '1h 35m',
      emissions: '45 kg CO₂e',
      description: 'Starting our adventure with Cebu Pacific\'s reliable A330, departing early morning from the "City of Golden Friendship"'
    },
    {
      id: 'mnl-nrt',
      airline: 'Jetstar',
      aircraft: 'Airbus A321',
      departure: { code: 'MNL', city: 'Manila', time: '12:45' },
      arrival: { code: 'NRT', city: 'Tokyo Narita', time: '17:25' },
      duration: '3h 40m',
      emissions: '285 kg CO₂e',
      description: 'The main international leg with Jetstar, crossing the vast Pacific to reach Japan\'s primary gateway'
    },
    {
      id: 'nrt-cts',
      airline: 'Jetstar',
      aircraft: 'Airbus A320',
      departure: { code: 'NRT', city: 'Tokyo Narita', time: '19:15' },
      arrival: { code: 'CTS', city: 'Sapporo', time: '20:50' },
      duration: '1h 35m',
      emissions: '40 kg CO₂e',
      description: 'Final domestic hop to Hokkaido, Japan\'s northernmost island, aboard Jetstar\'s efficient A320'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Outbound Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Philippines to Japan • October 20, 2025 • 3 Flights • 370 kg CO₂e
          </p>
        </div>

        {/* Route Overview */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-16 gap-8">
          <div className="flex items-center gap-4 text-2xl font-bold text-foreground">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            CGY
            <div className="flex-1 h-1 bg-gradient-flight rounded-full min-w-[100px]"></div>
            MNL
            <div className="flex-1 h-1 bg-gradient-flight rounded-full min-w-[100px]"></div>
            NRT
            <div className="flex-1 h-1 bg-gradient-flight rounded-full min-w-[100px]"></div>
            CTS
            <div className="bg-accent/10 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>

        {/* Flight Segments */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div
              key={segment.id}
              className={`flight-card cursor-pointer transition-all duration-500 ${
                activeSegment === index ? 'ring-2 ring-primary shadow-hover' : ''
              }`}
              onClick={() => setActiveSegment(index)}
            >
              {/* Segment Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Plane className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">
                      {segment.departure.code} → {segment.arrival.code}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Segment {index + 1}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-primary">{segment.airline}</div>
                  <div className="text-sm text-muted-foreground">{segment.aircraft}</div>
                </div>
              </div>

              {/* Flight Times */}
              <div className="flex items-center justify-between mb-6 p-4 bg-secondary/30 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">{segment.departure.time}</div>
                  <div className="text-sm text-muted-foreground">{segment.departure.city}</div>
                  <div className="font-semibold">{segment.departure.code}</div>
                </div>
                <div className="text-center flex-1 mx-4">
                  <div className="flex items-center justify-center mb-2">
                    <div className="flex-1 h-px bg-muted"></div>
                    <Clock className="w-4 h-4 mx-2 text-muted-foreground" />
                    <div className="flex-1 h-px bg-muted"></div>
                  </div>
                  <div className="text-sm font-medium">{segment.duration}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{segment.arrival.time}</div>
                  <div className="text-sm text-muted-foreground">{segment.arrival.city}</div>
                  <div className="font-semibold">{segment.arrival.code}</div>
                </div>
              </div>

              {/* Emissions */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Fuel className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">Emissions</span>
                </div>
                <span className="font-bold text-accent">{segment.emissions}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {segment.description}
              </p>

              {/* Expand indicator for active segment */}
              {activeSegment === index && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Aircraft:</span>
                      <div className="font-medium">{segment.aircraft}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Efficiency:</span>
                      <div className="font-medium text-accent">Optimized</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-card rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Outbound Journey Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6h 50m</div>
              <div className="text-muted-foreground">Total Flight Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">370 kg</div>
              <div className="text-muted-foreground">CO₂e Emissions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">12%</div>
              <div className="text-muted-foreground">Below Average</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutboundJourney;