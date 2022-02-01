import {Reducer} from 'redux';

import sliderTypes from './slider.types';

import {SliderState, AppAction} from '../types';

const initialState: SliderState = {
  progress: 0,
  started: false,
};

const SliderReducer: Reducer<SliderState, AppAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case sliderTypes.MOVE_LEFT:
      return {...state, progress: state.progress - 1};
    case sliderTypes.MOVE_RIGHT:
      return {...state, progress: state.progress + 1};
    case sliderTypes.SET_STARTED:
      return {...state, started: action.payload};
    default:
      return state;
  }
};

export default SliderReducer;
