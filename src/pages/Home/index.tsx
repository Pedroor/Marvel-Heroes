import React, { useState } from "react";
import { FlatList, ListRenderItem, View, Image } from "react-native";
import { useHeroesQuery } from "../../hooks/useHeroesQuery";
import { FontAwesome } from "@expo/vector-icons";
import America from "../../assets/marvel.gif";

import { HeroTypes } from "../../common/types/Heroes";

import {
  Container,
  ButtonContainer,
  Order,
  TitleName,
  Input,
  InputArea,
} from "./styles";

import { Header } from "../../components/Header";
import { HeroCard } from "../../components/HeroCard";

export function Home() {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");

  const heroesQuery = useHeroesQuery(page, name);

  const renderHeroeCard: ListRenderItem<HeroTypes> = ({ item }) => {
    console.log(item.comics);
    return <HeroCard item={item} />;
  };

  return (
    <>
      {heroesQuery.isLoading ? (
        <Container>
          <Header />
          <ButtonContainer>
            <InputArea>
              <FontAwesome name="search" size={24} color="black" />
              <Input
                placeholder="Search for..."
                onChangeText={value => setName(value)}
              />
            </InputArea>
            <Order>A-Z</Order>
          </ButtonContainer>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TitleName>Loading ... </TitleName>
            <Image source={America} style={{ width: 500, height: 500 }} />
          </View>
        </Container>
      ) : (
        <Container>
          <Header />
          <ButtonContainer>
            <InputArea>
              <FontAwesome name="search" size={24} color="black" />
              <Input
                placeholder="Search for..."
                onChangeText={value => setName(value)}
              />
            </InputArea>
            <Order>A-Z</Order>
          </ButtonContainer>
          {heroesQuery.data?.data.results !== undefined &&
            (heroesQuery.data?.data.results.length > 0 ? (
              <FlatList
                data={heroesQuery.data?.data.results}
                renderItem={renderHeroeCard}
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: 10 }}
              />
            ) : (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TitleName>Nothing found ):</TitleName>
                <Image source={America} style={{ width: 500, height: 500 }} />
              </View>
            ))}
        </Container>
      )}
    </>
  );
}
