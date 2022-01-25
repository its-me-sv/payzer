import {combineReducers} from 'redux';

import SliderReducer from './slider/slider.reducer';
import {AppState} from './types';

const rootReducer = combineReducers<AppState>({
  slider: SliderReducer,
});

export default rootReducer;
