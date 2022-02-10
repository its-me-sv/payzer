import {Reducer} from 'redux';

import cardTypes from './card.types';

import {CardState, AppAction} from '../types';

const initialState: CardState = {
  pending: false,
  error: null,
  cards: [],
};

const CardsReducer: Reducer<CardState, AppAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case cardTypes.CARD_PENDING:
      return {...state, pending: true};
    case cardTypes.CARD_FAILURE:
      return {...state, pending: false, error: action.payload};
    case cardTypes.CARD_SUCCESS:
      return {pending: false, error: null, cards: action.payload};
    case cardTypes.CARD_NEW: {
      const oldCards = state.cards;
      const newCards = [...oldCards, action.payload];
      return {pending: false, error: null, cards: newCards};
    }
    default:
      return state;
  }
};

export default CardsReducer;
