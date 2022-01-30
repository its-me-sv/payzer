import styled from 'styled-components/native';

export interface Theme {
  dark: boolean;
}

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})<Theme>`
  background-color: #e5e1e2;
  ${({dark}) => dark && 'background-color: #222021;'}
`;

export const Title = styled.Text<Theme>`
  font-family: Gadamer;
  font-size: 66px;
  color: #2d292a;
  ${({dark}) => dark && 'color: #e5e1e2;'}
`;

export const MiddleContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  margin: 21px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const ClayPhone = styled.Image.attrs({
  source: require('../../../../assets/clays/mobile.png'),
})`
  width: 162px;
  height: 200px;
`;

export const Caption = styled.Text<Theme>`
  font-family: bahnschrift;
  text-align: center;
  font-size: 18px;
  margin-top: 21px;
  margin-bottom: 10px;
  color: #2d292a;
  opacity: 0.7;
  ${({dark}) => dark && 'color: #e5e1e2;'}
`;

export const PhoneNumberInput = styled.TextInput<Theme>`
  border-width: 1px;
  width: 140px;
  padding: 7px;
  border-radius: 21px;
  text-align: center;
  margin-bottom: 14px;
`;

export const Footer = styled.Pressable`
  align-items: center;
`;

export const FooterText = styled.Text<Theme>`
  font-size: 14px;
  color: #2d292a;
  opacity: 0.8;
  ${({dark}) => dark && 'color: #e5e1e2;'}
`;
