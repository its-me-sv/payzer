import React from 'react';
import {ImageRequireSource} from 'react-native';

import {AppParamProps} from '../../../infrastructure/navigation/app.types';
import {useThemeContext} from '../../../context/theme.context';
import CardStats from '../components/card-stats.component';
import prettyDate from '../../../utils/pretty-date.util';
import {
  HeaderWrapper1,
  DetailsWrapper,
  TitleText,
  CardId1,
  HeaderCard,
  Body,
  ChartImage,
  IssuedText,
  TouchWrapper1,
  BookImage,
  ItemText,
} from '../components/styles';

const variants1: {[key: string]: ImageRequireSource} = {
  1: require('../../../../assets/clays/card-11.png'),
  2: require('../../../../assets/clays/card-22.png'),
  3: require('../../../../assets/clays/card-33.png'),
};

const chartsVariant: {[key: string]: ImageRequireSource} = {
  1: require('../../../../assets/clays/chart11.png'),
  2: require('../../../../assets/clays/chart22.png'),
  3: require('../../../../assets/clays/chart33.png'),
};

const booksVariant: {[key: string]: ImageRequireSource} = {
  1: require('../../../../assets/clays/book1.png'),
  2: require('../../../../assets/clays/book2.png'),
  3: require('../../../../assets/clays/book3.png'),
};

interface props extends AppParamProps<'card-detail'> {}

const CardDetail: React.FC<props> = ({route}) => {
  const {dark} = useThemeContext();
  const {card, variant} = route.params;

  return (
    <DetailsWrapper dark={dark}>
      <HeaderWrapper1>
        <TitleText dark={dark}>Card Details</TitleText>
        <CardId1 dark={dark}>{card.id.slice(4, -8).replace(/-/gi, '')}</CardId1>
      </HeaderWrapper1>
      <HeaderCard source={variants1[variant]} />
      <Body dark={dark}>
        <CardStats credit={card.credit} debit={card.debit} />
        <ChartImage source={chartsVariant[variant]} />
      </Body>
      <IssuedText dark={dark}>
        Issued on: {prettyDate(card.created_at)}
      </IssuedText>
      <TouchWrapper1>
        <BookImage source={booksVariant[variant]} />
        <ItemText dark={dark}>Transactions</ItemText>
      </TouchWrapper1>
    </DetailsWrapper>
  );
};

export default CardDetail;
