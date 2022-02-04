import axios from 'axios';
import {AppAction, Forex} from '../types';

import forexTypes from './forex.types';

export const forexPending = () =>
  <AppAction>{
    type: forexTypes.FOREX_PENDING,
  };

export const forexFailure = (err: null | Error) =>
  <AppAction>{
    type: forexTypes.FOREX_FAILURE,
    payload: err,
  };

export const forexSuccess = (forexData: Forex) =>
  <AppAction>{
    type: forexTypes.FOREX_SUCCESS,
    payload: forexData,
  };

export const fetchForex = () => dispatch => {
  axios
    .get(
      'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json',
    )
    .then(({data}) => dispatch(forexSuccess(data.inr)))
    .catch(err => dispatch(forexFailure(err)));
};
