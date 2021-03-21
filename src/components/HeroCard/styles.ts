import styled from "styled-components/native";
import { s, vs, ms } from "react-native-size-matters";

export const Card = styled.View`
  width: 90%;
  height: ${s(240)};

  flex-direction: row;
  border-radius: ${s(40)};

  margin-bottom: ${ms(10)};
  margin-left: ${ms(10)};
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
  padding-top: ${s(60)};
  padding-left: ${s(10)};
  font-weight: bold;
`;

export const Description = styled.Text`
  ${({ theme }) => theme.textVariants.body3};
  padding-top: ${vs(30)};
  padding-left: ${vs(10)};
`;

export const ImageCard = styled.Image`
  width: ${s(180)};
  height: ${s(220)};
  border-radius: 15px;
`;

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  bottom: ${s(0)};
  top: ${s(-15)};
`;
