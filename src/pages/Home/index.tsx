import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useHeroesQuery } from "../../hooks/useHeroesQuery";
import { Image } from "react-native-expo-image-cache";

import { HeroTypes } from "../../types";

export function Home() {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("Jurupinga");
  const heroesQuery = useHeroesQuery(page, name);

  function isError() {
    console.log(heroesQuery);
    if (heroesQuery.isError) {
      console.log("ENTREI AQUI");
      {
        console.log(heroesQuery.error.message);
      }
      return <Text>{heroesQuery.error.message}</Text>;
    }
  }

  return (
    <View>
      {heroesQuery.data?.data.results.map(heroe => (
        <Image
          uri={`${heroe.thumbnail.path}.${heroe.thumbnail.extension}`}
          style={{ width: 160, height: 160 }}
        />
      ))}
      <TouchableOpacity
        onPress={isError}
        style={{ width: 100, height: 80, backgroundColor: "red" }}
      ></TouchableOpacity>
    </View>
  );
}
