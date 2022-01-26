import React from 'react';
import {Button} from 'react-native';

import {
  Container,
  Title,
  MiddleContainer,
  ClayPhone,
  Caption,
  PhoneNumberInput,
  PushToEnd,
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
        <PushToEnd>
          <Button title="Send Verification Code" />
        </PushToEnd>
      </MiddleContainer>
      <Footer>
        <FooterText>Terms and Conditions</FooterText>
        <FooterText>Privacy Policy</FooterText>
      </Footer>
    </Container>
  );
};

export default PhoneNoScreen;
