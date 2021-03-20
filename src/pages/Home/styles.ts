import styled from "styled-components/native";
import { Image } from "react-native-expo-image-cache";
import { TextInput } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

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

export const Order = styled.Text`
  ${({ theme }) => theme.textVariants.body1};
  padding: 15px 0 0 3px;
`;

export const Card = styled.View`
  width: 90%;
  height: 240px;

  flex-direction: row;
  border-radius: 40px;

  margin-bottom: 20px;
  margin-left: 10px;
`;

export const CardContent = styled.View`
  flex-direction: column;
  width: 50%;
  height: 50%;
`;

export const TitleName = styled.Text`
  ${({ theme }) => theme.textVariants.title};
  padding: 10px 0 0 10px;
`;

export const Label = styled.Text`
  ${({ theme }) => theme.textVariants.body2};
  padding: 60px 0 0 10px;
  font-weight: bold;
`;

export const Description = styled.Text`
  ${({ theme }) => theme.textVariants.body3};
  padding: 30px 0 0 10px;
`;

export const ImageCard = styled(Image)`
  width: 200px;
  height: 240px;
  border-radius: 15px;
`;
