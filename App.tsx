import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import {ThemeContextProvider} from './src/context/theme.context';
import RootNavigator from './src/infrastructure/navigation';
import store from './src/redux/store';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <RootNavigator />
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
