import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../components/utility/safeArea.component";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { MapScreen } from "../../features/map/screens/map.screen";
const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>settings</Text>
  </SafeArea>
);

const TAB_ICON = {
  Restaurant: "md-restaurant",
  Settings: "md-settings",
  Map: "md-map",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
  };
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
