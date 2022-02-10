import {combineReducers} from 'redux';
import {persistReducer, PersistConfig} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SliderReducer from './slider/slider.reducer';
import UserReducer from './user/user.reducer';
import ForexReducer from './forex/forex.reducer';
import CardsReducer from './cards/card.reducer';
import {AppState} from './types';

const persistConfig: PersistConfig<AppState> = {
  key: 'payzer-cs',
  storage: AsyncStorage,
  whitelist: ['slider', 'user', 'forex'],
};

const rootReducer = combineReducers<AppState>({
  slider: SliderReducer,
  user: UserReducer,
  forex: ForexReducer,
  cards: CardsReducer,
});

export default persistReducer(persistConfig, rootReducer);
