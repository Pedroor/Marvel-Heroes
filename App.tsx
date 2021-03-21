import React from "react";
import { QueryClientProvider } from "react-query";
import Routes from "./src/routes";

import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components";

import FlashMessage from "react-native-flash-message";

import {
  Montserrat_300Light,
  Montserrat_700Bold,
  Montserrat_400Regular,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import theme from "./src/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import { FavoriteHeroesProvider } from "./src/hooks/useFavoriteHeroes";

import { queryClient } from "./src/services/query-client";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <FavoriteHeroesProvider>
          <ThemeProvider theme={theme}>
            <Routes />
            <FlashMessage ForwardRef="FlashMessage" />
          </ThemeProvider>
        </FavoriteHeroesProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
