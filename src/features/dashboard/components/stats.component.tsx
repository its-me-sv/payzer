import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import numeral from 'numeral';

import {Header, HeaderText, ClayChart} from './styles';
import {useThemeContext} from '../../../context/theme.context';
import {AppState, Forex} from '../../../redux/types';

interface props {
  credits: number;
  debits: number;
  cards: number;
  currency: string;
  rates: Forex;
}

const StatsBoard: React.FC<props> = ({
  credits,
  debits,
  cards,
  currency,
  rates,
}) => {
  const {dark} = useThemeContext();
  const rate = rates[currency.toLowerCase()] || 1;
  const userCredits = numeral(credits * rate).format('0.0a');
  const userDebits = numeral(debits * rate).format('0.0a');
  const userCards = numeral(cards).value();
  const userBalance = numeral((credits - debits) * rate).format('0.0a');

  return (
    <Header dark={dark}>
      <View>
        <HeaderText>
          Credited: {userCredits} {currency}
        </HeaderText>
        <HeaderText>
          Debited: {userDebits} {currency}
        </HeaderText>
        <HeaderText>Cards: {userCards}</HeaderText>
        <HeaderText>
          Balance: {userBalance} {currency}
        </HeaderText>
      </View>
      <ClayChart />
    </Header>
  );
};

const mapStateToProps = (state: AppState) => ({
  credits: state.user.user?.credit,
  debits: state.user.user?.debit,
  cards: state.user.user?.card_count,
  currency: state.user.user?.country?.split('/')[1],
  rates: state.forex.forex || {},
});

export default connect(mapStateToProps)(StatsBoard);
