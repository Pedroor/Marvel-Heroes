import React from "react";
import { Image } from "react-native";
import { Container, InitialButton, ButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import avengers from "../../assets/avengers.jpg";
import { AntDesign } from "@expo/vector-icons";

export function Initial() {
  const navigation = useNavigation();
  return (
    <Container>
      <Image source={avengers} style={{ width: "100%", height: "100%" }} />
      <InitialButton onPress={() => navigation.navigate("Home")}>
        <ButtonText>Get Started</ButtonText>
        <AntDesign name="arrowright" size={24} color="white" />
      </InitialButton>
    </Container>
  );
}
