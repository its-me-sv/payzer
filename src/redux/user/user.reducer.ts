import {Reducer} from 'redux';

import userTypes from './user.types';

import {UserState, AppAction} from '../types';

const initialState: UserState = {
  pending: false,
  error: null,
  user: null,
};

const UserReducer: Reducer<UserState, AppAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case userTypes.USER_PENDING:
      return {...state, pending: true};
    case userTypes.USER_FAILURE:
      return {pending: false, error: action.payload, user: null};
    case userTypes.USER_SUCCESS:
      return {pending: false, error: null, user: action.payload};
    case userTypes.USER_RESET:
      return {pending: false, error: null, user: null};
    default:
      return state;
  }
};

export default UserReducer;
