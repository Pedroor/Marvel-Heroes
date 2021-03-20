import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  margin: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => theme.textVariants.title};

  text-align: center;
`;

export const MarvelImage = styled.Image`
  width: 100%;
  height: 100px;
  margin-bottom: 15px;
`;
