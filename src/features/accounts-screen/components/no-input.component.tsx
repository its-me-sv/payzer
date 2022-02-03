import React, {useState, useCallback} from 'react';
import PhoneInput, {
  isValidNumber,
  PhoneInputProps,
} from 'react-native-phone-number-input';
import styled from 'styled-components/native';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import {useThemeContext} from '../../../context/theme.context';
import {useAPIContext} from '../../../context/api.context';

interface ThemedPhoneProps extends PhoneInputProps {
  dark: boolean;
}

const CustomisedPhoneNoInput = styled(PhoneInput).attrs<ThemedPhoneProps>(
  ({dark}) => ({
    textContainerStyle: {
      borderRadius: 10,
      paddingHorizontal: 0,
      paddingVertical: 0,
      backgroundColor: dark ? '#222021' : '#e5e1e2',
    },
    containerStyle: {
      borderRadius: 10,
      elevation: 7,
      borderWidth: 1,
      borderColor: !dark ? '#222021' : '#e5e1e2',
      width: '100%',
      backgroundColor: dark ? '#222021' : '#e5e1e2',
    },
    textInputStyle: {
      fontSize: 18,
      color: !dark ? '#222021' : '#e5e1e2',
    },
    codeTextStyle: {
      fontSize: 18,
      color: !dark ? '#222021' : '#e5e1e2',
    },
    countryPickerButtonStyle: {
      color: 'blue',
    },
  }),
)``;

const Seperator = styled.View`
  margin-top: 7px;
  margin-bottom: 7px;
`;

interface Country {
  callingCode: string[];
  cca2: string;
  currency: string[];
  flag: string;
  name: string;
  region: string;
  subregion: string;
}

const India: Country = {
  callingCode: ['91'],
  cca2: 'IN',
  currency: ['INR'],
  flag: 'flag-in',
  name: 'India',
  region: 'Asia',
  subregion: 'Southern Asia',
};

interface props {
  loadingSetter: (val: boolean) => void;
}

const PhoneNumberInput: React.FC<props> = ({loadingSetter}) => {
  const {REST_API} = useAPIContext();
  const navigation = useNavigation();
  const [country, setCountry] = useState<Country>(India);
  const [phoneNo, setPhoneNo] = useState<string>('');

  const {dark} = useThemeContext();

  const onSubmit = useCallback(() => {
    loadingSetter(true);
    axios
      .post(`${REST_API}/auth/send-otp`, {phoneNo})
      .then(() => {
        loadingSetter(false);
        const params = {
          phoneNo,
          country: `${country.name}/${country.currency[0]}`,
        };
        navigation.replace('otp', params);
      })
      .catch(err => {
        loadingSetter(false);
        console.log(err);
      });
  }, [REST_API, phoneNo, country, navigation, loadingSetter]);

  return (
    <>
      <CustomisedPhoneNoInput
        onChangeCountry={setCountry}
        onChangeFormattedText={setPhoneNo}
        defaultCode="IN"
        layout="second"
        withShadow
        dark={dark}
      />
      <Seperator />
      <Button
        title="Send Verification Code"
        onPress={onSubmit}
        disabled={!isValidNumber(phoneNo, country.cca2)}
      />
    </>
  );
};

export default PhoneNumberInput;
