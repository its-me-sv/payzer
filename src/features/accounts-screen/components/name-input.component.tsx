import React, {useCallback} from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {connect} from 'react-redux';

import {StyledTextInput, ButtonsContainer} from './styles';
import {useThemeContext} from '../../../context/theme.context';
import {useCreateAccContext} from '../../../context/create.context';
import {useAPIContext} from '../../../context/api.context';
import {PayzerUser} from '../../../redux/types';
import {userSuccess} from '../../../redux/user/user.actions';

const ImageTypes: {[key: string]: string} = {
  gif: 'image/gif',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
};

interface props {
  loadingSetter: (val: boolean) => void;
  setUser: (user: PayzerUser) => void;
}

interface ImageResponse {
  secure_url: 'string';
  [key: string]: string;
}

const NameInput: React.FC<props> = ({loadingSetter, setUser}) => {
  const {dark} = useThemeContext();
  const {name, setName, image, country, phoneNo} = useCreateAccContext();
  const {SERVER, REST_API} = useAPIContext();
  const navigation = useNavigation();

  const onCancel = useCallback(() => {
    navigation.replace('Phone Number');
  }, [navigation]);

  const onCreate = useCallback(() => {
    loadingSetter(true);
    const imageFormat: string = image.split('.').slice(-1)[0];
    const userImage = {
      uri: image,
      type: ImageTypes[imageFormat],
      name: `${Date.now()}.${imageFormat}`,
    };
    const ImageData = new FormData();
    ImageData.append('userImage', userImage);
    fetch(`${SERVER}/images/upload`, {
      method: 'POST',
      body: ImageData,
    })
      .then(resp => resp.json())
      .then((data: ImageResponse) => {
        loadingSetter(false);
        const userToPost: PayzerUser = {
          phoneNo,
          country,
          otp: '1234567890',
          name,
          profilePicture: data.secure_url,
        };
        axios
          .post(`${REST_API}/users/create`, userToPost)
          .then(({data: data1}: {data: PayzerUser}) => {
            loadingSetter(false);
            setUser(data1);
          })
          .catch(err => {
            loadingSetter(false);
            console.log(err);
          });
      })
      .catch(err => {
        loadingSetter(false);
        console.log(err);
      });
  }, [REST_API, SERVER, country, image, loadingSetter, name, phoneNo, setUser]);

  return (
    <View>
      <StyledTextInput
        placeholder="Name"
        dark={dark}
        value={name}
        onChangeText={setName}
      />
      <ButtonsContainer>
        <Button title="Cancel" color="#b73737" onPress={onCancel} />
        <Button
          title="Create Account"
          onPress={onCreate}
          disabled={name.length < 3}
        />
      </ButtonsContainer>
    </View>
  );
};

const mapDispatchToProps = (dispatch: Function) => ({
  setUser: (user: PayzerUser) => dispatch(userSuccess(user)),
});

export default connect(null, mapDispatchToProps)(NameInput);
