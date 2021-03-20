import styled from "styled-components/native";
import { Image } from "react-native-expo-image-cache";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding-top: 20px;
`;

export const ComicImage = styled(Image)`
  padding-top: 20px;
  width: 100%;
  height: 700px;
`;

export const ComicTitle = styled.Text`
  ${({ theme }) => theme.textVariants.title};
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px 0 10px;
  font-weight: bold;
  text-align: center;
`;

export const ComicDescription = styled.Text`
  ${({ theme }) => theme.textVariants.body2};
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px 0 10px;
`;
