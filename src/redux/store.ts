import {createStore, Store, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {persistStore, Persistor} from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [thunk];

__DEV__ && middlewares.push(logger);

export const store: Store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export const persistor: Persistor = persistStore(store);
