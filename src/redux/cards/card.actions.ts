import axios from 'axios';
import {AppAction, PayzerCard} from '../types';

import cardTypes from './card.types';

export const cardPending = () =>
  <AppAction>{
    type: cardTypes.CARD_PENDING,
  };

export const cardFailure = (err: null | Error) =>
  <AppAction>{
    type: cardTypes.CARD_FAILURE,
    payload: err,
  };

export const cardSuccess = (cards: Array<PayzerCard>) =>
  <AppAction>{
    type: cardTypes.CARD_SUCCESS,
    payload: cards,
  };

export const fetchCards = (user_id: string, tkn: string) => dispatch => {
  dispatch(cardPending());
  axios
    .post(
      'http://192.168.29.97:5000/cards/retrieve-all',
      {user_id},
      {
        headers: {
          Authorization: `Bearer ${tkn}`,
        },
      },
    )
    .then(({data}: {data: Array<PayzerCard>}) => {
      dispatch(cardSuccess(data));
    })
    .catch(err => {
      console.log(err);
      dispatch(cardFailure(err));
    });
};
