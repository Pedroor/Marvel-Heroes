import styled from "styled-components/native";
import { s } from "react-native-size-matters";

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const InitialButton = styled.TouchableOpacity`
  background-color: #800319;

  width: ${s(160)};
  height: ${s(60)};
  border-radius: ${s(30)};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: ${s(30)};
  left: ${s(190)};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => theme.textVariants.body1};
  color: ${props => props.theme.colors.shape};
  padding-left: ${s(4)};
`;
