import React from 'react';
import {Text} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {AccountParamList} from './accounts.types';
import PhoneNoScreen from '../../features/accounts-screen/screens/phone-no.screen';
import ConditionsScreen from '../../components/scroller';

const OTPScreen = () => <Text>OTP Screen</Text>;
const CreateScreen = () => <Text>OTP Screen</Text>;

const AccountsStack = createNativeStackNavigator<AccountParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

interface props {}

const AccountsNavigator: React.FC<props> = () => {
  return (
    <AccountsStack.Navigator
      screenOptions={screenOptions}
      initialRouteName="Phone Number">
      <AccountsStack.Screen name="Phone Number" component={PhoneNoScreen} />
      <AccountsStack.Screen name="otp" component={OTPScreen} />
      <AccountsStack.Screen name="create" component={CreateScreen} />
      <AccountsStack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
        name="Conditions"
        component={ConditionsScreen}
      />
    </AccountsStack.Navigator>
  );
};

export default AccountsNavigator;
