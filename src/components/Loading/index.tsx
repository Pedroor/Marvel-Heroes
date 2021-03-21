import React from "react";
import { Image, View } from "react-native";
import America from "../../assets/marvel.gif";
import { s, ms } from "react-native-size-matters";

import { TitleName } from "./styles";

interface LoadingProps {
  title: string;
}

export function Loading({ title }: LoadingProps) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TitleName>{title} </TitleName>
      <Image source={America} style={{ width: s(300), height: s(300) }} />
    </View>
  );
}
