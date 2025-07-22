import { TrendingUp, Globe, Lightbulb, Heart, ArrowRight } from 'lucide-react';

const JourneyInsights = () => {
  const insights = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Asian Aviation Networks",
      content: "Our journey showcases the remarkable connectivity of Asian aviation, where multiple carriers seamlessly connect diverse destinations across the Pacific.",
      highlight: "4 airlines, 3 countries, infinite possibilities"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Route Optimization",
      content: "Strategic routing through major hubs like Manila and Tokyo Narita demonstrates how modern aviation maximizes efficiency while maintaining flexibility.",
      highlight: "21% below average emissions through smart planning"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Multi-Carrier Benefits",
      content: "Utilizing different airlines for each segment allowed us to leverage each carrier's strengths - from Cebu Pacific's domestic network to Jetstar's Pacific routes.",
      highlight: "Best of each airline's specialized routes"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cultural Bridge",
      content: "This journey represents more than transportation - it's a cultural bridge connecting the warm hospitality of the Philippines with Japan's precision and innovation.",
      highlight: "Two cultures, one unforgettable experience"
    }
  ];

  const tips = [
    "Book multi-segment journeys to access better routing options",
    "Consider regional carriers for final segments to secondary cities",
    "Monitor emissions data to make environmentally conscious choices",
    "Embrace hub connections for more flexible scheduling",
    "Research each airline's strengths for optimal experience"
  ];

  return (
    <section className="py-20 bg-gradient-horizon">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Journey Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reflections on modern international aviation, route efficiency, 
            and the art of connecting distant cultures through smart travel
          </p>
        </div>

        {/* Main Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {insights.map((insight, index) => (
            <div key={index} className="flight-card group">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full group-hover:animate-takeoff">
                  {insight.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {insight.content}
                  </p>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <div className="text-sm font-semibold text-accent">
                      {insight.highlight}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Tips Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Smart Travel Planning Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gradient-card rounded-xl hover-lift">
                <div className="bg-primary/20 p-2 rounded-full mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <p className="text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Your Own Aviation Adventure?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our journey inspire your next international adventure. 
              Smart routing, environmental consciousness, and cultural exploration await.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flight-card text-center hover-lift">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Plan Your Route</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Use multi-carrier strategies for optimal routing
                </p>
                <button className="text-primary font-semibold hover:underline flex items-center gap-2 mx-auto">
                  Start Planning <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flight-card text-center hover-lift">
                <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold mb-2">Share Your Story</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Inspire others with your travel experiences
                </p>
                <button className="text-accent font-semibold hover:underline flex items-center gap-2 mx-auto">
                  Share Journey <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flight-card text-center hover-lift">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Track Emissions</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Monitor your environmental impact
                </p>
                <button className="text-primary font-semibold hover:underline flex items-center gap-2 mx-auto">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-gradient-flight rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Join the Efficient Travel Movement</h4>
              <p className="mb-6 opacity-90">
                Every smart routing choice contributes to a more sustainable future for aviation. 
                Your next journey could be 20-30% more efficient with proper planning.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyInsights;