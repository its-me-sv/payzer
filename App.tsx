import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {ThemeContextProvider} from './src/context/theme.context';
import {APIContextProvider} from './src/context/api.context';
import {CreateAccContextProvider} from './src/context/create.context';
import {TokenContextProvider} from './src/context/token.context';
import RootNavigator from './src/infrastructure/navigation';
import {store, persistor} from './src/redux/store';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeContextProvider>
          <APIContextProvider>
            <CreateAccContextProvider>
              <TokenContextProvider>
                <RootNavigator />
              </TokenContextProvider>
            </CreateAccContextProvider>
          </APIContextProvider>
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
