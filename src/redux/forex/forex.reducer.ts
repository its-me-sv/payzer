import {Reducer} from 'redux';

import forexTypes from './forex.types';

import {ForexState, AppAction} from '../types';

const initialState: ForexState = {
  pending: false,
  error: null,
  forex: {},
};

const ForexReducer: Reducer<ForexState, AppAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case forexTypes.FOREX_PENDING:
      return {...state, pending: true};
    case forexTypes.FOREX_FAILURE:
      return {...state, pending: false, error: action.payload};
    case forexTypes.FOREX_SUCCESS:
      return {...state, pending: false, forex: action.payload || {}};
    default:
      return state;
  }
};

export default ForexReducer;
