import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {ProfileImage, ContactContainer, ContactText} from './styles';
import {useThemeContext} from '../../../context/theme.context';

interface props {}

const Contact: React.FC<props> = () => {
  const {dark} = useThemeContext();
  return (
    <TouchableOpacity>
      <ContactContainer>
        <ProfileImage
          source={{
            uri: 'https://res.cloudinary.com/djeteilo6/image/upload/v1644831572/payzer/l7luxkv1l8tdnionqv43.jpg',
          }}
          dark={dark}
        />
        <View>
          <ContactText dark={dark}>Suraj Vijay</ContactText>
          <ContactText dark={dark}>+919790229904</ContactText>
        </View>
      </ContactContainer>
    </TouchableOpacity>
  );
};

export default Contact;
