import React, {useEffect} from 'react';
import {Button} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';

import Images from '../../accounts-screen/components/images.component';
import {StyledTextInput} from '../../accounts-screen/components/styles';
import {useThemeContext} from '../../../context/theme.context';
import {useCreateAccContext} from '../../../context/create.context';
import {PayzerUser} from '../../../redux/types';
import {updateUser, userSuccess} from '../../../redux/user/user.actions';

import BlockLoader from '../../../components/loader';

import {
  CredContainer,
  CredTitleText,
  Header,
  Body,
  Footer,
  Spacer,
} from './styles';
import {AppState} from '../../../redux/types';
import {useTokenContext} from '../../../context/token.context';
import {useAPIContext} from '../../../context/api.context';
import {
  ImageResponse,
  ImageTypes,
} from '../../accounts-screen/components/name-input.component';

interface props {
  cancel: () => void;
  loaderSetter: (val: boolean) => void;
  userUpdation: (user: PayzerUser) => void;
  setUser: (user: PayzerUser) => void;
  loading: boolean;
  userName: string;
  userPP: string;
  userId: string;
}

const Credentials: React.FC<props> = ({
  cancel,
  userName,
  userPP,
  userId,
  loaderSetter,
  loading,
  userUpdation,
  setUser,
}) => {
  const {dark} = useThemeContext();
  const {token} = useTokenContext();
  const {SERVER, REST_API} = useAPIContext();
  const {name, setName, setImage, image} = useCreateAccContext();

  useEffect(() => {
    loaderSetter(true);
    axios
      .post(
        `${REST_API}/users/retrieve`,
        {
          identifier: 'user_id',
          value: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token.key}`,
          },
        },
      )
      .then(({data}: {data: PayzerUser}) => {
        loaderSetter(false);
        setUser(data);
        setName(data.name);
        setImage(data.profile_picture);
      });
  }, []);

  const onUpdate = async () => {
    loaderSetter(true);
    const headers = {
      Authorization: `Bearer ${token.key}`,
    };
    try {
      const imageCheck = {
        uploaded: false,
        url: image,
      };
      // Check to update image
      if (image !== userPP) {
        // delete existing image
        await axios.delete(`${SERVER}/images/delete`, {
          data: {imageURL: userPP},
        });
        // upload new image
        const imageFormat: string = image.split('.').slice(-1)[0];
        const userImage = {
          uri: image,
          type: ImageTypes[imageFormat],
          name: `${Date.now()}.${imageFormat}`,
        };
        const ImageData = new FormData();
        ImageData.append('userImage', userImage);
        const imageUploadResponse = await fetch(`${SERVER}/images/upload`, {
          method: 'POST',
          body: ImageData,
        });
        const imageUploadData: ImageResponse = await imageUploadResponse.json();
        imageCheck.uploaded = true;
        imageCheck.url = imageUploadData.secure_url;
      }
      // update with new details
      const requestBody: {name?: string; profilePicture?: string} = {};
      const newCreds: PayzerUser = {};
      if (imageCheck.uploaded === true) {
        requestBody.profilePicture = imageCheck.url;
        newCreds.profile_picture = imageCheck.url;
      }
      if (name !== userName) {
        requestBody.name = name;
        newCreds.name = name;
      }
      await axios.put(
        `${REST_API}/users/update/${userId}`,
        {...requestBody},
        {headers},
      );
      userUpdation(newCreds);
    } catch (err) {
      console.log(err);
    }
    loaderSetter(false);
    cancel();
  };

  return (
    <CredContainer dark={dark}>
      {loading && <BlockLoader />}
      <CredTitleText dark={dark}>Edit credentials</CredTitleText>
      <Header>
        <Images />
      </Header>
      <Body>
        <StyledTextInput
          dark={dark}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <Spacer />
      </Body>
      <Footer>
        <Button
          disabled={loading}
          title="CANCEL"
          onPress={cancel}
          color="#b73737"
        />
        <Button
          title="UPDATE"
          disabled={loading || (userName === name && image === userPP)}
          onPress={onUpdate}
        />
      </Footer>
    </CredContainer>
  );
};

const mapStateToProps = (state: AppState) => ({
  userName: state.user.user?.name,
  userPP: state.user.user?.profile_picture,
  userId: state.user.user?.id,
});

const mapDispatchToProps = (dispatch: Function) => ({
  userUpdation: (user: PayzerUser) => dispatch(updateUser(user)),
  setUser: (user: PayzerUser) => dispatch(userSuccess(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Credentials);
