import {AppAction, PayzerUser} from '../types';

import userTypes from './user.types';

export const userPending = () =>
  <AppAction>{
    type: userTypes.USER_PENDING,
  };

export const userFailure = (err: null | Error) =>
  <AppAction>{
    type: userTypes.USER_SUCCESS,
    payload: err,
  };

export const userSuccess = (userData: PayzerUser) =>
  <AppAction>{
    type: userTypes.USER_SUCCESS,
    payload: userData,
  };

export const userReset = () =>
  <AppAction>{
    type: userTypes.USER_RESET,
  };
