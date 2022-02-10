import React from 'react';
import {connect} from 'react-redux';

import {BodyWrapper} from './styles';

import Card from './card.component';
import {AppState, PayzerCard} from '../../../redux/types';

interface props {
  cards: Array<PayzerCard>;
}

const AllCards: React.FC<props> = ({cards}) => {
  return (
    <BodyWrapper>
      {cards.map((card, idx) => (
        <Card key={idx} cardId={card.id} variant={idx + 1} />
      ))}
    </BodyWrapper>
  );
};

const mapStateToProps = (state: AppState) => ({
  cards: state.cards.cards,
});

export default connect(mapStateToProps)(AllCards);
