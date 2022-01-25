import React from 'react';
import {TouchableOpacity, ImageSourcePropType} from 'react-native';
import styled from 'styled-components/native';

interface props {
  pressEvent: Function;
}

const IconImage = styled.Image`
  width: 18px;
  height: 18px;
  opacity: 0.7;
`;

const leftArrow: ImageSourcePropType = require('../../../assets/icons/left-arrow.png');

export const LeftArrow: React.FC<props> = ({pressEvent}) => {
  return (
    <TouchableOpacity onPress={pressEvent}>
      <IconImage source={leftArrow} />
    </TouchableOpacity>
  );
};

const rightArrow: ImageSourcePropType = require('../../../assets/icons/right-arrow.png');

export const RightArrow: React.FC<props> = ({pressEvent}) => {
  return (
    <TouchableOpacity onPress={pressEvent}>
      <IconImage source={rightArrow} />
    </TouchableOpacity>
  );
};
