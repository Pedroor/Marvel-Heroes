import styled from "styled-components/native";
import { Image } from "react-native-expo-image-cache";

export const Container = styled.View`
  flex: 1;
  background-color: var(--background);
`;
export const Card = styled.View``;
export const ImageCard = styled.View``;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ImageLogo = styled(Image)`
  width: 90px;
  height: 90px;
`;
