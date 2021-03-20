import styled from "styled-components/native";
import { Image } from "react-native-expo-image-cache";

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const InitialButton = styled.TouchableOpacity`
  background-color: #800319;

  width: 160px;
  height: 60px;
  border-radius: 30px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  left: 60%;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => theme.textVariants.body1};
  color: ${props => props.theme.colors.shape};
  padding-left: 4px;
`;
