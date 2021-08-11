import React from "react";

import CompactRestaurantInfo from "../../restaurant/components/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => {
  return (
    <>
      <CompactRestaurantInfo restaurant={restaurant} />
    </>
  );
};
