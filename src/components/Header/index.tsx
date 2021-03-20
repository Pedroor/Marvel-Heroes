import React from "react";
import { MainHeader, FavoritesButton, ButtonText } from "./styles";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Header() {
  const navigation = useNavigation();

  return (
    <MainHeader>
      <AntDesign
        name="arrowleft"
        size={24}
        color="#F0141E"
        onPress={() => navigation.goBack()}
      />
      <FavoritesButton>
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
