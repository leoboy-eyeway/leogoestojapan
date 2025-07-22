import { useState } from 'react';
import { Plane, MapPin, Clock, Leaf, Star } from 'lucide-react';

const ReturnJourney = () => {
  const [activeSegment, setActiveSegment] = useState(0);

  const segments = [
    {
      id: 'cts-nrt',
      airline: 'Peach Aviation',
      aircraft: 'Airbus A320',
      departure: { code: 'CTS', city: 'Sapporo', time: '07:30' },
      arrival: { code: 'NRT', city: 'Tokyo Narita', time: '09:05' },
      duration: '1h 35m',
      emissions: '35 kg CO₂e',
      description: 'Beginning our return with Peach Aviation\'s vibrant A320, departing Hokkaido\'s snowy landscapes'
    },
    {
      id: 'nrt-ceb',
      airline: 'Cebu Pacific',
      aircraft: 'Airbus A330',
      departure: { code: 'NRT', city: 'Tokyo Narita', time: '11:50' },
      arrival: { code: 'CEB', city: 'Cebu', time: '16:05' },
      duration: '3h 15m',
      emissions: '240 kg CO₂e',
      description: 'The efficient trans-Pacific crossing back to the Philippines with Cebu Pacific\'s reliable A330'
    },
    {
      id: 'ceb-cgy',
      airline: 'Cebgo',
      aircraft: 'ATR 72-600',
      departure: { code: 'CEB', city: 'Cebu', time: '18:15' },
      arrival: { code: 'CGY', city: 'Cagayan de Oro', time: '19:30' },
      duration: '1h 15m',
      emissions: '26 kg CO₂e',
      description: 'Final hop home aboard Cebgo\'s efficient turboprop, showcasing regional aviation excellence'
    }
  ];

  return (
    <section className="py-20 bg-gradient-sky">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Efficient Return
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-accent" />
            <p className="text-xl text-muted-foreground">
              Japan to Philippines • October 24, 2025 • 3 Flights • 301 kg CO₂e
            </p>
            <Star className="w-6 h-6 text-accent" />
          </div>
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full">
            <Leaf className="w-5 h-5" />
            <span className="font-semibold">31% Below Average Emissions</span>
          </div>
        </div>

        {/* Route Overview */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-16 gap-8">
          <div className="flex items-center gap-4 text-2xl font-bold text-foreground">
            <div className="bg-accent/10 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            CTS
            <div className="flex-1 h-1 bg-gradient-to-r from-accent to-primary rounded-full min-w-[100px]"></div>
            NRT
            <div className="flex-1 h-1 bg-gradient-to-r from-primary to-accent rounded-full min-w-[100px]"></div>
            CEB
            <div className="flex-1 h-1 bg-gradient-to-r from-accent to-primary rounded-full min-w-[100px]"></div>
            CGY
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Flight Segments */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div
              key={segment.id}
              className={`flight-card cursor-pointer transition-all duration-500 ${
                activeSegment === index ? 'ring-2 ring-accent shadow-hover' : ''
              }`}
              onClick={() => setActiveSegment(index)}
            >
              {/* Segment Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <Plane className="w-5 h-5 text-accent" />
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
                  <div className="font-semibold text-accent">{segment.airline}</div>
                  <div className="text-sm text-muted-foreground">{segment.aircraft}</div>
                </div>
              </div>

              {/* Flight Times */}
              <div className="flex items-center justify-between mb-6 p-4 bg-accent/10 rounded-lg">
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

              {/* Emissions with special highlight */}
              <div className="flex items-center justify-between mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium">Low Emissions</span>
                </div>
                <span className="font-bold text-green-600">{segment.emissions}</span>
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
                      <div className="font-medium text-green-600">Excellent</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Return Journey Highlights */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flight-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Environmental Excellence</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              The return journey achieved remarkable efficiency with 31% lower emissions than average routes.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Emissions:</span>
                <span className="font-bold text-green-600">301 kg CO₂e</span>
              </div>
              <div className="flex justify-between">
                <span>Average Route:</span>
                <span className="line-through text-muted-foreground">437 kg CO₂e</span>
              </div>
              <div className="flex justify-between text-green-600 font-bold">
                <span>Savings:</span>
                <span>136 kg CO₂e</span>
              </div>
            </div>
          </div>

          <div className="flight-card">
            <h3 className="text-xl font-bold mb-4">Journey Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">5h 65m</div>
                <div className="text-sm text-muted-foreground">Total Flight Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">3</div>
                <div className="text-sm text-muted-foreground">Different Airlines</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">2</div>
                <div className="text-sm text-muted-foreground">Aircraft Types</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">31%</div>
                <div className="text-sm text-muted-foreground">Below Average</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnJourney;