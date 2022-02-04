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

export const CredContainer = styled.View<Theme>`
  flex: 1;
  align-self: center;
  justify-content: center;
  background-color: #222021;
  width: 100%;
  ${({dark}) => !dark && 'background-color: #e5e1e2;'}
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const CredTitleText = styled.Text<Theme>`
  align-self: center;
  font-family: calibri;
  font-size: 36px;
`;

export const Header = styled.View`
  padding-top: 4%;
  align-self: center;
`;

export const Body = styled.View`
  align-items: center;
  padding-top: 3%;
  padding-bottom: 4%;
`;

export const Spacer = styled.View`
  margin: 2%;
`;

export const CredModal = styled.Modal<Theme>``;
