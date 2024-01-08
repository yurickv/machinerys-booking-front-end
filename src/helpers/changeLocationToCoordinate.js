import { locationCoordinates } from "../constant/locationCoordinate";

export function convertLocationsToCoordinates(data) {
  const updatedCoordinates = {};

  return data.map((item) => {
    const location = item.location;
    const coordinates = locationCoordinates[location];

    if (!updatedCoordinates[location]) {
      updatedCoordinates[location] = true;
      return {
        ...item,
        location: coordinates || [0, 0],
      };
    } else {
      return {
        ...item,
        location: adjustCoordinates(coordinates),
      };
    }
  });
}

//трохи змінює координати для огошолошень з однієї області
function adjustCoordinates(coordinates) {
  const randomAdjustment = Math.random() * (0.09 - 0.01) + 0.01;
  return [coordinates[0] + randomAdjustment, coordinates[1] - randomAdjustment];
}
