import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 2000);
  }, []);
  return (
    <View>
      <Text>Its working</Text>
    </View>
  );
};

export default App;
