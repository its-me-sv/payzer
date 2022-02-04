import React from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {
  DashboardContainer,
  TitleBar,
  TitleText,
  BodyContainer,
  RowContainer,
  ItemBackground,
  RocketImage,
  ItemText,
  LogoutImage,
  TouchWrapper,
} from '../components/styles';

import {useThemeContext} from '../../../context/theme.context';
import {useTokenContext} from '../../../context/token.context';
import {logoutUser} from '../../../redux/user/user.actions';
import StatsBoard from '../components/stats.component';

import {AppParamProps} from '../../../infrastructure/navigation/app.types';

interface props extends AppParamProps<'dashboard'> {
  logout: (tkn: string) => void;
}

const Dashboard: React.FC<props> = ({logout, navigation}) => {
  const {dark} = useThemeContext();
  const {token, clearSession} = useTokenContext();

  return (
    <DashboardContainer dark={dark}>
      <TitleBar>
        <TitleText dark={dark}>Payzer</TitleText>
        <TouchableOpacity
          onPress={() => {
            logout(token.key);
            clearSession();
          }}>
          <LogoutImage dark={dark} />
        </TouchableOpacity>
      </TitleBar>
      <StatsBoard />
      <BodyContainer>
        <RowContainer>
          <TouchWrapper>
            <ItemBackground
              dark={dark}
              source={require('../../../../assets/gradients/grad2.png')}>
              <RocketImage
                source={require('../../../../assets/clays/rocket.png')}
              />
              <ItemText>Transfer</ItemText>
            </ItemBackground>
          </TouchWrapper>
          <TouchWrapper>
            <ItemBackground
              dark={dark}
              source={require('../../../../assets/gradients/grad1.png')}>
              <RocketImage
                source={require('../../../../assets/clays/book.png')}
              />
              <ItemText>Transactions</ItemText>
            </ItemBackground>
          </TouchWrapper>
        </RowContainer>
        <RowContainer>
          <TouchWrapper>
            <ItemBackground
              dark={dark}
              source={require('../../../../assets/gradients/grad5.png')}>
              <RocketImage
                source={require('../../../../assets/clays/wallet-1.png')}
              />
              <ItemText>Wallet</ItemText>
            </ItemBackground>
          </TouchWrapper>
          <TouchWrapper onPress={() => navigation.navigate('settings')}>
            <ItemBackground
              dark={dark}
              source={require('../../../../assets/gradients/grad4.png')}>
              <RocketImage
                source={require('../../../../assets/clays/tools.png')}
              />
              <ItemText>Settings</ItemText>
            </ItemBackground>
          </TouchWrapper>
        </RowContainer>
      </BodyContainer>
    </DashboardContainer>
  );
};

const mapDispatchToProps = (dispatch: Function) => ({
  logout: (tkn: string) => dispatch(logoutUser(tkn)),
});

export default connect(null, mapDispatchToProps)(Dashboard);
