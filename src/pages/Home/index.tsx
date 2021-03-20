import React, { useState } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useHeroesQuery } from "../../hooks/useHeroesQuery";
import { FontAwesome } from "@expo/vector-icons";

import { HeroTypes } from "../../common/types/Heroes";

import { Container, ButtonContainer, Order, Input, InputArea } from "./styles";

import { Header } from "../../components/Header";
import { HeroCard } from "../../components/HeroCard";
import { Loading } from "../../components/Loading";

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
          <Header hasButton={true} />
          <ButtonContainer>
            <InputArea>
              <FontAwesome name="search" size={24} color="black" />
              <Input
                value={name}
                placeholder="Search for..."
                onChangeText={value => setName(value)}
              />
            </InputArea>
            <Order>A-Z</Order>
          </ButtonContainer>
          <Loading title={"Loading ..."} />
        </Container>
      ) : (
        <Container>
          <Header hasButton={true} />
          <ButtonContainer>
            <InputArea>
              <FontAwesome name="search" size={24} color="black" />
              <Input
                value={name}
                placeholder="Search for..."
                onChangeText={value => setName(value)}
              />
              <FontAwesome
                name="trash-o"
                size={24}
                color="black"
                onPress={() => setName("")}
              />
            </InputArea>
            <Order>A-Z</Order>
          </ButtonContainer>

          {heroesQuery.data?.data.results !== undefined &&
            (heroesQuery.data?.data.results?.length === 0 ? (
              <Loading title={"Nothing found ):"} />
            ) : (
              <FlatList
                data={heroesQuery.data?.data.results}
                renderItem={renderHeroeCard}
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: 10 }}
              />
            ))}
        </Container>
      )}
    </>
  );
}
