import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapViewProps {
  activeView: 'outbound' | 'return' | 'both';
}

const MapView = ({ activeView }: MapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const airports = {
    CGY: { lat: 8.4542, lng: 124.6319, name: 'Cagayan de Oro', code: 'CGY', type: 'both' },
    MNL: { lat: 14.5086, lng: 121.0194, name: 'Manila', code: 'MNL', type: 'outbound' },
    CEB: { lat: 10.3077, lng: 123.9094, name: 'Cebu', code: 'CEB', type: 'return' },
    NRT: { lat: 35.7643, lng: 140.3864, name: 'Tokyo Narita', code: 'NRT', type: 'both' },
    CTS: { lat: 42.7752, lng: 141.6920, name: 'Sapporo', code: 'CTS', type: 'both' }
  };

  const routes = {
    outbound: [
      { from: airports.CGY, to: airports.MNL, color: '#3b82f6', weight: 4 },
      { from: airports.MNL, to: airports.NRT, color: '#3b82f6', weight: 6 },
      { from: airports.NRT, to: airports.CTS, color: '#3b82f6', weight: 4 }
    ],
    return: [
      { from: airports.CTS, to: airports.NRT, color: '#f59e0b', weight: 4 },
      { from: airports.NRT, to: airports.CEB, color: '#f59e0b', weight: 6 },
      { from: airports.CEB, to: airports.CGY, color: '#f59e0b', weight: 4 }
    ]
  };

  const createCustomMarker = (airport: any, isActive: boolean) => {
    const getMarkerColor = () => {
      if (!isActive) return '#94a3b8'; // gray for inactive
      if (airport.type === 'outbound') return '#3b82f6'; // blue
      if (airport.type === 'return') return '#f59e0b'; // orange  
      return '#8b5cf6'; // purple for both
    };

    const color = getMarkerColor();
    const size = airport.type === 'both' ? 16 : 12;
    
    return L.divIcon({
      html: `
        <div style="
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          position: relative;
        ">
          <div style="
            position: absolute;
            top: ${size + 8}px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255,255,255,0.95);
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 600;
            color: #374151;
            white-space: nowrap;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
          ">${airport.code}</div>
        </div>
      `,
      className: 'custom-airport-marker',
      iconSize: [size, size],
      iconAnchor: [size/2, size/2]
    });
  };

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [25, 130],
      zoom: 4,
      zoomControl: true,
      attributionControl: false,
      preferCanvas: true
    });

    // Add tile layer with better styling
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '© OpenStreetMap, © CartoDB',
      maxZoom: 19
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current) return;

    const map = mapInstanceRef.current;

    // Clear existing layers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });

    // Determine which airports are active
    const getActiveAirports = () => {
      const outboundAirports = ['CGY', 'MNL', 'NRT', 'CTS'];
      const returnAirports = ['CTS', 'NRT', 'CEB', 'CGY'];
      
      if (activeView === 'outbound') return outboundAirports;
      if (activeView === 'return') return returnAirports;
      return [...new Set([...outboundAirports, ...returnAirports])];
    };

    const activeAirports = getActiveAirports();

    // Add airport markers
    Object.entries(airports).forEach(([code, airport]) => {
      const isActive = activeAirports.includes(code);
      const marker = L.marker([airport.lat, airport.lng], {
        icon: createCustomMarker(airport, isActive)
      })
      .bindPopup(`
        <div style="text-align: center; padding: 4px;">
          <div style="font-weight: bold; font-size: 14px;">${airport.code}</div>
          <div style="font-size: 11px; color: #6b7280;">${airport.name}</div>
        </div>
      `, {
        closeButton: false,
        className: 'custom-popup'
      })
      .addTo(map);
    });

    // Add flight paths
    const routesToShow = activeView === 'both' 
      ? [...routes.outbound, ...routes.return]
      : activeView === 'outbound' 
        ? routes.outbound 
        : routes.return;

    routesToShow.forEach((route, index) => {
      // Main flight path
      L.polyline([
        [route.from.lat, route.from.lng],
        [route.to.lat, route.to.lng]
      ], {
        color: route.color,
        weight: route.weight,
        opacity: 0.8,
        smoothFactor: 1
      }).addTo(map);

      // Animated plane
      setTimeout(() => {
        const midLat = (route.from.lat + route.to.lat) / 2 + (Math.random() - 0.5) * 2;
        const midLng = (route.from.lng + route.to.lng) / 2 + (Math.random() - 0.5) * 2;
        
        const planeIcon = L.divIcon({
          html: `
            <div style="
              font-size: 14px;
              transform: rotate(${Math.atan2(route.to.lat - route.from.lat, route.to.lng - route.from.lng) * 180 / Math.PI}deg);
              filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
            ">✈️</div>
          `,
          className: 'plane-icon',
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        });

        L.marker([midLat, midLng], { icon: planeIcon }).addTo(map);
      }, index * 300);
    });

  }, [activeView]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full" />
      
      <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs text-gray-600 shadow-sm">
        © 2025 Flight Dashboard
      </div>
    </div>
  );
};

export default MapView;