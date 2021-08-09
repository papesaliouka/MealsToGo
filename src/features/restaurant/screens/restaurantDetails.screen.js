import React from "react";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import RestaurantDetailsList from "./restaurantDetailsList";

export const RestaurantDetails = ({ route }) => {
  const {restaurant}= route.params
  return (
  <>
    <RestaurantInfoCard restaurant={restaurant}/>
    <RestaurantDetailsList/>
  </>
  );
};
