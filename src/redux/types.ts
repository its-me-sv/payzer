/* eslint-disable prettier/prettier */
import {Action} from 'redux';

export interface AppAction extends Action {
  payload?: any
}

export interface SliderState {
    progress: number
}

export interface AppState {
    slider: SliderState
}
