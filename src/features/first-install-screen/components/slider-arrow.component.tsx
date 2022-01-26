import React from 'react';
import {ImageSourcePropType} from 'react-native';
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

const TouchStyle = styled.TouchableOpacity`
  padding: 7px;
`;

const leftArrow: ImageSourcePropType = require('../../../../assets/icons/left-arrow.png');
const rightArrow: ImageSourcePropType = require('../../../../assets/icons/right-arrow.png');

const SliderArrow: React.FC<props> = ({pressEvent, direction}) => {
  return (
    <TouchStyle onPress={pressEvent}>
      <IconImage source={direction === 'l' ? leftArrow : rightArrow} />
    </TouchStyle>
  );
};

export default SliderArrow;
