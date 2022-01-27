import React, {useCallback} from 'react';

import {
  Container,
  Title,
  MiddleContainer,
  ClayPhone,
  Caption,
  Footer,
  FooterText,
} from '../components/styles';

import {AccountNavProps} from '../../../infrastructure/navigation/accounts.types';
import PhoneNumberInput from '../components/no-input.component';

interface props extends AccountNavProps<'Phone Number'> {}

const PhoneNoScreen: React.FC<props> = ({navigation}) => {
  const onFooterPress = useCallback(() => {
    navigation.navigate('Conditions');
  }, [navigation]);
  return (
    <Container>
      <Title>Payzer</Title>
      <MiddleContainer>
        <ClayPhone />
        <Caption>
          Please confirm your country code and enter your phone number
        </Caption>
        <PhoneNumberInput />
      </MiddleContainer>
      <Footer onPress={onFooterPress}>
        <FooterText>Terms and Conditions</FooterText>
        <FooterText>Privacy Policy</FooterText>
      </Footer>
    </Container>
  );
};

export default PhoneNoScreen;
