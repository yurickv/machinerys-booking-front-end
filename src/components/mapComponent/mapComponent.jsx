import React from "react";
import { useState } from "react";

import { Map, Marker } from "pigeon-maps";
import { convertLocationsToCoordinates } from "../../helpers/changeLocationToCoordinate";

const MapComponent = ({ data }) => {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  const res = convertLocationsToCoordinates(data);
  console.log(res);
  return (
    <Map height={700} defaultCenter={[49.406354, 30.656883]} defaultZoom={7}>
      {res.map((item, index) => (
        <Marker
          key={index}
          width={30}
          anchor={item.location}
          color={`hsl(${(hue + index * 20) % 360}deg 39% 70%)`}
          onClick={() => setHue(hue + 20)}
        />
      ))}
      {/* <Marker
        width={30}
        anchor={[49.818641, 24.140541]}
        color={color}
        onClick={() => setHue(hue + 20)}
      /> */}
    </Map>
  );
};
export default MapComponent;
