import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useFavoriteHeroes } from "../../hooks/useFavoriteHeroes";

import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { HeroCard } from "../../components/HeroCard";

import marvelImage from "../../assets/redLogo.png";

import { HeroTypes } from "../../common/types/Heroes";
import { useHeroesQuery } from "../../hooks/useHeroesQuery";

import { Container, Title, MarvelImage } from "./styles";

export function FavoritesList() {
  const { favoriteHeroes } = useFavoriteHeroes();

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
