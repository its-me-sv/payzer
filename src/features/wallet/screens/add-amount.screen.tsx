import React, {useState} from 'react';
import {Button} from 'react-native';
import {connect} from 'react-redux';
import {Picker} from '@react-native-picker/picker';

import {
  AddAmountView,
  AddAmountContainer,
  ButtonsContainer,
  ModalTitle,
  AmountInput,
  PickerHolder,
} from '../components/styles';
import {useThemeContext} from '../../../context/theme.context';
import {AppState, PayzerCard} from '../../../redux/types';

interface props {
  setModal: (val: boolean) => void;
  cards: Array<PayzerCard>;
  currency: string;
}

const AddAmount: React.FC<props> = ({setModal, cards, currency}) => {
  const {dark} = useThemeContext();
  const [selectedCard, setSelectedCard] = useState<string>(cards[0].id);
  const [amount, setAmount] = useState<string>('');

  const onDeposit = () => {
    console.log(selectedCard, amount);
  };

  return (
    <AddAmountView dark={dark}>
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
});

export default connect(mapStateToProps)(AddAmount);
