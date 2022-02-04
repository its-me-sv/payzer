import React, {useState} from 'react';
import {ImageRequireSource} from 'react-native';

import {AppParamProps} from '../../../infrastructure/navigation/app.types';
import {useThemeContext} from '../../../context/theme.context';

import {
  Container,
  TitleText,
  ClayImage,
  ContentText,
  TouchWrapper,
  CredModal,
} from '../components/styles';
import Credentials from '../components/credentials.component';

interface props extends AppParamProps<'settings'> {}

const darked: ImageRequireSource = require('../../../../assets/clays/bulb-1.png');
const lighted: ImageRequireSource = require('../../../../assets/clays/bulb-2.png');

const TextImage: ImageRequireSource = require('../../../../assets/clays/text.png');
const CopyImage: ImageRequireSource = require('../../../../assets/clays/copy-1.png');

const SettingsScreen: React.FC<props> = ({navigation}) => {
  const {dark, toggleDark} = useThemeContext();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <CredModal
        dark={dark}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <Credentials cancel={() => setModalVisible(false)} />
      </CredModal>
      <Container dark={dark}>
        <TitleText dark={dark}>Settings</TitleText>
        <TouchWrapper onPress={toggleDark}>
          <ClayImage source={dark ? darked : lighted} />
          <ContentText dark={dark}>
            Switch to {dark ? 'light' : 'dark'} mode
          </ContentText>
        </TouchWrapper>
        <TouchWrapper onPress={() => setModalVisible(true)}>
          <ClayImage source={TextImage} />
          <ContentText dark={dark}>Edit credentials</ContentText>
        </TouchWrapper>
        <TouchWrapper onPress={() => navigation.navigate('conditions')}>
          <ClayImage source={CopyImage} />
          <ContentText dark={dark}>Terms and Policies</ContentText>
        </TouchWrapper>
      </Container>
    </>
  );
};

export default SettingsScreen;
