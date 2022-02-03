import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

export interface AppAction extends Action {
  payload?: any;
}

export interface SliderState {
  progress: number;
  started: boolean;
}

export interface PayzerUser {
  id?: string;
  phoneNo?: string;
  country?: string;
  name?: string;
  profilePicture?: string;
  credit?: number;
  debit?: number;
  cardCount?: number;
  createdAt?: string;
  otp?: string;
}

export interface UserState {
  pending: boolean;
  error: null | Error;
  user: null | PayzerUser;
}

export interface AppState {
  slider: SliderState;
  user: UserState;
}

export interface ExtraDispatchArgs {}

export interface DispatchProps {
  dispatch: ThunkDispatch<AppState, ExtraDispatchArgs, AppAction>;
}
