import React from "react";
import { MainHeader, FavoritesButton, ButtonText } from "./styles";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  hasButton: boolean;
}
export function Header({ hasButton }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <MainHeader>
      <AntDesign
        name="arrowleft"
        size={32}
        color="#F0141E"
        onPress={() => navigation.goBack()}
      />
      <FavoritesButton
        hasButton={hasButton || false}
        onPress={() => navigation.navigate("Favorites")}
      >
        <Ionicons
          name="star"
          size={22}
          color="white"
          style={{ paddingLeft: 8 }}
        />
        <ButtonText>Favorites</ButtonText>
      </FavoritesButton>
    </MainHeader>
  );
}
