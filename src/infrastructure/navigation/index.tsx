import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AccountsNavigator from './accounts.navigator';

interface props {}

const RootNavigator: React.FC<props> = () => {
  return (
    <NavigationContainer>
      <AccountsNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
