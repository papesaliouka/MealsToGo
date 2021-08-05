import { NavigationContainer } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infastructure/theme/index";
import RestaurantsScreen from "./src/features/restaurant/screens/restaurants.screen";
import { Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SafeArea } from "./src/components/utility/safeArea.component";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Settings = () => (
  <SafeArea>
    <Text>settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
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
  };
};

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });

  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
          <ExpoStatusBar style="auto" />
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
}
