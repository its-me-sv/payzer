import React, {useState, useCallback} from 'react';
import {View, Button} from 'react-native';

import {
  StyledTextInput,
  ButtonsContainer,
  FooterText,
  TimeContainer,
} from './styles';
import {useThemeContext} from '../../../context/theme.context';
import TimerComponent from './timer.component';

interface props {
  cancel: () => void;
  verify: (otp: string) => void;
}

const OTPInput: React.FC<props> = ({cancel, verify}) => {
  const {dark} = useThemeContext();
  const [otp, setOtp] = useState<string>('');

  const verifyOtp = useCallback(() => {
    otp.length === 10 && verify(otp);
  }, [otp, verify]);

  return (
    <View>
      <StyledTextInput
        placeholder="OTP"
        dark={dark}
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        onSubmitEditing={verifyOtp}
      />
      <TimeContainer>
        <FooterText dark={dark}>Expires in </FooterText>
        <TimerComponent onEnd={cancel} />
      </TimeContainer>
      <ButtonsContainer>
        <Button onPress={cancel} title="Cancel" color="#b73737" />
        <Button
          onPress={verifyOtp}
          title="Verify"
          disabled={otp.length !== 10}
        />
      </ButtonsContainer>
    </View>
  );
};

export default OTPInput;
