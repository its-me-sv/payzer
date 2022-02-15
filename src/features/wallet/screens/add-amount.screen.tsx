import React, {useState} from 'react';
import {Button} from 'react-native';
import {connect} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

import {
  AddAmountView,
  AddAmountContainer,
  ButtonsContainer,
  ModalTitle,
  AmountInput,
  PickerHolder,
} from '../components/styles';
import BlockLoader from '../../../components/loader';
import {useThemeContext} from '../../../context/theme.context';
import {useTokenContext} from '../../../context/token.context';
import {useAPIContext} from '../../../context/api.context';
import {AppState, Forex, PayzerCard} from '../../../redux/types';

interface props {
  setModal: (val: boolean) => void;
  cards: Array<PayzerCard>;
  currency: string;
  rates: Forex;
  userId: string;
}

const AddAmount: React.FC<props> = ({
  setModal,
  cards,
  currency,
  rates,
  userId,
}) => {
  const {dark} = useThemeContext();
  const {token} = useTokenContext();
  const {REST_API} = useAPIContext();
  const [selectedCard, setSelectedCard] = useState<string>(cards[0].id);
  const [amount, setAmount] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const onDeposit = () => {
    setLoading(true);

    const rate = rates[currency.toLowerCase()] || 1;
    const finalAmount = +(Number(amount) / rate).toFixed(3);

    const headers = {
      Authorization: `Bearer ${token.key}`,
    };

    const requestBody = {
      user_id: userId,
      card_id: selectedCard,
      amount: finalAmount,
    };

    axios
      .put(`${REST_API}/cards/add-amount`, {...requestBody}, {headers})
      .then(() => {
        setLoading(false);
        setModal(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <AddAmountView dark={dark}>
      {loading && <BlockLoader />}
      <AddAmountContainer dark={dark}>
        <ModalTitle dark={dark}>Add Amount To Card</ModalTitle>
        <PickerHolder dark={dark}>
          <Picker selectedValue={selectedCard} onValueChange={setSelectedCard}>
            {cards.map(card => (
              <Picker.Item
                key={card.id}
                label={card.id.slice(4, -8).replace(/-/gi, '')}
                value={card.id}
              />
            ))}
          </Picker>
        </PickerHolder>
        <AmountInput
          placeholder={`Amount (${currency})`}
          dark={dark}
          value={amount}
          onChangeText={setAmount}
        />
        <ButtonsContainer>
          <Button
            color="#b73737"
            title="cancel"
            onPress={() => setModal(false)}
          />
          <Button
            disabled={!amount || !Number(amount)}
            title="Deposit"
            onPress={onDeposit}
          />
        </ButtonsContainer>
      </AddAmountContainer>
    </AddAmountView>
  );
};

const mapStateToProps = (state: AppState) => ({
  cards: state.cards.cards,
  currency: state.user.user?.country?.split('/')[1],
  rates: state.forex.forex,
  userId: state.user.user?.id,
});

export default connect(mapStateToProps)(AddAmount);
