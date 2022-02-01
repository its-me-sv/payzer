import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AccountParamList = {
  'Phone Number': undefined;
  otp: {phoneNo: string; country: string};
  create: {phoneNo: string; country: string};
  Conditions: undefined;
  features: undefined;
};

export type AccountNavProps<T extends keyof AccountParamList> = {
  navigation: NativeStackNavigationProp<AccountParamList, T>;
  route: RouteProp<AccountParamList, T>;
};
