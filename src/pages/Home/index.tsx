import React, { useEffect, useState } from "react";
import { FlatList, ListRenderItem, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useHeroesQuery } from "../../hooks/useHeroesQuery";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import America from "../../assets/marvel.gif";

import { HeroTypes } from "../../types";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import {
  Container,
  Card,
  CardContent,
  ImageCard,
  ButtonContainer,
  Order,
  TitleName,
  Description,
  Label,
  Input,
  InputArea,
} from "./styles";

import { Header } from "../../components/Header";

const defaultDescription =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";

export function Home() {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");

  const heroesQuery = useHeroesQuery(page, name);

  const navigation = useNavigation();

  const renderHeroeCard: ListRenderItem<HeroTypes> = ({ item }) => {
    return (
      <Card key={item.id}>
        <ImageCard uri={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
        <CardContent>
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
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Details")}
          >
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
          </TouchableWithoutFeedback>
        </CardContent>
      </Card>
    );
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
