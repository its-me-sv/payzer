import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

export interface AppAction extends Action {
  payload?: any;
}

export interface SliderState {
  progress: number;
}

export interface AppState {
  slider: SliderState;
}

export interface ExtraDispatchArgs {}

export interface DispatchProps {
  dispatch: ThunkDispatch<AppState, ExtraDispatchArgs, AppAction>;
}
