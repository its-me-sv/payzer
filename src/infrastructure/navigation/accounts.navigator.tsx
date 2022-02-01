import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {AccountParamList} from './accounts.types';
import PhoneNoScreen from '../../features/accounts-screen/screens/phone-no.screen';
import OTPScreen from '../../features/accounts-screen/screens/otp.screen';
import ConditionsScreen from '../../components/conditions';
import CreateScreen from '../../features/accounts-screen/screens/create.screen';

import {useThemeContext} from '../../context/theme.context';

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

interface props {}

const AccountsNavigator: React.FC<props> = () => {
  const {dark} = useThemeContext();
  return (
    <AccountsStack.Navigator screenOptions={() => getScreenOptions(dark)}>
      <AccountsStack.Screen name="create" component={CreateScreen} />
      <AccountsStack.Screen name="Phone Number" component={PhoneNoScreen} />
      <AccountsStack.Screen name="otp" component={OTPScreen} />
      <AccountsStack.Screen
        options={ScreenOptionsForConditions}
        name="Conditions"
        component={ConditionsScreen}
      />
    </AccountsStack.Navigator>
  );
};

export default AccountsNavigator;
