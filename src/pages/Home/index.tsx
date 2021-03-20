import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useHeroesQuery } from "../../hooks/useHeroesQuery";
import { FontAwesome } from "@expo/vector-icons";

import MarvelLogo from "../../assets/blackLogo.png";

import { Container, Header, Card, ImageCard, ImageLogo } from "./styles";

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
    <Container>
      <Header>
        <ImageLogo uri={MarvelLogo.toString()} />
        <FontAwesome name="search" size={24} color="black" />
      </Header>
    </Container>
  );
}
