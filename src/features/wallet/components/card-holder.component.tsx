import React from 'react';

import {BodyWrapper} from './styles';

import Card from './card.component';

interface props {}

const AllCards: React.FC<props> = () => {
  return (
    <BodyWrapper>
      <Card variant={1} />
      <Card variant={2} />
      <Card variant={3} />
    </BodyWrapper>
  );
};

export default AllCards;
