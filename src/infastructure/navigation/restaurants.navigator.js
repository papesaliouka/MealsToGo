import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurant/screens/restaurants.screen";
import { RestaurantDetails } from "../../features/restaurant/screens/restaurantDetails.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        screnOptions={{ ...TransitionPresets.ModalPresentationIOS }}
      />
    </RestaurantStack.Navigator>
  );
};
