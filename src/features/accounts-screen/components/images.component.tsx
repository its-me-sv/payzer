import React, {useCallback, useEffect} from 'react';
import {ImageSourcePropType} from 'react-native';
import {
  launchImageLibrary,
  launchCamera,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import styled from 'styled-components/native';

import {TopMiddleContainer, IconImage, ProfileImage} from './styles';
import {useThemeContext} from '../../../context/theme.context';
import {useCreateAccContext} from '../../../context/create.context';

const CameraIcon: ImageSourcePropType = require('../../../../assets/icons/camera.png');
const EditIcon: ImageSourcePropType = require('../../../../assets/icons/edit.png');
const DiceBear: string = 'https://avatars.dicebear.com/api/identicon/';

interface props {}

const Touchable = styled.TouchableOpacity``;

const imageOptions: ImageLibraryOptions = {
  mediaType: 'photo',
  quality: 0.7,
};

const Images: React.FC<props> = () => {
  const {dark} = useThemeContext();
  const {phoneNo, setImage, image} = useCreateAccContext();

  useEffect(() => {
    setImage(`${DiceBear}${phoneNo}.png`);
  }, [setImage, phoneNo]);

  const openGallery = useCallback(async () => {
    try {
      const result = await launchImageLibrary(imageOptions);
      if (result?.assets) {
        setImage(result.assets[0].uri as string);
      }
    } catch (err) {
      console.log(err);
    }
  }, [setImage]);

  const openCamera = useCallback(async () => {
    try {
      const result = await launchCamera(imageOptions);
      if (result?.assets) {
        setImage(result.assets[0].uri as string);
      }
    } catch (err) {
      console.log(err);
    }
  }, [setImage]);

  return (
    <TopMiddleContainer>
      <Touchable onPress={openCamera}>
        <IconImage source={CameraIcon} dark={dark} />
      </Touchable>
      <ProfileImage source={{uri: image}} dark={dark} />
      <Touchable onPress={openGallery}>
        <IconImage source={EditIcon} dark={dark} />
      </Touchable>
    </TopMiddleContainer>
  );
};

export default Images;
