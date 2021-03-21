import styled from "styled-components/native";
import { s } from "react-native-size-matters";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding-top: ${s(20)};
`;

export const HeroImage = styled.Image`
  margin-bottom: 15px;
  width: 100%;
  height: ${s(250)};
`;

export const Description = styled.Text`
  ${({ theme }) => theme.textVariants.body2};
  padding-top: ${s(30)};
  padding-left: ${s(10)};
`;

export const Title = styled.Text`
  ${({ theme }) => theme.textVariants.title};
  padding-top: ${s(10)};
  padding-left: ${s(10)};
`;

export const Label = styled.Text`
  ${({ theme }) => theme.textVariants.body2};
  display: flex;
  flex-wrap: wrap;
  padding-top: ${s(2)};
  padding-left: ${s(10)};
  font-weight: bold;
`;

export const ComicTitle = styled.Text`
  ${({ theme }) => theme.textVariants.body3};
  display: flex;
  flex-wrap: wrap;
  padding-top: ${s(2)};
  padding-left: ${s(10)};
  font-weight: bold;
`;
export const ComicImage = styled.Image`
  margin: 8px 0 15px 15px;
  width: ${s(120)};
  height: ${s(120)};
`;
