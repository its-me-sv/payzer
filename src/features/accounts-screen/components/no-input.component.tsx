import React, {useState, useCallback} from 'react';
import PhoneInput, {isValidNumber} from 'react-native-phone-number-input';
import styled from 'styled-components/native';
import {Button} from 'react-native';

const CustomisedPhoneNoInput = styled(PhoneInput).attrs({
  textContainerStyle: {
    borderRadius: 10,
    paddingHorizontal: 0,
    paddingVertical: 0,
    elevation: 42,
  },
  containerStyle: {
    borderRadius: 10,
    elevation: 42,
    borderWidth: 1,
    borderColor: '#b3b0b0',
    width: '100%',
  },
  textInputStyle: {
    fontSize: 18,
  },
  codeTextStyle: {
    fontSize: 18,
  },
})``;

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

interface props {}

const PhoneNumberInput: React.FC<props> = () => {
  const [country, setCountry] = useState<Country>(India);
  const [phoneNo, setPhoneNo] = useState<string>('');

  const onSubmit = useCallback(() => {
    console.log(country, phoneNo);
  }, [country, phoneNo]);

  return (
    <>
      <CustomisedPhoneNoInput
        onChangeCountry={setCountry}
        onChangeFormattedText={setPhoneNo}
        defaultCode="IN"
        layout="second"
        withShadow
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
