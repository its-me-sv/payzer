import React, {useCallback, useEffect, useState} from 'react';

import {AccountNavProps} from '../../../infrastructure/navigation/accounts.types';
import {useThemeContext} from '../../../context/theme.context';
import {useCreateAccContext} from '../../../context/create.context';

import BlockLoader from '../../../components/loader';

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
  const {setPhoneNo, setCountry} = useCreateAccContext();
  const [loading, setLoading] = useState<boolean>(false);

  const onFooterPress = useCallback(() => {
    navigation.navigate('Conditions');
  }, [navigation]);

  useEffect(() => {
    const {phoneNo, country} = route.params;
    setPhoneNo(phoneNo);
    setCountry(country);
  }, [route.params, setPhoneNo, setCountry]);

  return (
    <>
      {loading && <BlockLoader />}
      <Container dark={dark}>
        <HeaderContainer>
          <ClayWallet />
          <CreateTitle dark={dark}>Create Account</CreateTitle>
        </HeaderContainer>
        <MiddleContainer>
          <Images />
          <NameInput loadingSetter={setLoading} />
        </MiddleContainer>
        <Footer onPress={onFooterPress}>
          <FooterText dark={dark}>Terms and Conditions</FooterText>
          <FooterText dark={dark}>Privacy Policy</FooterText>
        </Footer>
      </Container>
    </>
  );
};

export default CreateScreen;
