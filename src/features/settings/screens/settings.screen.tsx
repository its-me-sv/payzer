import React from 'react';
import {ImageRequireSource} from 'react-native';

import {AppParamProps} from '../../../infrastructure/navigation/app.types';
import {useThemeContext} from '../../../context/theme.context';

import {
  Container,
  TitleText,
  ClayImage,
  ContentText,
  TouchWrapper,
} from '../components/styles';

interface props extends AppParamProps<'settings'> {}

const darked: ImageRequireSource = require('../../../../assets/clays/bulb-1.png');
const lighted: ImageRequireSource = require('../../../../assets/clays/bulb-2.png');

const TextImage: ImageRequireSource = require('../../../../assets/clays/text.png');
const CopyImage: ImageRequireSource = require('../../../../assets/clays/copy-1.png');

const SettingsScreen: React.FC<props> = () => {
  const {dark} = useThemeContext();
  return (
    <Container dark={dark}>
      <TitleText dark={dark}>Settings</TitleText>
      <TouchWrapper>
        <ClayImage source={dark ? darked : lighted} />
        <ContentText dark={dark}>Switch to light mode</ContentText>
      </TouchWrapper>
      <TouchWrapper>
        <ClayImage source={TextImage} />
        <ContentText dark={dark}>Edit credentials</ContentText>
      </TouchWrapper>
      <TouchWrapper>
        <ClayImage source={CopyImage} />
        <ContentText dark={dark}>Terms and Policies</ContentText>
      </TouchWrapper>
    </Container>
  );
};

export default SettingsScreen;
