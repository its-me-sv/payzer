import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {connect} from 'react-redux';

import {AccountParamList} from './accounts.types';
import PhoneNoScreen from '../../features/accounts-screen/screens/phone-no.screen';
import OTPScreen from '../../features/accounts-screen/screens/otp.screen';
import ConditionsScreen from '../../components/conditions';
import CreateScreen from '../../features/accounts-screen/screens/create.screen';
import SliderScreen from '../../features/first-install-screen/screens';

import {useThemeContext} from '../../context/theme.context';
import {AppState} from '../../redux/types';

const AccountsStack = createNativeStackNavigator<AccountParamList>();

const getScreenOptions = (dark: boolean): NativeStackNavigationOptions => ({
  headerShown: false,
  headerTintColor: dark ? '#e5e1e2' : '#222021',
  headerStyle: {
    backgroundColor: !dark ? '#e5e1e2' : '#222021',
  },
});

const ScreenOptionsForConditions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
};

interface props {
  firstTime: boolean;
}

const AccountsNavigator: React.FC<props> = ({firstTime}) => {
  const {dark} = useThemeContext();
  return (
    <AccountsStack.Navigator screenOptions={() => getScreenOptions(dark)}>
      {firstTime && (
        <AccountsStack.Screen name="features" component={SliderScreen} />
      )}
      <AccountsStack.Screen name="Phone Number" component={PhoneNoScreen} />
      <AccountsStack.Screen name="otp" component={OTPScreen} />
      <AccountsStack.Screen name="create" component={CreateScreen} />
      <AccountsStack.Screen
        options={ScreenOptionsForConditions}
        name="Conditions"
        component={ConditionsScreen}
      />
    </AccountsStack.Navigator>
  );
};

const mapStateToProps = (state: AppState) => ({
  firstTime: state.slider.started === false,
});

export default connect(mapStateToProps)(AccountsNavigator);
