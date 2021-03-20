import React from "react";
import { Header } from "../../components/Header";
import { useHeroComicsQuery } from "../../hooks/useHeroComics";
import { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { FlatList, ListRenderItem, View } from "react-native";

import { DEFAULT_DESCRIPTION } from "../../constants/index";

import {
  HeroImage,
  Title,
  Description,
  Container,
  Label,
  ComicImage,
} from "./styles";
import { HeroTypes } from "../../common/types/Heroes";
import { ComicsTypes } from "../../common/types/Comics";
import { Loading } from "../../components/Loading";

type ParamList = {
  Details: {
    item: HeroTypes;
  };
};

export function Details() {
  const route = useRoute<RouteProp<ParamList, "Details">>();
  const hero = route.params.item;

  const useHeroComics = useHeroComicsQuery(0, hero.id);

  console.log(useHeroComics.data?.data.results);
  console.log(useHeroComics);

  const renderComicCard: ListRenderItem<ComicsTypes> = ({ item }) => {
    return (
      <View>
        <ComicImage
          uri={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        />
      </View>
    );
  };

  if (useHeroComics.isLoading) {
    return <Loading title={"Loading ..."} />;
  }

  return (
    <Container>
      <Header hasButton={false} />
      <HeroImage uri={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
      <Title>{hero.name}</Title>
      <Description>{DEFAULT_DESCRIPTION}</Description>
      <Label>Comics</Label>
      <FlatList
        data={useHeroComics.data?.data.results}
        renderItem={renderComicCard}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 10 }}
      />
    </Container>
  );
}
