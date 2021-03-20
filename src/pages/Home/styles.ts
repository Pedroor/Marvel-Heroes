import styled from "styled-components/native";
import { Image } from "react-native-expo-image-cache";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  margin: 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 35px;
`;
export const ImageLogo = styled.Image`
  width: 90px;
  height: 40px;
  margin: 22px;
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 12px;
`;
export const PopularButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.red};

  width: 160px;
  height: 60px;
  border-radius: 30px;

  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  ${({ theme }) => theme.textVariants.body1};
  color: ${props => props.theme.colors.shape};
`;
export const Order = styled.Text`
  ${({ theme }) => theme.textVariants.body1};
  padding-left: 35px;
`;

export const Card = styled.View`
  width: 90%;
  height: 240px;

  flex-direction: row;
  border-radius: 40px;

  margin-bottom: 20px;
  margin-left: 10px;
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
