import React, { useState } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useHeroesQuery } from "../../hooks/useHeroesQuery";
import { FontAwesome } from "@expo/vector-icons";

import { HeroTypes } from "../../common/types/Heroes";

import {
  Container,
  ButtonContainer,
  OrderByButton,
  Input,
  InputArea,
} from "./styles";

import { Header } from "../../components/Header";
import { HeroCard } from "../../components/HeroCard";
import { Loading } from "../../components/Loading";

export function Home() {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");
  const [orderBy, setOrderBy] = useState("name");
  const [orderByButtonIsActive, setOrderByButtonIsActive] = useState(false);

  const heroesQuery = useHeroesQuery(page, name, orderBy);
  console.log(heroesQuery.isError);
  console.log(heroesQuery);

  const renderHeroeCard: ListRenderItem<HeroTypes> = ({ item }) => {
    console.log(item.comics);
    return <HeroCard item={item} />;
  };
  function orderByFunction() {
    if (orderBy.length === 4) {
      setOrderBy("-name");
      setOrderByButtonIsActive(true);
    } else {
      setOrderBy("name");
      setOrderByButtonIsActive(false);
    }
  }

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
            <OrderByButton isActive={orderByButtonIsActive}>A-Z</OrderByButton>
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
            <OrderByButton
              onPress={() => orderByFunction()}
              isActive={orderByButtonIsActive}
            >
              A-Z
            </OrderByButton>
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
