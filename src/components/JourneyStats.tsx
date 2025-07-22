import { BarChart3, Plane, Globe, Leaf } from 'lucide-react';

const JourneyStats = () => {
  const stats = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Total Distance",
      value: "8,847 km",
      subtitle: "Across 6 flights",
      color: "primary"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Airlines Used", 
      value: "4",
      subtitle: "Cebu Pacific, Jetstar, Peach, Cebgo",
      color: "accent"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Aircraft Types",
      value: "5",
      subtitle: "A320, A321, A330, ATR 72",
      color: "primary"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "CO₂ Savings",
      value: "21%",
      subtitle: "Below average emissions",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-sky">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Journey by the Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive look at our efficient multi-stop journey showcasing 
            the interconnected nature of modern Asian aviation networks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flight-card text-center hover-lift group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${stat.color}/10 text-${stat.color} mb-6 group-hover:animate-takeoff`}>
                {stat.icon}
              </div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                {stat.title}
              </h3>
              <div className="text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Environmental Impact Highlight */}
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center border border-border/20">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-accent/20 p-4 rounded-full">
              <Leaf className="w-12 h-12 text-accent" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Environmental Consciousness
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our carefully planned routing resulted in <strong>671 kg CO₂e</strong> total emissions,
            significantly below the average for similar international journeys
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/10 rounded-2xl p-6">
              <div className="text-2xl font-bold text-primary mb-2">Outbound</div>
              <div className="text-lg font-semibold mb-1">370 kg CO₂e</div>
              <div className="text-sm text-muted-foreground">12% below average</div>
            </div>
            <div className="bg-accent/10 rounded-2xl p-6">
              <div className="text-2xl font-bold text-accent mb-2">Return</div>
              <div className="text-lg font-semibold mb-1">301 kg CO₂e</div>
              <div className="text-sm text-muted-foreground">31% below average</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyStats;