import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    if (!mocks[location]) {
      reject("not found");
    }
    resolve(mocks[location]);
  });
};

export const restaurantsTransform = ({ results }) => {
  const transformedData = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * mockImages.length - 1)];
    });
    return {
      ...restaurant,
      adress: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.bussiness_status === "CLOSED TEMPORARILY",
    };
  });
  return camelize(transformedData);
};
