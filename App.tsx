/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageSourcePropType,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const backgroundImage: ImageSourcePropType = require('./assets/gradients/grad2.png');
const iconImage: ImageSourcePropType = require('./assets/clays/puzzle-dynamic-color.png');

const App: React.FC = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}>
          <Text style={styles.headerText}>Simple</Text>
          <Image source={iconImage} style={styles.clayImage}/>
          <Text style={styles.footerText}>Send and receive money just by simple taps.</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clayImage: {
    width: 240,
    height: 240,
    resizeMode: 'stretch',
    margin: 42,
    marginRight: 0,
  },
  headerText: {
    fontFamily: 'calibri',
    fontSize: 77,
    color: '#453b3c',
  },
  footerText: {
    fontFamily: 'bahnschrift',
    fontSize: 24,
    color: '#453b3c',
    textAlign: 'center',
    opacity: 0.7,
  },
});

export default App;
