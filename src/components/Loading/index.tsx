import React from "react";
import { Image, View } from "react-native";
import America from "../../assets/marvel.gif";
import { s } from "react-native-size-matters";
import NotFound from "../../assets/notFound.gif";

import { TitleName } from "./styles";

interface LoadingProps {
  title: string;
  isError: boolean;
}

export function Loading({ title, isError }: LoadingProps) {
  return isError ? (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TitleName>{title}</TitleName>
      <Image source={NotFound} style={{ width: s(250), height: s(250) }} />
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TitleName>{title} </TitleName>
      <Image source={America} style={{ width: s(250), height: s(250) }} />
    </View>
  );
}
