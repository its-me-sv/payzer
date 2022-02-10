import React, {useEffect, useState} from 'react';
import {ImageRequireSource} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CardImage, CardId, TouchWrapper} from './styles';
import {PayzerCard} from '../../../redux/types';
import BlockLoader from '../../../components/loader';
import {useAPIContext} from '../../../context/api.context';
import {useTokenContext} from '../../../context/token.context';

const variants: {[key: string]: ImageRequireSource} = {
  1: require('../../../../assets/clays/card-1.png'),
  2: require('../../../../assets/clays/card-2.png'),
  3: require('../../../../assets/clays/card-3.png'),
};

interface props {
  variant: number;
  cardId: string;
}

const Card: React.FC<props> = ({variant, cardId}) => {
  const {REST_API} = useAPIContext();
  const {token} = useTokenContext();
  const navigation = useNavigation();
  const [card, setCard] = useState<PayzerCard>();
  useEffect(() => {
    fetch(`${REST_API}/cards/card/${cardId}`, {
      headers: {
        Authorization: `Bearer ${token.key}`,
      },
    })
      .then(res => res.json())
      .then((data: PayzerCard) => {
        setCard(data);
      })
      .catch(console.log);
  }, []);
  const handlePress = () => {
    if (!card) {
      return;
    }
    navigation.navigate('card-detail' as never, {card, variant} as never);
  };
  return (
    <TouchWrapper onPress={handlePress}>
      <CardImage source={variants[variant]}>
        {!card ? (
          <BlockLoader />
        ) : (
          <>
            <CardId>{card.id.slice(4, -8).replace(/-/gi, '')}</CardId>
          </>
        )}
      </CardImage>
    </TouchWrapper>
  );
};

export default Card;
