import React from 'react';
import {TouchableOpacity, ImageSourcePropType} from 'react-native';
import styled from 'styled-components/native';

interface props {
  pressEvent: () => void;
  direction: 'l' | 'r';
}

const IconImage = styled.Image`
  width: 18px;
  height: 18px;
  opacity: 0.7;
`;

const leftArrow: ImageSourcePropType = require('../../../../assets/icons/left-arrow.png');
const rightArrow: ImageSourcePropType = require('../../../../assets/icons/right-arrow.png');

const SliderArrow: React.FC<props> = ({pressEvent, direction}) => {
  return (
    <TouchableOpacity onPress={pressEvent}>
      <IconImage source={direction === 'l' ? leftArrow : rightArrow} />
    </TouchableOpacity>
  );
};

export default SliderArrow;
