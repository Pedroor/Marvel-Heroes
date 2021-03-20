import styled from "styled-components/native";
import { Image } from "react-native-expo-image-cache";

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
  ${({ theme }) => theme.textVariants.body2};
  padding: 10px 0 0 10px;
  font-weight: bold;
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

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  bottom: 0px;
  top: -20px;
`;
