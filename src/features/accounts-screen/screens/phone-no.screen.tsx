import React from 'react';
import {Button} from 'react-native';

import {
  Container,
  Title,
  MiddleContainer,
  ClayPhone,
  Caption,
  PhoneNumberInput,
  Footer,
  FooterText,
} from '../components/styles';

interface props {}

const PhoneNoScreen: React.FC<props> = () => {
  return (
    <Container>
      <Title>Payzer</Title>
      <MiddleContainer>
        <ClayPhone />
        <Caption>
          Please confirm your country code and enter your phone number
        </Caption>
        <PhoneNumberInput placeholder="Phone Number" />
        <Button title="Send Verification Code" />
      </MiddleContainer>
      <Footer>
        <FooterText>Terms and Conditions</FooterText>
        <FooterText>Privacy Policy</FooterText>
      </Footer>
    </Container>
  );
};

export default PhoneNoScreen;
