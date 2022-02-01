import React, {useState, useCallback} from 'react';
import {ImageSourcePropType} from 'react-native';
import {
  launchImageLibrary,
  launchCamera,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import styled from 'styled-components/native';

import {TopMiddleContainer, IconImage, ProfileImage} from './styles';
import {useThemeContext} from '../../../context/theme.context';

const CameraIcon: ImageSourcePropType = require('../../../../assets/icons/camera.png');
const EditIcon: ImageSourcePropType = require('../../../../assets/icons/edit.png');
const DiceBear: string = 'https://avatars.dicebear.com/api/identicon/';

interface props {
  userPhoneNo?: string;
}

const Touchable = styled.TouchableOpacity``;

const imageOptions: ImageLibraryOptions = {
  mediaType: 'photo',
  quality: 0.7,
};

const Images: React.FC<props> = ({userPhoneNo}) => {
  const {dark} = useThemeContext();
  const [usrImg, setUsrImg] = useState<string | undefined>(
    `${DiceBear}${userPhoneNo}.png`,
  );

  const openGallery = useCallback(async () => {
    try {
      const result = await launchImageLibrary(imageOptions);
      if (result?.assets) {
        setUsrImg(result.assets[0].uri);
      }
    } catch (err) {
      console.log(err);
    }
  }, [setUsrImg]);

  const openCamera = useCallback(async () => {
    try {
      const result = await launchCamera(imageOptions);
      if (result?.assets) {
        setUsrImg(result.assets[0].uri);
      }
    } catch (err) {
      console.log(err);
    }
  }, [setUsrImg]);

  return (
    <TopMiddleContainer>
      <Touchable onPress={openCamera}>
        <IconImage source={CameraIcon} dark={dark} />
      </Touchable>
      <ProfileImage source={{uri: usrImg}} dark={dark} />
      <Touchable onPress={openGallery}>
        <IconImage source={EditIcon} dark={dark} />
      </Touchable>
    </TopMiddleContainer>
  );
};

export default Images;
