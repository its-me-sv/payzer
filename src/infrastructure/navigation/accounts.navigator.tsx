import React from 'react';
import {Text} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import PhoneNoScreen from '../../features/accounts-screen/screens/phone-no.screen';
import ConditionsScreen from '../../components/scroller';

const OTPScreen = () => <Text>OTP Screen</Text>;
const CreateScreen = () => <Text>OTP Screen</Text>;

const AccountsStack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

interface props {}

const AccountsNavigator: React.FC<props> = () => {
  return (
    <AccountsStack.Navigator
      screenOptions={screenOptions}
      initialRouteName="phone-number">
      <AccountsStack.Screen name="phone-number" component={PhoneNoScreen} />
      <AccountsStack.Screen name="otp" component={OTPScreen} />
      <AccountsStack.Screen name="create" component={CreateScreen} />
      <AccountsStack.Screen name="conditions" component={ConditionsScreen} />
    </AccountsStack.Navigator>
  );
};

export default AccountsNavigator;
