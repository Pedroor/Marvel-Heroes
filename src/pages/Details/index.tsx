import React from "react";
import { Header } from "../../components/Header";
import { useHeroComicsQuery } from "../../hooks/useHeroComics";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { s } from "react-native-size-matters";
import {
  FlatList,
  ListRenderItem,
  View,
  TouchableWithoutFeedback,
} from "react-native";

import { DEFAULT_DESCRIPTION } from "../../constants/index";

import {
  HeroImage,
  Title,
  Description,
  Container,
  Label,
  ComicImage,
  ComicTitle,
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

  const navigation = useNavigation();

  const renderComicCard: ListRenderItem<ComicsTypes> = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Comic", { item })}
      >
        <View key={item.id} style={{ width: s(140) }}>
          <ComicImage
            source={{
              uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
            }}
          />
          <ComicTitle>{item.title}</ComicTitle>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  if (useHeroComics.isLoading) {
    return <Loading title={"Loading ..."} />;
  }

  return (
    <Container>
      <Header hasButton={false} />
      <HeroImage
        source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }}
      />
      <Title>{hero.name}</Title>
      <Description>
        {hero.description.length > 0 ? hero.description : DEFAULT_DESCRIPTION}
      </Description>
      <Label>Comics</Label>
      <FlatList
        data={useHeroComics.data?.data.results}
        renderItem={renderComicCard}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: s(10) }}
      />
    </Container>
  );
}
