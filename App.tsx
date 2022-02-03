import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import {ThemeContextProvider} from './src/context/theme.context';
import {APIContextProvider} from './src/context/api.context';
import {CreateAccContextProvider} from './src/context/create.context';
import {TokenContextProvider} from './src/context/token.context';
import RootNavigator from './src/infrastructure/navigation';
import store from './src/redux/store';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <APIContextProvider>
          <CreateAccContextProvider>
            <TokenContextProvider>
              <RootNavigator />
            </TokenContextProvider>
          </CreateAccContextProvider>
        </APIContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
