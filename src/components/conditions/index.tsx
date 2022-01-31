import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';

import {TermsAndConditions, PrivacyAndPolicy} from './data';
import {useThemeContext} from '../../context/theme.context';

interface Theme {
  dark: boolean;
}

const Container = styled.View<Theme>`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  padding: 7%;
  background-color: #e5e1e2;
  ${({dark}) => dark && 'background-color: #222021;'}
`;

const InfoContainer = styled.View`
  align-items: center;
  max-height: 40%;
`;

const Title = styled.Text<Theme>`
  font-family: Gadamer;
  font-size: 84px;
  color: #2d292a;
  ${({dark}) => dark && 'color: #e5e1e2;'}
`;

const SubTitle = styled.Text<Theme>`
  font-family: calibri;
  font-size: 24px;
  opacity: 0.8;
  color: #2d292a;
  ${({dark}) => dark && 'color: #e5e1e2;'}
`;

const Article = styled.Text<Theme>`
  font-family: bahnschrift;
  font-size: 16px;
  opacity: 0.6;
  color: #2d292a;
  ${({dark}) => dark && 'color: #e5e1e2;'}
`;

interface props {}

const ConditionsScreen: React.FC<props> = () => {
  const {dark} = useThemeContext();
  return (
    <Container dark={dark}>
      <Title dark={dark}>Payzer</Title>
      <InfoContainer>
        <SubTitle dark={dark}>Terms and Conditions</SubTitle>
        <ScrollView>
          <Article dark={dark}>{TermsAndConditions}</Article>
        </ScrollView>
      </InfoContainer>
      <InfoContainer>
        <SubTitle dark={dark}>Privacy Policy</SubTitle>
        <ScrollView>
          <Article dark={dark}>{PrivacyAndPolicy}</Article>
        </ScrollView>
      </InfoContainer>
    </Container>
  );
};

export default ConditionsScreen;
