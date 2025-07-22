interface LegendProps {
  activeView: 'outbound' | 'return' | 'both';
}

const MapLegend = ({ activeView }: LegendProps) => {
  return (
    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 min-w-[200px] z-[1000]">
      <div className="space-y-3">
        {/* Route indicators */}
        {(activeView === 'outbound' || activeView === 'both') && (
          <div className="flex items-center gap-3">
            <div className="w-4 h-1 bg-blue-500 rounded-full" />
            <span className="text-sm font-medium">Outbound</span>
            <span className="text-xs text-gray-500 ml-auto">370kg</span>
          </div>
        )}
        
        {(activeView === 'return' || activeView === 'both') && (
          <div className="flex items-center gap-3">
            <div className="w-4 h-1 bg-orange-500 rounded-full" />
            <span className="text-sm font-medium">Return</span>
            <span className="text-xs text-gray-500 ml-auto">301kg</span>
          </div>
        )}

        {/* Airport legend */}
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm" />
              <span className="text-xs text-gray-600">Outbound only</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-white shadow-sm" />
              <span className="text-xs text-gray-600">Return only</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-sm" />
              <span className="text-xs text-gray-600">Both routes</span>
            </div>
          </div>
        </div>

        {/* Total */}
        {activeView === 'both' && (
          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Total</span>
              <span className="text-sm font-bold text-green-600">671kg CO₂</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">21% below average</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapLegend;