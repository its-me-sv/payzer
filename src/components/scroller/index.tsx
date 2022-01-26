import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';

import {TermsAndConditions, PrivacyAndPolicy} from './data';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  margin: 7%;
`;

const InfoContainer = styled.View`
  align-items: center;
  max-height: 40%;
`;

const Title = styled.Text`
  font-family: Gadamer;
  font-size: 84px;
`;

const SubTitle = styled.Text`
  font-family: calibri;
  font-size: 24px;
`;

const Article = styled.Text`
  font-family: bahnschrift;
  font-size: 16px;
`;

interface props {}

const ConditionsScreen: React.FC<props> = () => {
  return (
    <Container>
      <Title>Payzer</Title>
      <InfoContainer>
        <SubTitle>Terms and Conditions</SubTitle>
        <ScrollView>
          <Article>{TermsAndConditions}</Article>
        </ScrollView>
      </InfoContainer>
      <InfoContainer>
        <SubTitle>Privacy and Policy</SubTitle>
        <ScrollView>
          <Article>{PrivacyAndPolicy}</Article>
        </ScrollView>
      </InfoContainer>
    </Container>
  );
};

export default ConditionsScreen;
