import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet with Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapViewProps {
  activeView: 'outbound' | 'return' | 'both';
}

const MapView = ({ activeView }: MapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const airports = {
    CGY: { lat: 8.4542, lng: 124.6319, name: 'Cagayan de Oro', code: 'CGY' },
    MNL: { lat: 14.5086, lng: 121.0194, name: 'Manila', code: 'MNL' },
    CEB: { lat: 10.3077, lng: 123.9094, name: 'Cebu', code: 'CEB' },
    NRT: { lat: 35.7643, lng: 140.3864, name: 'Tokyo Narita', code: 'NRT' },
    CTS: { lat: 42.7752, lng: 141.6920, name: 'Sapporo', code: 'CTS' }
  };

  const routes = {
    outbound: [
      { from: airports.CGY, to: airports.MNL, color: '#3b82f6', emissions: '45 kg' },
      { from: airports.MNL, to: airports.NRT, color: '#3b82f6', emissions: '285 kg' },
      { from: airports.NRT, to: airports.CTS, color: '#3b82f6', emissions: '40 kg' }
    ],
    return: [
      { from: airports.CTS, to: airports.NRT, color: '#f59e0b', emissions: '35 kg' },
      { from: airports.NRT, to: airports.CEB, color: '#f59e0b', emissions: '240 kg' },
      { from: airports.CEB, to: airports.CGY, color: '#f59e0b', emissions: '26 kg' }
    ]
  };

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current, {
      center: [20, 130],
      zoom: 4,
      zoomControl: true,
      attributionControl: false
    });

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
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

    // Add airport markers
    Object.values(airports).forEach((airport) => {
      const marker = L.marker([airport.lat, airport.lng])
        .bindPopup(`
          <div class="text-center">
            <div class="font-bold text-lg">${airport.code}</div>
            <div class="text-sm text-gray-600">${airport.name}</div>
          </div>
        `)
        .addTo(map);
    });

    // Add flight paths based on active view
    const routesToShow = activeView === 'both' 
      ? [...routes.outbound, ...routes.return]
      : activeView === 'outbound' 
        ? routes.outbound 
        : routes.return;

    routesToShow.forEach((route, index) => {
      const polyline = L.polyline([
        [route.from.lat, route.from.lng],
        [route.to.lat, route.to.lng]
      ], {
        color: route.color,
        weight: 4,
        opacity: 0.8,
        dashArray: '10, 10'
      })
      .bindPopup(`
        <div class="text-center">
          <div class="font-bold">${route.from.code} → ${route.to.code}</div>
          <div class="text-sm text-gray-600">Emissions: ${route.emissions}</div>
        </div>
      `)
      .addTo(map);

      // Add animated marker along the path
      setTimeout(() => {
        const midLat = (route.from.lat + route.to.lat) / 2;
        const midLng = (route.from.lng + route.to.lng) / 2;
        
        const planeIcon = L.divIcon({
          html: '✈️',
          className: 'plane-icon',
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        });

        L.marker([midLat, midLng], { icon: planeIcon }).addTo(map);
      }, index * 500);
    });

  }, [activeView]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full" />
      
      {/* Custom attribution */}
      <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs text-gray-600">
        © 2025 Flight Journey Dashboard. All rights reserved.
      </div>
    </div>
  );
};

export default MapView;