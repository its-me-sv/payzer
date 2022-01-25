/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import Opener from './src/components/opener';
import SliderScreen from './src/components/slider-screens';

const App: React.FC = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 2000);
    console.log('../../../assets/gradients/grad2.png');
  }, []);

  return (
    <SliderScreen />
  );
};

export default App;
