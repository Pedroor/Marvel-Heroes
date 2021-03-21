import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  margin: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => theme.textVariants.title};
  text-align: center;
  padding-bottom: 10px;
`;

export const ShareMessage = styled.Text`
  ${({ theme }) => theme.textVariants.body1};

  text-align: center;
  padding-bottom: 10px;
`;

export const MarvelImage = styled.Image`
  width: 100%;
  height: 100px;
  margin-bottom: 15px;
`;

export const ShareButton = styled.TouchableOpacity`
  margin-bottom: 15px;
  width: 100%;
  height: 50px;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.blue};

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => theme.textVariants.body1};
  color: ${props => props.theme.colors.shape};
  padding-left: 15px;
`;
