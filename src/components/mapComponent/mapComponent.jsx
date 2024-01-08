import React from "react";
import { useState } from "react";

import { Map, Marker } from "pigeon-maps";

const MapComponent = () => {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  return (
    <Map height={700} defaultCenter={[49.406354, 30.656883]} defaultZoom={7}>
      <Marker
        width={30}
        anchor={[49.551954, 25.422007]}
        color="#FFCC00"
        onClick={() => setHue(hue + 20)}
      />
      <Marker
        width={30}
        anchor={[49.818641, 24.140541]}
        color={color}
        onClick={() => setHue(hue + 20)}
      />
    </Map>
  );
};
export default MapComponent;
