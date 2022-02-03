import axios from 'axios';
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

export const logoutUser = (token: string) => dispatch => {
  axios
    .delete('http://192.168.29.97:5000/auth/logout', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => dispatch(userReset()))
    .catch(console.log);
};
