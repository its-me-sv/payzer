import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';

import AccountsNavigator from './accounts.navigator';
import AppNavigator from './app.navigator';

import {AppState} from '../../redux/types';

interface props {
  loggedOut: boolean;
}

const RootNavigator: React.FC<props> = ({loggedOut}) => {
  return (
    <NavigationContainer>
      {!loggedOut ? <AppNavigator /> : <AccountsNavigator />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state: AppState) => ({
  loggedOut: state.user.user == null,
});

export default connect(mapStateToProps)(RootNavigator);
