import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { useHeroComicsQuery } from "../../hooks/useHeroComics";
import { Entypo } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { s } from "react-native-size-matters";
import {
  FlatList,
  ListRenderItem,
  View,
  TouchableWithoutFeedback,
} from "react-native";

import { DEFAULT_DESCRIPTION } from "../../constants/index";

import { useFavoriteHeroes } from "../../hooks/useFavoriteHeroes";

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
import { ErrorMessage } from "../../utils/index";

type ParamList = {
  Details: {
    item: HeroTypes;
  };
};

export function Details() {
  const route = useRoute<RouteProp<ParamList, "Details">>();
  const hero = route.params.item;

  const [isColorStar, setIsColorStar] = useState(false);

  const useHeroComics = useHeroComicsQuery(0, hero.id);
  const { favoriteHeroes, handleAddHeroToFavoriteList } = useFavoriteHeroes();

  const navigation = useNavigation();

  useEffect(() => {
    haveThisHeroInList(hero);
  }, [favoriteHeroes]);

  function haveThisHeroInList(hero: HeroTypes) {
    let existingHero = favoriteHeroes.find(heroList => heroList.id === hero.id);
    if (existingHero) {
      setIsColorStar(true);
    } else {
      setIsColorStar(false);
    }
  }

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
            animation="slideInRight"
            useNativeDriver
            duration={1500}
          />

          <ComicTitle>{item.title}</ComicTitle>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  if (useHeroComics.isLoading) {
    return <Loading title={"Loading ..."} isError={false} />;
  }

  if (useHeroComics.isError) {
    ErrorMessage();
    return (
      <>
        <Container>
          <Header hasButton={true} hasGoBackButton={true} />
          <Loading title={"Something went wrong"} isError={true} />
        </Container>
      </>
    );
  }
  return (
    <Container>
      <Header hasButton={false} hasGoBackButton={true} />
      <HeroImage
        source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }}
        animation="slideInRight"
        useNativeDriver
        duration={1500}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Title>{hero.name}</Title>
        <Entypo
          name="star"
          size={24}
          color={isColorStar ? "#eaf754" : "black"}
          style={{ padding: s(8) }}
          onPress={() => handleAddHeroToFavoriteList(hero)}
        />
      </View>
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
