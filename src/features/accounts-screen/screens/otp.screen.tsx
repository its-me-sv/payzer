import React, {useCallback, useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {AccountNavProps} from '../../../infrastructure/navigation/accounts.types';
import {useThemeContext} from '../../../context/theme.context';
import OTPInput from '../components/otp-input.component';
import BlockLoader from '../../../components/loader';
import {useAPIContext} from '../../../context/api.context';
import {PayzerUser} from '../../../redux/types';
import {userSuccess} from '../../../redux/user/user.actions';
import {useTokenContext} from '../../../context/token.context';

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
  setUser: (user: PayzerUser) => void;
}

interface ResponseData {
  newAccount: boolean;
  user: PayzerUser;
  jwt_token: string;
}

const OTPScreen: React.FC<props> = ({navigation, route, setUser}) => {
  const {dark} = useThemeContext();
  const {REST_API} = useAPIContext();
  const {phoneNo, country} = route.params;
  const {setSession} = useTokenContext();
  const [loading, setLoading] = useState<boolean>(false);

  const onFooterPress = useCallback(() => {
    navigation.navigate('Conditions');
  }, [navigation]);

  const onCancel = useCallback(() => {
    setLoading(false);
    navigation.replace('Phone Number');
  }, [setLoading, navigation]);

  const onVerify = useCallback(
    (otp: string) => {
      setLoading(true);
      axios
        .post(`${REST_API}/auth/check-otp`, {otp, phoneNo})
        .then(() => {
          axios
            .post(`${REST_API}/auth/verify`, {phoneNo})
            .then(({data}: {data: ResponseData}) => {
              setLoading(false);
              if (data.newAccount) {
                navigation.replace('create', {phoneNo, country});
              } else {
                setUser(data.user);
                setSession(data.jwt_token);
              }
            })
            .catch(err => {
              setLoading(false);
              console.log(err);
            });
        })
        .catch(err => {
          setLoading(false);
          console.log(err);
        });
    },
    [setLoading, REST_API, phoneNo, country, navigation, setUser],
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

const mapDispatchToProps = (dispatch: Function) => ({
  setUser: (user: PayzerUser) => dispatch(userSuccess(user)),
});

export default connect(null, mapDispatchToProps)(OTPScreen);
