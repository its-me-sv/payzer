import styled from 'styled-components/native';

export interface Theme {
  dark: boolean;
}

export const DashboardContainer = styled.View<Theme>`
  flex: 1;
  justify-content: space-around;
  background-color: #222021;
  ${({dark}) => !dark && 'background-color: #e5e1e2;'}
`;

export const TitleBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  padding-bottom: 0%;
  padding-top: 0%;
`;

export const TitleText = styled.Text<Theme>`
  font-family: Gadamer;
  font-size: 42px;
  color: #e5e1e2;
  ${({dark}) => !dark && 'color: #222021;'}
`;

export const LogoutImage = styled.Image.attrs({
  source: require('../../../../assets/icons/log-out.png'),
})<Theme>`
  width: 36px;
  height: 36px;
  tint-color: #e5e1e2;
  ${({dark}) => !dark && 'tint-color: #222021;'}
`;

export const Header = styled.ImageBackground.attrs({
  source: require('../../../../assets/gradients/grad5.png'),
  imageStyle: {borderRadius: 14},
})<Theme>`
  width: 93%;
  height: 24%;
  align-self: center;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-width: 1.4px;
  border-radius: 18px;
  border-color: #e5e1e2;
  ${({dark}) => !dark && 'border-color: #222021;'}
`;

export const HeaderText = styled.Text`
  font-family: bahnschrift;
  font-size: 18px;
  color: #222021;
`;

export const ClayChart = styled.Image.attrs({
  source: require('../../../../assets/clays/chart-1.png'),
})`
  width: 130px;
  height: 138px;
`;

export const BodyContainer = styled.View`
  flex: 0.8;
  justify-content: space-between;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ItemBackground = styled.ImageBackground.attrs({
  imageStyle: {borderRadius: 14},
})<Theme>`
  width: 100%;
  align-items: center;
  padding: 3%;
  justify-content: space-around;
  border-width: 1.4px;
  border-radius: 18px;
  border-color: #e5e1e2;
  ${({dark}) => !dark && 'border-color: #222021;'}
`;

export const RocketImage = styled.Image`
  width: 120px;
  height: 122px;
`;

export const ItemText = styled.Text`
  font-family: bahnschrift;
  font-size: 21px;
  color: #222021;
  margin-top: 14px;
`;

export const TouchWrapper = styled.TouchableOpacity`
  width: 42%;
`;
