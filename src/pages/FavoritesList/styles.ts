import styled from "styled-components/native";
import { s } from "react-native-size-matters";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  margin: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => theme.textVariants.title};
  text-align: center;
  padding-bottom: ${s(10)};
`;

export const ShareMessage = styled.Text`
  ${({ theme }) => theme.textVariants.body1};

  text-align: center;
  padding-bottom: ${s(10)};
`;

export const MarvelImage = styled.Image`
  width: 100%;
  height: ${s(100)};
  margin-bottom: ${s(15)};
`;

export const ShareButton = styled.TouchableOpacity`
  margin-bottom: ${s(15)};
  width: 100%;
  height: ${s(50)};
  border-radius: ${s(15)};
  background-color: ${props => props.theme.colors.blue};

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => theme.textVariants.body1};
  color: ${props => props.theme.colors.shape};
  padding-left: ${s(15)};
`;
