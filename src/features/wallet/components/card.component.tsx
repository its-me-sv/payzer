import React from 'react';
import {ImageRequireSource} from 'react-native';

import {CardImage, CardId} from './styles';

const variants: {[key: string]: ImageRequireSource} = {
  1: require('../../../../assets/clays/card-1.png'),
  2: require('../../../../assets/clays/card-2.png'),
  3: require('../../../../assets/clays/card-3.png'),
};

interface props {
  variant: number;
}

const Card: React.FC<props> = ({variant}) => {
  return (
    <CardImage source={variants[variant]}>
      <CardId>1234-5678-9101-1121</CardId>
    </CardImage>
  );
};

export default Card;
