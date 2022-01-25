import React from 'react';
import {ImageSourcePropType, Button} from 'react-native';

import {
  SliderContainer,
  SliderHandler,
  IconImage,
  ButtonHolder,
} from './styles';

import Opener from '../opener';

interface props {}

const leftArrow: ImageSourcePropType = require('../../../assets/icons/left-arrow.png');
const rightArrow: ImageSourcePropType = require('../../../assets/icons/right-arrow.png');

const dot: ImageSourcePropType = require('../../../assets/icons/dot.png');
const dotFilled: ImageSourcePropType = require('../../../assets/icons/dot-filled.png');

const SliderScreen: React.FC<props> = () => {
  return (
    <SliderContainer>
      <Opener variant={3} />
      <SliderHandler>
        <IconImage source={leftArrow} />
        <IconImage source={dotFilled} />
        <IconImage source={dot} />
        <IconImage source={dot} />
        <IconImage source={dot} />
        <IconImage source={rightArrow} />
      </SliderHandler>
      <ButtonHolder>
        <Button title="Get started" color="#696262" />
      </ButtonHolder>
    </SliderContainer>
  );
};

export default SliderScreen;
