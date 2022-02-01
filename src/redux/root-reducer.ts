import {combineReducers} from 'redux';

import SliderReducer from './slider/slider.reducer';
import UserReducer from './user/user.reducer';
import {AppState} from './types';

const rootReducer = combineReducers<AppState>({
  slider: SliderReducer,
  user: UserReducer,
});

export default rootReducer;
