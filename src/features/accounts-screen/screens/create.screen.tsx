import React, {useCallback} from 'react';

import {AccountNavProps} from '../../../infrastructure/navigation/accounts.types';
import {useThemeContext} from '../../../context/theme.context';

import {
  Container,
  HeaderContainer,
  ClayWallet,
  Footer,
  FooterText,
  CreateTitle,
  MiddleContainer,
} from '../components/styles';

import Images from '../components/images.component';
import NameInput from '../components/name-input.component';

interface props extends AccountNavProps<'create'> {}

const CreateScreen: React.FC<props> = ({navigation, route}) => {
  const {dark} = useThemeContext();
  const {phoneNo, country} = route.params;
  const onFooterPress = useCallback(() => {
    navigation.navigate('Conditions');
  }, [navigation]);
  return (
    <Container dark={dark}>
      <HeaderContainer>
        <ClayWallet />
        <CreateTitle dark={dark}>Create Account</CreateTitle>
      </HeaderContainer>
      <MiddleContainer>
        <Images userPhoneNo={phoneNo} />
        <NameInput />
      </MiddleContainer>
      <Footer onPress={onFooterPress}>
        <FooterText dark={dark}>Terms and Conditions</FooterText>
        <FooterText dark={dark}>Privacy Policy</FooterText>
      </Footer>
    </Container>
  );
};

export default CreateScreen;