import React from "react";
import { useState } from "react";

import { Map, Marker } from "pigeon-maps";
import { convertLocationsToCoordinates } from "../../helpers/changeLocationToCoordinate";

const MapComponent = ({ data }) => {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  const newCoordinates = convertLocationsToCoordinates(data);
  return (
    <Map height={700} defaultCenter={[49.406354, 30.656883]} defaultZoom={7}>
      {newCoordinates.map((item, index) => (
        <Marker
          key={index}
          width={30}
          anchor={item.location}
          color={color}
          onClick={() => setHue(hue + 20)}
        />
      ))}
    </Map>
  );
};
export default MapComponent;
