import styled from "styled-components/native";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { s } from "react-native-size-matters";

interface OrderByButton {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  margin: 8px;
`;

export const ButtonContainer = styled.View`
  margin: 22px;
`;

export const InputArea = styled.View`
  padding: 0 15px;
  flex-direction: row;
  align-items: center;

  width: 98%;
  background-color: ${props => props.theme.colors.shape};
  height: 37px;
  border-radius: 10px;
`;

export const Input = styled(TextInput)`
  ${({ theme }) => theme.textVariants.input};
  padding: 0 10px;
  width: 90%;
`;

export const OrderByButton = styled.Text<OrderByButton>`
  ${({ theme }) => theme.textVariants.body1};
  color: ${props => (props.isActive ? "red" : "black")};
  padding: 15px 0 0 3px;
`;

export const TitleName = styled.Text`
  ${({ theme }) => theme.textVariants.title};
  padding: 10px 0 0 10px;
`;
