import React, {useState} from 'react';
import {View, Button} from 'react-native';

import {StyledTextInput, ButtonsContainer} from './styles';
import {useThemeContext} from '../../../context/theme.context';

interface props {}

const NameInput: React.FC<props> = () => {
  const {dark} = useThemeContext();
  const [name, setName] = useState<string>('');
  const onCancel = () => {
    console.log('cancel call');
  };
  const onCreate = () => {
    console.log('create call');
  };

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
        <Button title="Create Account" onPress={onCreate} />
      </ButtonsContainer>
    </View>
  );
};

export default NameInput;
