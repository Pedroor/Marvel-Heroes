import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding-top: 20px;
`;

export const HeroImage = styled.Image`
  margin-bottom: 15px;
  width: 100%;
  height: 230px;
`;

export const Description = styled.Text`
  ${({ theme }) => theme.textVariants.body2};
  padding: 30px 0 0 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => theme.textVariants.title};
  padding: 10px 0 0 10px;
`;

export const Label = styled.Text`
  ${({ theme }) => theme.textVariants.body2};
  display: flex;
  flex-wrap: wrap;
  padding: 2px 0 0 10px;
  font-weight: bold;
`;

export const ComicTitle = styled.Text`
  ${({ theme }) => theme.textVariants.body3};
  display: flex;
  flex-wrap: wrap;
  padding: 2px 0 0 10px;
  font-weight: bold;
`;
export const ComicImage = styled.Image`
  margin: 8px 0 15px 15px;
  width: 120;
  height: 120px;
`;
