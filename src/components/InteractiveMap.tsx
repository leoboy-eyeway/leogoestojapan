import { useState, useEffect } from 'react';
import { MapPin, Plane, Info } from 'lucide-react';
import flightMapImg from '@/assets/flight-map.jpg';

const InteractiveMap = () => {
  const [activeRoute, setActiveRoute] = useState<'outbound' | 'return'>('outbound');
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  const airports = {
    CGY: { name: 'Cagayan de Oro', country: 'Philippines', x: 15, y: 65 },
    MNL: { name: 'Manila', country: 'Philippines', x: 12, y: 55 },
    CEB: { name: 'Cebu', country: 'Philippines', x: 14, y: 58 },
    NRT: { name: 'Tokyo Narita', country: 'Japan', x: 85, y: 35 },
    CTS: { name: 'Sapporo', country: 'Japan', x: 88, y: 25 }
  };

  const routes = {
    outbound: [
      { from: 'CGY', to: 'MNL', color: 'primary', delay: 0 },
      { from: 'MNL', to: 'NRT', color: 'primary', delay: 1 },
      { from: 'NRT', to: 'CTS', color: 'primary', delay: 2 }
    ],
    return: [
      { from: 'CTS', to: 'NRT', color: 'accent', delay: 0 },
      { from: 'NRT', to: 'CEB', color: 'accent', delay: 1 },
      { from: 'CEB', to: 'CGY', color: 'accent', delay: 2 }
    ]
  };

  const routeInfo = {
    outbound: {
      title: 'Outbound Journey',
      subtitle: 'Philippines → Japan',
      details: '3 flights • 370 kg CO₂e • 12% below average',
      path: 'CGY → MNL → NRT → CTS'
    },
    return: {
      title: 'Return Journey', 
      subtitle: 'Japan → Philippines',
      details: '3 flights • 301 kg CO₂e • 31% below average',
      path: 'CTS → NRT → CEB → CGY'
    }
  };

  return (
    <section className="py-20 bg-gradient-horizon">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Interactive Flight Map
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the complete journey with interactive waypoints and route details
          </p>
        </div>

        {/* Route Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 border border-border/20">
            <button
              onClick={() => setActiveRoute('outbound')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeRoute === 'outbound'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Outbound Journey
            </button>
            <button
              onClick={() => setActiveRoute('return')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeRoute === 'return'
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Return Journey
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Route Info */}
          <div className="space-y-6">
            <div className="flight-card">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-full ${activeRoute === 'outbound' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                  <Plane className={`w-5 h-5 ${activeRoute === 'outbound' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{routeInfo[activeRoute].title}</h3>
                  <p className="text-muted-foreground">{routeInfo[activeRoute].subtitle}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{routeInfo[activeRoute].details}</span>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3">
                  <div className="text-sm text-muted-foreground mb-1">Flight Path</div>
                  <div className="font-mono font-semibold">{routeInfo[activeRoute].path}</div>
                </div>
              </div>
            </div>

            {/* Airport Details */}
            {hoveredPoint && (
              <div className="flight-card animate-fade-in-up">
                <h4 className="font-bold text-lg mb-2">{airports[hoveredPoint as keyof typeof airports].name}</h4>
                <p className="text-muted-foreground mb-3">{airports[hoveredPoint as keyof typeof airports].country}</p>
                <div className="text-sm">
                  <div className="font-medium">Airport Code: {hoveredPoint}</div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <div className="relative bg-white rounded-3xl p-8 shadow-card">
              <div 
                className="relative w-full h-96 bg-cover bg-center rounded-2xl overflow-hidden"
                style={{ backgroundImage: `url(${flightMapImg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
                
                {/* Airport Points */}
                {Object.entries(airports).map(([code, airport]) => {
                  const isActive = routes[activeRoute].some(route => 
                    route.from === code || route.to === code
                  );
                  
                  return (
                    <div
                      key={code}
                      className={`absolute cursor-pointer transition-all duration-300 ${
                        isActive ? 'animate-pulse-glow' : 'opacity-60'
                      }`}
                      style={{ 
                        left: `${airport.x}%`, 
                        top: `${airport.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onMouseEnter={() => setHoveredPoint(code)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    >
                      <div className={`p-3 rounded-full ${
                        activeRoute === 'outbound' ? 'bg-primary' : 'bg-accent'
                      } text-white shadow-lg hover:scale-110 transition-transform`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold whitespace-nowrap">
                        {code}
                      </div>
                    </div>
                  );
                })}

                {/* Flight Paths */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {routes[activeRoute].map((route, index) => {
                    const from = airports[route.from as keyof typeof airports];
                    const to = airports[route.to as keyof typeof airports];
                    
                    return (
                      <g key={`${route.from}-${route.to}`}>
                        <defs>
                          <linearGradient id={`gradient-${index}`} gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor={activeRoute === 'outbound' ? '#3b82f6' : '#f59e0b'} />
                            <stop offset="100%" stopColor={activeRoute === 'outbound' ? '#1d4ed8' : '#d97706'} />
                          </linearGradient>
                        </defs>
                        <path
                          d={`M ${from.x}% ${from.y}% Q ${(from.x + to.x) / 2}% ${Math.min(from.y, to.y) - 8}% ${to.x}% ${to.y}%`}
                          stroke={`url(#gradient-${index})`}
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="10,5"
                          className="animate-pulse"
                          style={{ animationDelay: `${route.delay * 0.5}s` }}
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-xs font-medium text-muted-foreground mb-2">Flight Routes</div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${activeRoute === 'outbound' ? 'bg-primary' : 'bg-accent'}`}></div>
                    <span className="text-sm">{routeInfo[activeRoute].title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;