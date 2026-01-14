import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Factory } from 'lucide-react';

interface FactoryLocation {
  id: string;
  name: string;
  address: string;
  coordinates: [number, number];
  type: 'headquarters' | 'plant';
  description?: string;
}

const factoryLocations: FactoryLocation[] = [
  {
    id: 'hq-sunter',
    name: 'Head Office Sunter',
    address: 'Jl. Yos Sudarso, Sunter II, Jakarta 14330',
    coordinates: [106.8685, -6.1384],
    type: 'headquarters',
    description: 'Corporate headquarters and administration center',
  },
  {
    id: 'plant-karawang-1',
    name: 'Karawang Plant 1',
    address: 'KIIC, Karawang, West Java',
    coordinates: [107.2972, -6.3648],
    type: 'plant',
    description: 'Main vehicle assembly and production facility',
  },
  {
    id: 'plant-karawang-2',
    name: 'Karawang Plant 2',
    address: 'KIIC, Karawang, West Java',
    coordinates: [107.3072, -6.3648],
    type: 'plant',
    description: 'Engine manufacturing and component production',
  },
  {
    id: 'plant-sunter',
    name: 'Sunter Plant',
    address: 'Sunter, North Jakarta',
    coordinates: [106.8785, -6.1284],
    type: 'plant',
    description: 'Engine casting and stamping operations',
  },
];

const FactoryMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [selectedFactory, setSelectedFactory] = useState<FactoryLocation | null>(null);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [107.0, -6.25],
      zoom: 9,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      setIsMapLoaded(true);

      factoryLocations.forEach((location) => {
        const el = document.createElement('div');
        el.className = 'factory-marker';
        el.innerHTML = `
          <div class="w-10 h-10 rounded-full ${
            location.type === 'headquarters'
              ? 'bg-primary'
              : 'bg-primary/80'
          } flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              ${
                location.type === 'headquarters'
                  ? '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>'
                  : '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>'
              }
            </svg>
          </div>
        `;

        el.addEventListener('click', () => {
          setSelectedFactory(location);
          map.current?.flyTo({
            center: location.coordinates,
            zoom: 14,
          });
        });

        new mapboxgl.Marker(el)
          .setLngLat(location.coordinates)
          .addTo(map.current!);
      });
    });

    return () => {
      map.current?.remove();
    };
  };

  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
    }
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="bg-muted rounded-2xl p-8">
        <div className="max-w-md mx-auto text-center">
          <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Interactive Factory Map</h3>
          <p className="text-muted-foreground mb-6">
            To view our interactive factory map, please enter your Mapbox public token.
            You can get one for free at{' '}
            <a
              href="https://mapbox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter Mapbox public token"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1"
            />
            <Button onClick={initializeMap}>Load Map</Button>
          </div>
        </div>

        {/* Static Location List */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {factoryLocations.map((location) => (
            <div
              key={location.id}
              className="p-4 bg-background rounded-xl border border-border"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {location.type === 'headquarters' ? (
                    <MapPin className="h-5 w-5 text-primary" />
                  ) : (
                    <Factory className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold">{location.name}</h4>
                  <p className="text-sm text-muted-foreground">{location.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl overflow-hidden border border-border">
      <div ref={mapContainer} className="w-full h-125" />

      {/* Location Panel */}
      {selectedFactory && (
        <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-80 bg-background/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-border">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
              {selectedFactory.type === 'headquarters' ? (
                <MapPin className="h-5 w-5 text-primary-foreground" />
              ) : (
                <Factory className="h-5 w-5 text-primary-foreground" />
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">{selectedFactory.name}</h4>
              <p className="text-sm text-muted-foreground mb-1">{selectedFactory.address}</p>
              {selectedFactory.description && (
                <p className="text-sm text-muted-foreground">{selectedFactory.description}</p>
              )}
            </div>
            <button
              onClick={() => setSelectedFactory(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-md rounded-lg p-3 shadow border border-border">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-primary" />
            <span>Headquarters</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-primary/80" />
            <span>Plant</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryMap;
