// "use client";
// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// const icon = L.icon({ iconUrl: "/marker-icon.png" });
// interface Location {
//   organizationName: string;
//   representative: string;
//   address: string;
//   tel: string;
//   mobile: string;
//   email: string;
//   website: string;
//   Timing: string;
//   lat: string;
//   long: string;
// }

// interface MapComponentProps {
//   location: Location[];
//   height: string;
// }

// const MapComponent: React.FC<MapComponentProps> = ({ location, height }) => {
//   return (
//     <MapContainer
//       style={{
//         height: "300px",
//         width: "100%",
//         zIndex: 0,
//       }}
//       center={
//         location[0]
//           ? [parseFloat(location[0].lat), parseFloat(location[0].long)]
//           : [0, 0]
//       }
//       zoom={4}
//       scrollWheelZoom={true}
//     >
//       <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png" />
//       {location?.map((loc, index) => (
//         <Marker
//           icon={icon}
//           key={index}
//           position={[parseFloat(loc.lat), parseFloat(loc.long)]}
//         >
//           <Popup>
//             <div>
//               <h3>{loc.organizationName}</h3>
//               <p>
//                 <strong>Representative:</strong> {loc.representative}
//               </p>
//               <p>
//                 <strong>Address:</strong> {loc.address}
//               </p>
//               <p>
//                 <strong>Tel:</strong> {loc.tel}
//               </p>
//               <p>
//                 <strong>Mobile:</strong> {loc.mobile}
//               </p>
//               <p>
//                 <strong>Email:</strong>{" "}
//                 <a href={`mailto:${loc.email}`}>{loc.email}</a>
//               </p>
//               <p>
//                 <strong>Website:</strong>{" "}
//                 <a href={loc.website} target="_blank" rel="noopener noreferrer">
//                   {loc.website}
//                 </a>
//               </p>
//               <p>
//                 <strong>Timings:</strong> {loc.Timing}
//               </p>
//             </div>
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default MapComponent;

// CustomMapComponent.jsx
import React, { useEffect, useRef } from "react";

interface MapProps {
  latitude: number;
  longitude: number;
}

const CustomMapComponent: React.FC<MapProps> = ({ latitude, longitude }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        // Set canvas size
        canvas.width = 500; // Adjust as needed
        canvas.height = 300; // Adjust as needed

        // Draw map background (just a simple rectangle for land)
        ctx.fillStyle = "#9ae1e1"; // Light blue color for water
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw marker
        ctx.fillStyle = "red";
        const markerX = (longitude / 360 + 0.5) * canvas.width;
        const markerY = (latitude / 180 + 0.5) * canvas.height;
        ctx.beginPath();
        ctx.arc(markerX, markerY, 5, 0, Math.PI * 2);
        ctx.fill();

        // Draw marker label
        ctx.fillStyle = "black";
        ctx.font = "12px Arial";
        ctx.fillText("Your Location", markerX + 10, markerY);
      }
    }
  }, [latitude, longitude]);

  return <canvas ref={canvasRef} />;
};

export default CustomMapComponent;
