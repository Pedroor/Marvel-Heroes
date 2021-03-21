import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Details, Home, FavoritesList, Comic } from "./pages";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Favorites" component={FavoritesList} />
      <Stack.Screen name="Comic" component={Comic} />
    </Stack.Navigator>
  );
}
