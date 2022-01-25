import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import SliderScreen from './src/components/slider-screens';
import store from './src/redux/store';

const App: React.FC = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 2000);
  }, []);

  return (
    <Provider store={store}>
      <SliderScreen />
      <StatusBar hidden />
    </Provider>
  );
};

export default App;
