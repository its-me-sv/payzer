import React, {useCallback, useState} from 'react';
import axios from 'axios';

import {AccountNavProps} from '../../../infrastructure/navigation/accounts.types';
import {useThemeContext} from '../../../context/theme.context';
import OTPInput from '../components/otp-input.component';
import BlockLoader from '../../../components/loader';
import {useAPIContext} from '../../../context/api.context';

import {
  Container,
  Title,
  MiddleContainer,
  Caption,
  ClayLocker,
  Footer,
  FooterText,
} from '../components/styles';

interface props extends AccountNavProps<'otp'> {}

const OTPScreen: React.FC<props> = ({navigation, route}) => {
  const {dark} = useThemeContext();
  const {REST_API} = useAPIContext();
  const {phoneNo, country} = route.params;
  const [loading, setLoading] = useState<boolean>(false);

  const onFooterPress = useCallback(() => {
    navigation.navigate('Conditions');
  }, [navigation]);

  const onCancel = useCallback(() => {
    setLoading(false);
    navigation.navigate('Phone Number');
  }, [setLoading, navigation]);

  const onVerify = useCallback(
    (otp: string) => {
      setLoading(true);
      axios
        .post(`${REST_API}/auth/check-otp`, {otp, phoneNo})
        .then(() => {
          setLoading(false);
          navigation.replace('create', {phoneNo, country});
        })
        .catch(err => {
          setLoading(false);
          console.log(err);
        });
    },
    [setLoading, REST_API, phoneNo, country, navigation],
  );

  return (
    <>
      {loading && <BlockLoader />}
      <Container dark={dark}>
        <Title dark={dark}>Payzer</Title>
        <MiddleContainer>
          <ClayLocker />
          <Caption dark={dark}>
            Enter the verification code sent to {phoneNo}
          </Caption>
          <OTPInput cancel={onCancel} verify={onVerify} />
        </MiddleContainer>
        <Footer onPress={onFooterPress}>
          <FooterText dark={dark}>Terms and Conditions</FooterText>
          <FooterText dark={dark}>Privacy Policy</FooterText>
        </Footer>
      </Container>
    </>
  );
};

export default OTPScreen;
