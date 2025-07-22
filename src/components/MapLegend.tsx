interface LegendProps {
  activeView: 'outbound' | 'return' | 'both';
}

const MapLegend = ({ activeView }: LegendProps) => {
  const legendItems = [
    ...(activeView === 'outbound' || activeView === 'both' ? [{
      label: 'Outbound Route',
      color: '#3b82f6',
      details: 'CGY → MNL → NRT → CTS',
      emissions: '370 kg CO₂e'
    }] : []),
    ...(activeView === 'return' || activeView === 'both' ? [{
      label: 'Return Route', 
      color: '#f59e0b',
      details: 'CTS → NRT → CEB → CGY',
      emissions: '301 kg CO₂e'
    }] : [])
  ];

  const severityLevels = [
    { label: 'Low Emissions', color: '#22c55e', range: '< 50 kg' },
    { label: 'Medium Emissions', color: '#f59e0b', range: '50-200 kg' },
    { label: 'High Emissions', color: '#ef4444', range: '> 200 kg' }
  ];

  return (
    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 min-w-[280px] max-w-[320px] z-[1000]">
      <h3 className="font-semibold text-foreground mb-4">Flight Routes</h3>
      
      <div className="space-y-3 mb-6">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div 
              className="w-4 h-1 mt-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <div className="flex-1">
              <div className="font-medium text-sm">{item.label}</div>
              <div className="text-xs text-muted-foreground">{item.details}</div>
              <div className="text-xs font-medium text-accent">{item.emissions}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-4">
        <h4 className="font-medium text-sm mb-3">Emission Levels</h4>
        <div className="space-y-2">
          {severityLevels.map((level, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: level.color }}
              />
              <div className="text-xs">
                <span className="font-medium">{level.label}</span>
                <span className="text-muted-foreground ml-1">({level.range})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-4 mt-4">
        <div className="text-xs text-muted-foreground">
          <div className="flex justify-between mb-1">
            <span>Total Journey:</span>
            <span className="font-medium">671 kg CO₂e</span>
          </div>
          <div className="flex justify-between">
            <span>vs. Average:</span>
            <span className="font-medium text-green-600">21% below</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLegend;