import React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { useHeroComicsQuery } from "../../hooks/useHeroComics";

export function Details() {
  const useHeroComics = useHeroComicsQuery(0, 1011334);
  console.log(useHeroComics.data?.data.results);
  console.log(useHeroComics);

  return (
    <View>
      <Header />
    </View>
  );
}
