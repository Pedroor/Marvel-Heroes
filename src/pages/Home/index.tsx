import React, { useEffect, useState } from "react";
import { Text, FlatList, ListRenderItem, View } from "react-native";
import { useHeroesQuery } from "../../hooks/useHeroesQuery";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import MarvelLogo from "../../assets/blackLogo.png";

import {
  Container,
  Header,
  Card,
  ImageCard,
  ImageLogo,
  ButtonContainer,
  PopularButton,
  ButtonText,
  Order,
  TitleName,
  Description,
  Label,
} from "./styles";
import { HeroTypes } from "../../types";

export function Home() {
  const defaultDescription =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");
  const heroesQuery = useHeroesQuery(page, name);

  function isError() {
    if (heroesQuery.isError) {
      console.log("ENTREI AQUI");
      {
        console.log(heroesQuery.error.message);
      }
      return <Text>{heroesQuery.error.message}</Text>;
    }
  }

  const renderHeroeCard: ListRenderItem<HeroTypes> = ({ item }) => {
    return (
      <Card key={item.id}>
        <ImageCard uri={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
        <View style={{ flexDirection: "column", height: "50%", width: "50%" }}>
          <TitleName>{item.name}</TitleName>
          {item.description.length === 0 ? (
            <Description>
              {defaultDescription.length > 80
                ? `${defaultDescription.substring(0, 80)}...`
                : defaultDescription}
            </Description>
          ) : (
            <Description>
              {item.description.length > 80
                ? `${item.description.substring(0, 80)}...`
                : item.description}
            </Description>
          )}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Label>More Info</Label>
            <AntDesign
              name="right"
              size={24}
              color="black"
              style={{
                paddingTop: 60,
              }}
            />
          </View>
        </View>
      </Card>
    );
  };

  return (
    <Container>
      <Header>
        <ImageLogo source={MarvelLogo} resizeMode={"contain"} />
        <FontAwesome name="search" size={24} color="black" />
      </Header>
      <ButtonContainer>
        <PopularButton>
          <ButtonText>Popular</ButtonText>
        </PopularButton>
        <Order>A-Z</Order>
      </ButtonContainer>
      <FlatList
        data={heroesQuery.data?.data.results}
        renderItem={renderHeroeCard}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 10 }}
      />
    </Container>
  );
}
