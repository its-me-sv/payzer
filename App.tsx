import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import ConditionsScreen from './src/components/scroller';
import store from './src/redux/store';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <ConditionsScreen />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
