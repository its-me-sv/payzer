import styled from 'styled-components/native';

interface Theme {
  dark: boolean;
}

export const WalletsWrapper = styled.View<Theme>`
  flex: 1;
  background-color: #222021;
  ${({dark}) => !dark && 'background-color: #e5e1e2;'}
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  padding-top: 1%;
`;

export const TitleText = styled.Text<Theme>`
  font-family: calibri;
  color: #e5e1e2;
  font-size: 36px;
  ${({dark}) => !dark && 'color: #222021;'}
`;

export const AddImage = styled.Image.attrs({
  source: require('../../../../assets/icons/add.png'),
})<Theme>`
  width: 36px;
  height: 36px;
  tint-color: #e5e1e2;
  ${({dark}) => !dark && 'tint-color: #222021;'}
`;

export const Touchable = styled.TouchableOpacity``;

export const BodyWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const CardImage = styled.ImageBackground`
  width: 90%;
  height: 30%;
`;

export const CardId = styled.Text`
  font-family: bahnschrift;
  color: #e5e1e2;
  position: absolute;
  bottom: 28%;
  align-self: center;
  font-size: 21px;
  opacity: 0.8;
`;
