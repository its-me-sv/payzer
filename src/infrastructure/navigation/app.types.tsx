import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {PayzerCard} from '../../redux/types';

export type AppParamList = {
  dashboard: undefined;
  settings: undefined;
  conditions: undefined;
  wallet: undefined;
  'card-detail': {card: PayzerCard; variant: number};
  transfer: undefined;
};

export type AppParamProps<T extends keyof AppParamList> = {
  navigation: NativeStackNavigationProp<AppParamList, T>;
  route: RouteProp<AppParamList, T>;
};
