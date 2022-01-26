import React from 'react';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const DashBoard = () => <Text>Dashboard Screen</Text>;

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
