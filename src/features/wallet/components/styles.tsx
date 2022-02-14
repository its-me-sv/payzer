import styled from 'styled-components/native';
import {Picker, PickerProps} from '@react-native-picker/picker';

interface Theme {
  dark: boolean;
}

export const WalletsWrapper = styled.View<Theme>`
  flex: 1;
  background-color: #222021;
  ${({dark}) => !dark && 'background-color: #e5e1e2;'}
`;

export const DetailsWrapper = styled.View<Theme>`
  flex: 1;
  background-color: #222021;
  ${({dark}) => !dark && 'background-color: #e5e1e2;'}
  justify-content: space-evenly;
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
  width: 100%;
  height: 100%;
`;

export const CardId = styled.Text`
  font-family: bahnschrift;
  color: #e5e1e2;
  position: absolute;
  bottom: 28%;
  align-self: center;
  font-size: 21px;
  opacity: 0.8;
  letter-spacing: 3px;
`;

export const TouchWrapper = styled.TouchableOpacity`
  width: 88%;
  height: 30%;
`;

export const HeaderWrapper1 = styled.View`
  padding: 2%;
  padding-top: 1%;
`;

export const CardId1 = styled.Text<Theme>`
  font-family: bahnschrift;
  letter-spacing: 3px;
  color: #222021;
  ${({dark}) => dark && 'color: #e5e1e2;'}
`;

export const HeaderCard = styled.ImageBackground`
  align-self: center;
  width: 85%;
  height: 25%;
`;

export const Body = styled.View<Theme>`
  width: 93%;
  height: 24%;
  align-self: center;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const BodyText = styled.Text<Theme>`
  font-family: bahnschrift;
  font-size: 18px;
  color: #222021;
  ${({dark}) => dark && 'color: #e5e1e2;'}
`;

export const ChartImage = styled.Image`
  width: 136px;
  height: 138px;
`;

export const IssuedText = styled.Text<Theme>`
  align-self: center;
  font-family: bahnschrift;
  font-size: 18px;
  color: #222021;
  ${({dark}) => dark && 'color: #e5e1e2;'}
`;

export const TouchWrapper1 = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
`;

export const BookImage = styled.Image`
  width: 84px;
  height: 122px;
`;

export const ItemText = styled.Text<Theme>`
  font-family: bahnschrift;
  margin-top: 3px;
  margin-left: 3px;
  font-size: 18px;
  opacity: 0.7;
  color: #222021;
  ${({dark}) => dark && 'color: #e5e1e2;'}
`;

export const AddAmountView = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
})<Theme>`
  background-color: rgba(34, 32, 32, 0.6);
  ${({dark}) => dark && 'background-color: rgba(229, 225, 226, 0.6);'}
`;

export const AddAmountContainer = styled.View<Theme>`
  justify-content: space-around;
  background-color: #222021;
  ${({dark}) => !dark && 'background-color: #e5e1e2;'}
  border-radius: 14px;
  width: 84%;
  padding: 7%;
`;

export const ModalTitle = styled.Text<Theme>`
  font-family: calibri;
  font-size: 21px;
  color: #222021;
  ${({dark}) => dark && 'color: #e5e1e2;'}
  align-self: center;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const AmountInput = styled.TextInput.attrs({
  keyboardType: 'decimal-pad',
})<Theme>`
  font-family: bahnschrift;
  font-size: 18px;
  border-width: 0.7px;
  padding: 6px;
  border-radius: 7px;
  text-align: center;
  margin-bottom: 14px;
  border-color: #222021;
  ${({dark}) => dark && 'border-color: #e5e1e2;'}
`;

export const PickerHolder = styled.View<Theme>`
  width: 100%;
  border-width: 1px;
  border-radius: 7px;
  margin-bottom: 14px;
  margin-top: 14px;
  border-color: #222021;
  ${({dark}) => dark && 'border-color: #e5e1e2;'}
`;
