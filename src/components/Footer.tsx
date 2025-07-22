import { Plane, Heart, Globe, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-white/20 p-3 rounded-full">
              <Plane className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold">Journey Through the Skies</h3>
          </div>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            A testament to the efficiency and beauty of modern Asian aviation networks, 
            connecting cultures and minimizing environmental impact through smart routing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white/10 p-4 rounded-full w-fit mx-auto mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h4 className="font-bold mb-3">Total Journey</h4>
            <div className="space-y-1 text-primary-foreground/80">
              <p>6 flights across 4 airlines</p>
              <p>671 kg CO₂e total emissions</p>
              <p>21% below average impact</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 p-4 rounded-full w-fit mx-auto mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-bold mb-3">Cultural Bridge</h4>
            <div className="space-y-1 text-primary-foreground/80">
              <p>Philippines ↔ Japan</p>
              <p>Two amazing cultures</p>
              <p>One unforgettable experience</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 p-4 rounded-full w-fit mx-auto mb-4">
              <Share2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold mb-3">Share the Journey</h4>
            <div className="space-y-2">
              <button className="block w-full bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                Copy Link
              </button>
              <button className="block w-full bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                Social Share
              </button>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-primary-foreground/60 mb-2">
            Created with ✈️ and 💙 • October 2025
          </p>
          <p className="text-sm text-primary-foreground/40">
            A showcase of modern aviation efficiency and environmental consciousness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;