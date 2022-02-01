import {AppAction} from '../types';

import sliderTypes from './slider.types';

export const moveRight = () =>
  <AppAction>{
    type: sliderTypes.MOVE_RIGHT,
  };

export const moveLeft = () =>
  <AppAction>{
    type: sliderTypes.MOVE_LEFT,
  };

export const setStarted = (val: boolean) =>
  <AppAction>{
    type: sliderTypes.SET_STARTED,
    payload: val,
  };
