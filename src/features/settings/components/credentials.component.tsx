import React from 'react';
import {Button} from 'react-native';

import Images from '../../accounts-screen/components/images.component';
import {StyledTextInput} from '../../accounts-screen/components/styles';
import {useThemeContext} from '../../../context/theme.context';
import {
  CredContainer,
  CredTitleText,
  Header,
  Body,
  Footer,
  Spacer,
} from './styles';

interface props {
  cancel: () => void;
}

const Credentials: React.FC<props> = ({cancel}) => {
  const {dark} = useThemeContext();
  return (
    <CredContainer dark={dark}>
      <CredTitleText dark={dark}>Edit credentials</CredTitleText>
      <Header>
        <Images />
      </Header>
      <Body>
        <StyledTextInput dark={dark} placeholder="Name" />
        <Spacer />
        <StyledTextInput dark={dark} placeholder="Phone Number" />
      </Body>
      <Footer>
        <Button title="CANCEL" onPress={cancel} color="#b73737" />
        <Button title="UPDATE" />
      </Footer>
    </CredContainer>
  );
};

export default Credentials;
