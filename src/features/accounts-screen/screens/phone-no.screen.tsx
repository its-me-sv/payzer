import React from 'react';

import {
  Container,
  Title,
  MiddleContainer,
  ClayPhone,
  Caption,
  Footer,
  FooterText,
} from '../components/styles';

import PhoneNumberInput from '../components/no-input.component';

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
        <PhoneNumberInput />
      </MiddleContainer>
      <Footer>
        <FooterText>Terms and Conditions</FooterText>
        <FooterText>Privacy Policy</FooterText>
      </Footer>
    </Container>
  );
};

export default PhoneNoScreen;
