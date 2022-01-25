/* eslint-disable prettier/prettier */
import {AppAction} from '../types';

import sliderTypes from './slider.types';

export const moveRight = () => <AppAction>({
  type: sliderTypes.MOVE_RIGHT,
});

export const moveLeft = () => <AppAction>({
  type: sliderTypes.MOVE_LEFT,
});
