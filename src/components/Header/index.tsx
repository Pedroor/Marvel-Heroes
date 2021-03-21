import React from "react";
import { MainHeader, FavoritesButton, ButtonText, MarvelLogo } from "./styles";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import blackLogo from "../../assets/blackLogo.png";

interface HeaderProps {
  hasButton: boolean;
  hasGoBackButton: boolean;
}
export function Header({ hasButton, hasGoBackButton }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <MainHeader>
      {hasGoBackButton ? (
        <AntDesign
          name="arrowleft"
          size={32}
          color="#F0141E"
          onPress={() => navigation.goBack()}
        />
      ) : (
        <MarvelLogo source={blackLogo} resizeMode={"contain"} />
      )}

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
