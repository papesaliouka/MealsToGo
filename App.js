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

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });

  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
