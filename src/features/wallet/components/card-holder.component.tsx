import React from 'react';

import {BodyWrapper, CardImage, CardId} from './styles';

interface props {}

const AllCards: React.FC<props> = () => {
  return (
    <BodyWrapper>
      <CardImage>
        <CardId>1234-5678-9101-1121</CardId>
      </CardImage>
      <CardImage>
        <CardId>1234-5678-9101-1121</CardId>
      </CardImage>
      <CardImage>
        <CardId>1234-5678-9101-1121</CardId>
      </CardImage>
    </BodyWrapper>
  );
};

export default AllCards;
