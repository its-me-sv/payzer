import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';

import {logoutUser} from '../../redux/user/user.actions';
import {useTokenContext} from '../../context/token.context';
import {useAPIContext} from '../../context/api.context';
import {AppState, PayzerUser} from '../../redux/types';
import {userSuccess} from '../../redux/user/user.actions';

const mapDispatchToProps = (dispatch: Function) => ({
  logout: (tkn: string) => dispatch(logoutUser(tkn)),
});

const DashBoard = connect(
  null,
  mapDispatchToProps,
)(({logout}) => {
  const {token} = useTokenContext();
  return (
    <View>
      <Text>Dashboard Screen</Text>
      <Button
        title="logout"
        onPress={() => {
          logout(token.key);
        }}
      />
    </View>
  );
});

const AppStack = createNativeStackNavigator();

interface VerifyResponseData {
  newAccount: boolean;
  user: PayzerUser;
  jwt_token: string;
}

interface props {
  phoneNo: string;
  setUser: (user: PayzerUser) => void;
}

interface RefreshResponseData {
  jwt_token: string;
}

const AppNavigator: React.FC<props> = ({phoneNo, setUser}) => {
  const {token, setSession} = useTokenContext();
  const {REST_API} = useAPIContext();
  useEffect(() => {
    if (token?.key.length < 5) {
      axios
        .post(`${REST_API}/auth/verify`, {phoneNo})
        .then(({data}: {data: VerifyResponseData}) => {
          setSession(data.jwt_token);
          setUser(data.user);
          console.log('success');
        })
        .catch(err => {
          console.log('here', err);
        });
    } else if (Date.now() - token?.iat > 5000) {
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
    }
  }, []);
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="dashboard" component={DashBoard} />
    </AppStack.Navigator>
  );
};

const mapStateToProps = (state: AppState) => ({
  phoneNo: state.user.user?.phone_no,
});

const mapDispatchToProps2 = (dispatch: Function) => ({
  setUser: (user: PayzerUser) => dispatch(userSuccess(user)),
});

export default connect(mapStateToProps, mapDispatchToProps2)(AppNavigator);
