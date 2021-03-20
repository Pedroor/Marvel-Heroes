import React from "react";
import { ComicsTypes } from "../../common/types/Comics";
import { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import { ComicImage, Container, ComicTitle, ComicDescription } from "./styles";

import { Header } from "../../components/Header";

type ParamList = {
  Details: {
    item: ComicsTypes;
  };
};

export function Comic() {
  const route = useRoute<RouteProp<ParamList, "Details">>();
  const comic = route.params.item;

  return (
    <Container>
      <Header hasButton={false} />
      <ComicTitle>{comic.title}</ComicTitle>
      <ComicImage
        uri={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
      />

      <ComicDescription>{comic.description}</ComicDescription>
      <ComicTitle> </ComicTitle>
    </Container>
  );
}