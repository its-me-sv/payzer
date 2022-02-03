import React from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {userReset} from '../../redux/user/user.actions';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(userReset()),
});

const DashBoard = connect(
  null,
  mapDispatchToProps,
)(({logout}) => (
  <View>
    <Text>Dashboard Screen</Text>
    <Button title="logout" onPress={logout} />
  </View>
));

const AppStack = createNativeStackNavigator();

interface props {}

const AppNavigator: React.FC<props> = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="dashboard" component={DashBoard} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
