import {createStore, Store} from 'redux';

import rootReducer from './root-reducer';

const store: Store = createStore(rootReducer);

export default store;
