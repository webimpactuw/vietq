import { MapPinIcon } from "@heroicons/react/24/solid";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export default function Map({ location }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold font-display tracking-tighter">
        Location
      </h2>
      <div className="flex items-center justify-start space-x-2">
        <MapPinIcon className="w-6 h-6" />
        <div>
          <h3 className="text-lg font-semibold tracking-tighter">
            {location.name}
          </h3>
          {location.address ? (
            <p className="font-medium text-sm text-gray-700">
              {location.address}
            </p>
          ) : null}
        </div>
      </div>
      <div className="border border-champagne-700/25 rounded-2xl overflow-hidden box-border">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location.geopoint}
            zoom={10}
          >
            <Marker position={location.geopoint} />
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
