import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AppParamList = {
  dashboard: undefined;
  settings: undefined;
};

export type AppParamProps<T extends keyof AppParamList> = {
  navigation: NativeStackNavigationProp<AppParamList, T>;
  route: RouteProp<AppParamList, T>;
};
