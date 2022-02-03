import React from 'react';
import styled from 'styled-components/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import Opener from '../components/opener';
import SlideHandler from '../components/slider-handler.component';

import {useThemeContext} from '../../../context/theme.context';
import {AccountParamList} from '../../../infrastructure/navigation/accounts.types';

const AccountsStack2 = createNativeStackNavigator<AccountParamList>();

const getScreenOptions = (dark: boolean): NativeStackNavigationOptions => ({
  headerShown: false,
  headerTintColor: dark ? '#e5e1e2' : '#222021',
  headerStyle: {
    backgroundColor: !dark ? '#e5e1e2' : '#222021',
  },
});

interface props {}

interface Theme {
  dark: boolean;
}

const SliderContainer = styled.View<Theme>`
  flex: 1;
  background-color: #e5e1e2;
  ${({dark}) => dark && 'background-color: #222021;'}
`;

const Slider: React.FC<props> = () => {
  const {dark} = useThemeContext();
  return (
    <SliderContainer dark={dark}>
      <Opener />
      <SlideHandler />
    </SliderContainer>
  );
};

const SliderScreen: React.FC<props> = () => {
  const {dark} = useThemeContext();
  return (
    <AccountsStack2.Navigator screenOptions={() => getScreenOptions(dark)}>
      <AccountsStack2.Screen
        name="features"
        component={Slider}
        options={{animation: 'fade'}}
      />
    </AccountsStack2.Navigator>
  );
};

export default SliderScreen;
