import styled from 'styled-components/native';

interface Theme {
  dark: boolean;
}

export const ClayImage = styled.Image`
  width: 100px;
  height: 158px;
`;

export const Container = styled.View<Theme>`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: #222021;
  ${({dark}) => !dark && 'background-color: #e5e1e2;'}
`;

export const TouchWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-around;
  padding: 3%;
`;

export const TitleText = styled.Text<Theme>`
  align-self: flex-start;
  font-family: calibri;
  font-size: 36px;
  padding-left: 14px;
  color: #e5e1e2;
  ${({dark}) => !dark && 'color: #222021;'}
`;

export const ContentText = styled.Text<Theme>`
  margin-top: 7px;
  font-size: 21px;
  font-family: bahnschrift;
  color: #e5e1e2;
  ${({dark}) => !dark && 'color: #222021;'}
`;
