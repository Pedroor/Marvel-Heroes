import React from "react";
import { Image, View } from "react-native";
import America from "../../assets/marvel.gif";

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
      <Image source={America} style={{ width: 500, height: 500 }} />
    </View>
  );
}
