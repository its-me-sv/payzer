import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import SliderScreen from './src/features/first-install-screen/screens';
import store from './src/redux/store';

const App: React.FC = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 2000);
  }, []);

  return (
    <Provider store={store}>
      <SliderScreen />
    </Provider>
  );
};

export default App;
