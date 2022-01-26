import React from 'react';
import styled from 'styled-components/native';

import Opener from '../components/opener';
import SlideHandler from '../components/slider-handler.component';

interface props {}

const SliderContainer = styled.View`
  flex: 1;
`;

const SliderScreen: React.FC<props> = () => {
  return (
    <SliderContainer>
      <Opener />
      <SlideHandler />
    </SliderContainer>
  );
};

export default SliderScreen;
