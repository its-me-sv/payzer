import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import axios from 'axios';

import {useTokenContext} from '../../context/token.context';
import {useAPIContext} from '../../context/api.context';
import {AppState, PayzerUser} from '../../redux/types';
import {userSuccess} from '../../redux/user/user.actions';
import {fetchForex} from '../../redux/forex/forex.actions';
import {AppParamList} from './app.types';

import Dashboard from '../../features/dashboard/screens/dashboard.screen';
import SettingsScreen from '../../features/settings/screens/settings.screen';
import ConditionsScreen from '../../components/conditions';
import WalletsScreen from '../../features/wallet/screens/wallets.screen';
import CardDetail from '../../features/wallet/screens/card-detail.screen';
import TransferScreen from '../../features/transfer/screens/transfer.screen';

const AppStack = createNativeStackNavigator<AppParamList>();

interface VerifyResponseData {
  newAccount: boolean;
  user: PayzerUser;
  jwt_token: string;
}

interface props {
  phoneNo: string;
  setUser: (user: PayzerUser) => void;
  getForex: () => void;
}

interface RefreshResponseData {
  jwt_token: string;
}

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'fade',
};

const AppNavigator: React.FC<props> = ({phoneNo, setUser, getForex}) => {
  const {token, setSession} = useTokenContext();
  const {REST_API} = useAPIContext();
  useEffect(() => {
    const startupFunc = () => {
      if (token?.key?.length < 5) {
        axios
          .post(`${REST_API}/auth/verify`, {phoneNo})
          .then(({data}: {data: VerifyResponseData}) => {
            setSession(data.jwt_token);
            setUser(data.user);
            console.log('set from app');
          })
          .catch(err => {
            console.log(token);
            console.log('here', err);
          });
      } else if (Date.now() - token?.iat > 86400000) {
        axios
          .post(
            `${REST_API}/auth/refresh`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token.key}`,
              },
            },
          )
          .then(({data}: {data: RefreshResponseData}) => {
            setSession(data.jwt_token);
            console.log('refreshed');
          })
          .catch(console.log);
      } else {
        console.log('good token');
      }
    };
    console.log(token);
    startupFunc();
  }, [token, setSession]);
  useEffect(() => {
    getForex();
  }, []);
  return (
    <AppStack.Navigator screenOptions={screenOptions}>
      <AppStack.Screen name="dashboard" component={Dashboard} />
      <AppStack.Screen name="settings" component={SettingsScreen} />
      <AppStack.Screen name="conditions" component={ConditionsScreen} />
      <AppStack.Screen name="wallet" component={WalletsScreen} />
      <AppStack.Screen name="card-detail" component={CardDetail} />
      <AppStack.Screen name="transfer" component={TransferScreen} />
    </AppStack.Navigator>
  );
};

const mapStateToProps = (state: AppState) => ({
  phoneNo: state.user.user?.phone_no,
});

const mapDispatchToProps2 = (dispatch: Function) => ({
  setUser: (user: PayzerUser) => dispatch(userSuccess(user)),
  getForex: () => dispatch(fetchForex()),
});

export default connect(mapStateToProps, mapDispatchToProps2)(AppNavigator);
