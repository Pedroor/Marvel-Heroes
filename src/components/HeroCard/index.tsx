import React from "react";

import { HeroTypes } from "../../common/types/Heroes";
import { DEFAULT_DESCRIPTION } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

import { useFavoriteHeroes } from "../../hooks/useFavoriteHeroes";

import {
  Card,
  ImageCard,
  CardContent,
  TitleName,
  Description,
  DetailsButton,
  Label,
} from "./styles";

interface HeroCardProps {
  item: HeroTypes;
}

export function HeroCard({ item }: HeroCardProps) {
  const navigation = useNavigation();

  const { handleAddHeroToFavoriteList } = useFavoriteHeroes();

  return (
    <Card key={item.id}>
      <ImageCard uri={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
      <CardContent>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <TitleName>
            {item.name.length > 13
              ? `${item.name.substring(0, 13)}...`
              : item.name}
          </TitleName>
          <AntDesign
            name="staro"
            size={24}
            color="black"
            style={{ padding: 8 }}
            onPress={() => handleAddHeroToFavoriteList(item)}
          />
        </View>

        {item.description.length === 0 ? (
          <Description>
            {DEFAULT_DESCRIPTION.length > 80
              ? `${DEFAULT_DESCRIPTION.substring(0, 80)}...`
              : DEFAULT_DESCRIPTION}
          </Description>
        ) : (
          <Description>
            {item.description.length > 80
              ? `${item.description.substring(0, 80)}...`
              : item.description}
          </Description>
        )}
        <DetailsButton onPress={() => navigation.navigate("Details", { item })}>
          <Label>More Info</Label>
          <AntDesign
            name="right"
            size={24}
            color="black"
            style={{
              paddingTop: 60,
            }}
          />
        </DetailsButton>
      </CardContent>
    </Card>
  );
}
