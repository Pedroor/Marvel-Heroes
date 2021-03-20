import { createGlobalStyle } from "styled-components";
import { useFonts } from "expo-font";

import {
  Montserrat_300Light,
  Montserrat_700Bold,
  Montserrat_400Regular,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

export function loadFonts() {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });
  if (!fontsLoaded) return null;
}

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --shape: #FFFFFF;
        --inputBackground: #e7e9ee;
        --red:##de160b
    }

`;
