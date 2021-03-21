import styled from "styled-components/native";
import { s } from "react-native-size-matters";

export const TitleName = styled.Text`
  ${({ theme }) => theme.textVariants.title};

  text-align: center;
`;
