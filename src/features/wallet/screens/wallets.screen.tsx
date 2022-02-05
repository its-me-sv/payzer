import React from 'react';
import {connect} from 'react-redux';

import {AppParamProps} from '../../../infrastructure/navigation/app.types';
import {useThemeContext} from '../../../context/theme.context';
import {AppState} from '../../../redux/types';

import AllCards from '../components/card-holder.component';

import {
  WalletsWrapper,
  HeaderWrapper,
  TitleText,
  Touchable,
  AddImage,
} from '../components/styles';

interface props extends AppParamProps<'wallet'> {
  userId: string;
}

const WalletsScreen: React.FC<props> = () => {
  const {dark} = useThemeContext();
  return (
    <WalletsWrapper dark={dark}>
      <HeaderWrapper>
        <TitleText dark={dark}>Wallet</TitleText>
        <Touchable>
          <AddImage dark={dark} />
        </Touchable>
      </HeaderWrapper>
      <AllCards />
    </WalletsWrapper>
  );
};

const mapStateToProps = (state: AppState) => ({
  userId: state.user.user?.id?.slice(4, -8),
});

export default connect(mapStateToProps)(WalletsScreen);
