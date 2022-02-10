import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import {View} from 'react-native';

import {AppState, Forex} from '../../../redux/types';
import {useThemeContext} from '../../../context/theme.context';
import {BodyText} from './styles';

interface props {
  currency: string;
  rates: Forex;
  credit?: number;
  debit?: number;
  created_at?: string;
}

const CardStats: React.FC<props> = ({currency, rates, credit, debit}) => {
  const {dark} = useThemeContext();
  const rate = rates[currency.toLowerCase()] || 1;
  const cardCredits = numeral(credit * rate).format('0.0a');
  const cardDebits = numeral(debit * rate).format('0.0a');
  const cardBalance = numeral((credit - debit) * rate).format('0.0a');
  return (
    <View>
      <BodyText dark={dark}>
        Credited: {cardCredits} {currency}
      </BodyText>
      <BodyText dark={dark}>
        Debited: {cardDebits} {currency}
      </BodyText>
      <BodyText dark={dark}>
        Balance: {cardBalance} {currency}
      </BodyText>
    </View>
  );
};

const mapStateToProps = (state: AppState) => ({
  currency: state.user.user?.country?.split('/')[1],
  rates: state.forex.forex,
});

export default connect(mapStateToProps)(CardStats);
