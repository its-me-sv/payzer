import React, {useState} from 'react';
import {View, Button} from 'react-native';

import {
  StyledTextInput,
  ButtonsContainer,
  FooterText,
  TimeContainer,
} from './styles';
import {useThemeContext} from '../../../context/theme.context';
import TimerComponent from './timer.component';

interface props {}

const OTPInput: React.FC<props> = () => {
  const {dark} = useThemeContext();
  const [otp, setOtp] = useState<string>('');
  const onCancel = () => {
    console.log('cancel call');
  };
  const onVerify = () => {
    console.log('verify call');
  };

  return (
    <View>
      <StyledTextInput
        placeholder="OTP"
        dark={dark}
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        onSubmitEditing={() => otp.length === 10 && onVerify()}
      />
      <TimeContainer>
        <FooterText dark={dark}>Expires in </FooterText>
        <TimerComponent />
      </TimeContainer>
      <ButtonsContainer>
        <Button onPress={onCancel} title="Cancel" color="#b73737" />
        <Button
          onPress={onVerify}
          title="Verify"
          disabled={otp.length !== 10}
        />
      </ButtonsContainer>
    </View>
  );
};

export default OTPInput;
