import React, {useEffect} from 'react';
import {Button} from 'react-native';
import {connect} from 'react-redux';

import Images from '../../accounts-screen/components/images.component';
import {StyledTextInput} from '../../accounts-screen/components/styles';
import {useThemeContext} from '../../../context/theme.context';
import {useCreateAccContext} from '../../../context/create.context';

import {
  CredContainer,
  CredTitleText,
  Header,
  Body,
  Footer,
  Spacer,
} from './styles';
import {AppState} from '../../../redux/types';
interface props {
  cancel: () => void;
  userName: string;
  userPP: string;
}

const Credentials: React.FC<props> = ({cancel, userName, userPP}) => {
  const {dark} = useThemeContext();
  const {name, setName, setImage, image} = useCreateAccContext();

  useEffect(() => {
    setName(userName);
    setImage(userPP);
  }, []);

  return (
    <CredContainer dark={dark}>
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
        <Button title="CANCEL" onPress={cancel} color="#b73737" />
        <Button
          title="UPDATE"
          disabled={userName === name && image === userPP}
        />
      </Footer>
    </CredContainer>
  );
};

const mapStateToProps = (state: AppState) => ({
  userName: state.user.user?.name,
  userPP: state.user.user?.profile_picture,
});

export default connect(mapStateToProps)(Credentials);
