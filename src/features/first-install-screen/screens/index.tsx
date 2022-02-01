import React from 'react';
import styled from 'styled-components/native';

import Opener from '../components/opener';
import SlideHandler from '../components/slider-handler.component';

import {useThemeContext} from '../../../context/theme.context';

interface props {}

interface Theme {
  dark: boolean;
}

const SliderContainer = styled.View<Theme>`
  flex: 1;
  background-color: #e5e1e2;
  ${({dark}) => dark && 'background-color: #222021;'}
`;

const SliderScreen: React.FC<props> = () => {
  const {dark} = useThemeContext();
  return (
    <SliderContainer dark={dark}>
      <Opener />
      <SlideHandler />
    </SliderContainer>
  );
};

export default SliderScreen;
