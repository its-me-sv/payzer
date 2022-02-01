import React, {useState} from 'react';
import {ImageSourcePropType} from 'react-native';
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

const Images: React.FC<props> = ({userPhoneNo}) => {
  const {dark} = useThemeContext();
  const [avatarUrl, setAvatarUrl] = useState<string>(
    `${DiceBear}${userPhoneNo}.png`,
  );
  return (
    <TopMiddleContainer>
      <Touchable onPress={() => console.log('camera press')}>
        <IconImage source={CameraIcon} dark={dark} />
      </Touchable>
      <ProfileImage source={{uri: avatarUrl}} dark={dark} />
      <Touchable onPress={() => console.log('edit press')}>
        <IconImage source={EditIcon} dark={dark} />
      </Touchable>
    </TopMiddleContainer>
  );
};

Images.defaultProps = {
  userPhoneNo: '+919790229904',
};

export default Images;
