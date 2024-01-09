import React, { useEffect } from "react";
import { useState } from "react";

import { Map, Marker } from "pigeon-maps";
import { convertLocationsToCoordinates } from "../../helpers/changeLocationToCoordinate";

const MapComponent = ({ data }) => {
  // const [hue, setHue] = useState(0);
  const [center, setCenter] = useState([49.406354, 30.656883])
  const [zoom, setZoom] = useState(7)
  const [bounds, setBounds] = useState({ sw: [0, 0], ne: [0, 0] }); // Initialize with default bounds
  const [newCoordinates, setNewCoordinates] = useState([]);

  useEffect(() => {
    setNewCoordinates(convertLocationsToCoordinates(data));
  }, [data]);

  useEffect(() => {
    visibleMarkers(bounds);
  }, [bounds, newCoordinates]);

  const visibleMarkers = (bounds) => {
    if (bounds.sw[0] === 0 && bounds.sw[1] === 0 && bounds.ne[0] === 0 && bounds.ne[1] === 0) {
      // Skip if bounds are not available yet
      return;
    }

    const result = newCoordinates.filter((marker) => {
      return (
        bounds.ne[1] >= marker.location[1] &&
        bounds.ne[0] >= marker.location[0] &&
        bounds.sw[1] <= marker.location[1] &&
        bounds.sw[0] <= marker.location[0]
      );
    });
    console.log("видимі:", result);
  };

  return (
    <Map
      height={600}
      width={600}
      center={center}
      zoom={zoom}
      onBoundsChanged={({ center, zoom, bounds }) => {
        setCenter(center)
        setZoom(zoom)
        setBounds(bounds)
      }} >
      {newCoordinates.map((item, index) => (
        <Marker
          key={index}
          width={30}
          anchor={item.location}
        // color={color}
        // onClick={() => setHue(hue + 20)}
        />
      ))}
    </Map>
  );
};
export default MapComponent;  