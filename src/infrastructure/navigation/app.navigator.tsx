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

import Dashboard from '../../features/dashboard/screens/dashboard.screen';

const AppStack = createNativeStackNavigator();

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
