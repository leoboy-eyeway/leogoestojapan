import { useState } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import MapView from '@/components/MapView';
import MapLegend from '@/components/MapLegend';

const Index = () => {
  const [activeView, setActiveView] = useState<'outbound' | 'return' | 'both'>('both');

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <DashboardHeader 
        activeView={activeView} 
        onViewChange={setActiveView} 
      />
      
      <div className="flex-1 relative">
        <MapView activeView={activeView} />
        <MapLegend activeView={activeView} />
      </div>
    </div>
  );
};

export default Index;
