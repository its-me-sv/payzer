import React, {useCallback} from 'react';

import {AccountNavProps} from '../../../infrastructure/navigation/accounts.types';
import {useThemeContext} from '../../../context/theme.context';
import OTPInput from '../components/otp-input.component';

import {
  Container,
  Title,
  MiddleContainer,
  Caption,
  ClayLocker,
  Footer,
  FooterText,
} from '../components/styles';

interface props extends AccountNavProps<'otp'> {
  userPhoneNo: string;
}

const OTPScreen: React.FC<props> = ({userPhoneNo, navigation}) => {
  const {dark} = useThemeContext();
  const onFooterPress = useCallback(() => {
    navigation.navigate('Conditions');
  }, [navigation]);

  return (
    <Container dark={dark}>
      <Title dark={dark}>Payzer</Title>
      <MiddleContainer>
        <ClayLocker />
        <Caption dark={dark}>
          Enter the verification code sent to {userPhoneNo}
        </Caption>
        <OTPInput />
      </MiddleContainer>
      <Footer onPress={onFooterPress}>
        <FooterText dark={dark}>Terms and Conditions</FooterText>
        <FooterText dark={dark}>Privacy Policy</FooterText>
      </Footer>
    </Container>
  );
};

OTPScreen.defaultProps = {
  userPhoneNo: '+919790229904',
};

export default OTPScreen;
