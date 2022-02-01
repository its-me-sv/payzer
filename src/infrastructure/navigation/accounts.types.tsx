import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AccountParamList = {
  'Phone Number': undefined;
  otp: undefined;
  create: undefined;
  Conditions: undefined;
  features: undefined;
};

export type AccountNavProps<T extends keyof AccountParamList> = {
  navigation: NativeStackNavigationProp<AccountParamList, T>;
  route: RouteProp<AccountParamList, T>;
};
