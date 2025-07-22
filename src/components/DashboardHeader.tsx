import { useState } from 'react';
import { Layers, Filter, FileText, Plane, BarChart3 } from 'lucide-react';

interface DashboardHeaderProps {
  activeView: 'outbound' | 'return' | 'both';
  onViewChange: (view: 'outbound' | 'return' | 'both') => void;
}

const DashboardHeader = ({ activeView, onViewChange }: DashboardHeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <Plane className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Flight Journey Dashboard</h1>
          </div>
          
          <nav className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
            <button
              onClick={() => onViewChange('outbound')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeView === 'outbound'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Outbound
            </button>
            <button
              onClick={() => onViewChange('return')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeView === 'return'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Return
            </button>
            <button
              onClick={() => onViewChange('both')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeView === 'both'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Both Routes
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            Total Data: <span className="font-semibold text-foreground">671 kg CO₂e</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;