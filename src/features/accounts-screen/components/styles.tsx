import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const screenWidth: number = Dimensions.get('window').width;
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

export const ClayLocker = styled.Image.attrs({
  source: require('../../../../assets/clays/locker.png'),
})`
  width: 162px;
  height: 148px;
`;

export const ClayWallet = styled.Image.attrs({
  source: require('../../../../assets/clays/wallet.png'),
})`
  width: 162px;
  height: 158px;
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
  font-family: bahnschrift;
  font-size: 14px;
  color: #2d292a;
  opacity: 0.8;
  ${({dark}) => dark && 'color: #e5e1e2;'}
`;

export const StyledTextInput = styled.TextInput<Theme>`
  border-width: 0.7px;
  width: ${screenWidth - 42}px;
  border-radius: 10px;
  font-size: 18px;
  border-color: #2d292a;
  ${({dark}) => dark && 'border-color: #e5e1e2;'}
  text-align: center;
`;

export const ButtonsContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TimeContainer = styled.View`
  flex-direction: row;
  align-self: flex-end;
  margin-top: 7px;
  opacity: 0.7;
`;

export const HeaderContainer = styled.View`
  align-items: center;
`;

export const CreateTitle = styled.Text<Theme>`
  margin-top: 7px;
  font-family: calibri;
  font-size: 36px;
  color: #2d292a;
  opacity: 0.8;
  ${({dark}) => dark && 'color: #e5e1e2;'}
`;

export const TopMiddleContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 14px;
`;

export const IconImage = styled.Image<Theme>`
  width: 18px;
  height: 18px;
  opacity: 0.7;
  tint-color: #2d292a;
  ${({dark}) => dark && 'tint-color: #e5e1e2;'}
`;

export const ProfileImage = styled.Image<Theme>`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border-width: 1.2px;
  border-color: #2d292a;
  ${({dark}) => dark && 'border-color: #e5e1e2;'}
`;
