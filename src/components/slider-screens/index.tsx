import React from 'react';
import styled from 'styled-components/native';

import Opener from '../opener';
import SlideHandler from '../slider-handler';

interface props {}

const SliderContainer = styled.View`
  flex: 1;
`;

const SliderScreen: React.FC<props> = () => {
  console.log('rendered');
  return (
    <SliderContainer>
      <Opener />
      <SlideHandler />
    </SliderContainer>
  );
};

export default SliderScreen;
