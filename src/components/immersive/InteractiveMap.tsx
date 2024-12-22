import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Location {
  id: string;
  name: string;
  coordinates: [number, number];
  description: string;
  isUnlocked: boolean;
}

interface InteractiveMapProps {
  locations: Location[];
  onLocationSelect: (locationId: string) => void;
  currentLocation?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  locations,
  onLocationSelect,
  currentLocation,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleLocationClick = (locationId: string) => {
    setSelectedLocation(locationId);
    onLocationSelect(locationId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg"
    >
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates}
            eventHandlers={{
              click: () => handleLocationClick(location.id),
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg">{location.name}</h3>
                <p className="text-sm mt-1">{location.description}</p>
                {location.isUnlocked ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-2 px-4 py-2 bg-primary text-white rounded-md text-sm"
                    onClick={() => handleLocationClick(location.id)}
                  >
                    Visit Location
                  </motion.button>
                ) : (
                  <p className="mt-2 text-sm text-gray-500">
                    🔒 Complete previous chapters to unlock
                  </p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </motion.div>
  );
};

export default InteractiveMap;
