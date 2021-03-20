import styled from "styled-components/native";

export const MainHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const FavoritesButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.red};

  width: 160px;
  height: 60px;
  border-radius: 30px;

  flex-direction: row;
  align-items: center;
`;
export const ButtonText = styled.Text`
  ${({ theme }) => theme.textVariants.body1};
  color: ${props => props.theme.colors.shape};
  padding-left: 15px;
`;
