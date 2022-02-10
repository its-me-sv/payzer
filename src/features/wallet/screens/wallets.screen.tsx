import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-native';

import {AppParamProps} from '../../../infrastructure/navigation/app.types';
import {useThemeContext} from '../../../context/theme.context';
import {AppState, PayzerCard} from '../../../redux/types';

import BlockLoader from '../../../components/loader';
import AllCards from '../components/card-holder.component';
import {fetchCards} from '../../../redux/cards/card.actions';
import {useTokenContext} from '../../../context/token.context';

import {
  WalletsWrapper,
  HeaderWrapper,
  TitleText,
  Touchable,
  AddImage,
} from '../components/styles';

interface props extends AppParamProps<'wallet'> {
  userId: string;
  cardsPending: boolean;
  getCards: (id: string, tkn: string) => void;
  cards: Array<PayzerCard>;
}

const WalletsScreen: React.FC<props> = ({
  cardsPending,
  getCards,
  userId,
  cards,
}) => {
  const {token} = useTokenContext();
  useEffect(() => {
    getCards(userId, token.key);
  }, []);
  const addNewCard = () => {};
  const {dark} = useThemeContext();
  return (
    <WalletsWrapper dark={dark}>
      {cardsPending && <BlockLoader />}
      <HeaderWrapper>
        <TitleText dark={dark}>Wallet</TitleText>
        <Touchable>
          <AddImage dark={dark} />
        </Touchable>
      </HeaderWrapper>
      <AllCards />
      {cards.length < 3 && <Button title="Add Card" onPress={addNewCard} />}
    </WalletsWrapper>
  );
};

const mapStateToProps = (state: AppState) => ({
  userId: state.user.user?.id,
  cardsPending: state.cards.pending,
  cards: state.cards.cards,
});

const mapDispatchToProps = (dispatch: Function) => ({
  getCards: (id: string, tkn: string) => dispatch(fetchCards(id, tkn)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletsScreen);
