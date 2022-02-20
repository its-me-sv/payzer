import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const screenWidth: number = Dimensions.get('window').width;
interface Theme {
  dark: boolean;
}

export const TransferContainer = styled.View<Theme>`
  flex: 1;
  background-color: #2d292a;
  ${({dark}) => !dark && 'background-color: #e5e1e2;'}
`;

export const TitleText = styled.Text<Theme>`
  align-self: flex-start;
  font-family: calibri;
  font-size: 36px;
  padding-left: 14px;
  color: #e5e1e2;
  ${({dark}) => !dark && 'color: #222021;'}
`;

export const StyledTextInput = styled.TextInput<Theme>`
  border-width: 0.7px;
  align-self: center;
  width: ${screenWidth - 42}px;
  border-radius: 10px;
  font-size: 18px;
  border-color: #2d292a;
  ${({dark}) => dark && 'border-color: #e5e1e2;'}
  text-align: center;
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const ContactsContainer = styled.ScrollView`
  margin-bottom: 1%;
`;

export const ContactContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3%;
  margin-left: 6%;
`;

export const ProfileImage = styled.Image<Theme>`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border-width: 1.2px;
  border-color: #2d292a;
  ${({dark}) => dark && 'border-color: #e5e1e2;'}
  margin-right: 3%;
`;

export const ContactText = styled.Text<Theme>`
  font-family: bahnschrift;
  font-size: 16px;
  color: #2d292a;
  ${({dark}) => dark && 'color: #e5e1e2;'}
`;
