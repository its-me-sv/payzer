import React, {useCallback, useState} from 'react';

import {useThemeContext} from '../../../context/theme.context';

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
import BlockLoader from '../../../components/loader';

interface props extends AccountNavProps<'Phone Number'> {}

const PhoneNoScreen: React.FC<props> = ({navigation}) => {
  const {dark} = useThemeContext();
  const [loading, setLoading] = useState<boolean>(false);
  const onFooterPress = useCallback(() => {
    navigation.navigate('Conditions');
  }, [navigation]);

  return (
    <>
      {loading && <BlockLoader />}
      <Container dark={dark}>
        <Title dark={dark}>Payzer</Title>
        <MiddleContainer>
          <ClayPhone />
          <Caption dark={dark}>
            Please confirm your country code and enter your phone number
          </Caption>
          <PhoneNumberInput loadingSetter={setLoading} />
        </MiddleContainer>
        <Footer onPress={onFooterPress}>
          <FooterText dark={dark}>Terms and Conditions</FooterText>
          <FooterText dark={dark}>Privacy Policy</FooterText>
        </Footer>
      </Container>
    </>
  );
};

export default PhoneNoScreen;
