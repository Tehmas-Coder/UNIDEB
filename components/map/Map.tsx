import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "330px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBSXmUhtJ9BMuzPhJzZ2PlZbXQtGwxRvSY"!,
  });

  return (
    <div className="flex justify-center">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: 25.2175,
            lng: 55.2834,
          }}
          zoom={10}
        >
          <Marker
            position={{
              lat: 25.2175,
              lng: 55.2834,
            }}
          />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
