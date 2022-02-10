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
  phone_no?: string;
  country?: string;
  name?: string;
  profile_picture?: string;
  credit?: number;
  debit?: number;
  card_count?: number;
  created_at?: string;
  otp?: string;
}

export interface UserState {
  pending: boolean;
  error: null | Error;
  user: null | PayzerUser;
}

export interface Forex {
  [key: string]: number;
}

export interface ForexState {
  pending: boolean;
  error: null | Error;
  forex: null | Forex;
}

export interface PayzerCard {
  id: string;
  is_primary: boolean;
  credit?: number;
  debit?: number;
  created_at?: string;
}

export interface CardState {
  pending: boolean;
  error: null | Error;
  cards: Array<PayzerCard>;
}

export interface AppState {
  slider: SliderState;
  user: UserState;
  forex: ForexState;
  cards: CardState;
}

export interface ExtraDispatchArgs {}

export interface DispatchProps {
  dispatch: ThunkDispatch<AppState, ExtraDispatchArgs, AppAction>;
}
