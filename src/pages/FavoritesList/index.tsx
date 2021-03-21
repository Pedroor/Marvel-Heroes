import React from "react";
import { FlatList, ListRenderItem, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useFavoriteHeroes } from "../../hooks/useFavoriteHeroes";

import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { HeroCard } from "../../components/HeroCard";
import { AntDesign } from "@expo/vector-icons";
import marvelImage from "../../assets/redLogo.png";

import { HeroTypes } from "../../common/types/Heroes";

import {
  Container,
  Title,
  MarvelImage,
  ShareButton,
  ButtonText,
  ShareMessage,
} from "./styles";

export function FavoritesList() {
  const { favoriteHeroes, createPDF, generateHtml } = useFavoriteHeroes();

  function handleSharePDF() {
    generateHtml();
    Alert.alert(
      `You want share your Heroes List?`,
      "",

      [
        {
          text: "No",
        },
        {
          text: "Yes",
          onPress: () => {
            createPDF();
          },
        },
      ],
      { cancelable: true }
    );
  }

  const renderHeroCard: ListRenderItem<HeroTypes> = ({ item }) => {
    return <HeroCard item={item} />;
  };

  return (
    <Container>
      {favoriteHeroes.length > 0 ? (
        <>
          <Header hasButton={false} />
          <Title>Favorites List</Title>
          <MarvelImage source={marvelImage} resizeMode={"contain"} />
          <ShareMessage>
            Do you want to share your list with your friends?
          </ShareMessage>
          <ShareButton onPress={() => handleSharePDF()}>
            <AntDesign name="sharealt" size={24} color="white" />
            <ButtonText>Share</ButtonText>
          </ShareButton>
          <FlatList
            data={favoriteHeroes}
            renderItem={renderHeroCard}
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 10 }}
          />
        </>
      ) : (
        <>
          <Header hasButton={false} />
          <Title>Favorites List</Title>
          <MarvelImage source={marvelImage} resizeMode={"contain"} />
          <Loading title={"Add new heroes to your list!"} />
        </>
      )}
    </Container>
  );
}
