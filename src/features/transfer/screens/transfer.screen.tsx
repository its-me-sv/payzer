import React from 'react';

import {AppParamProps} from '../../../infrastructure/navigation/app.types';
import {useThemeContext} from '../../../context/theme.context';
// import BlockLoader from '../../../components/loader';
import Contact from '../components/contact.component';

import {
  StyledTextInput,
  TransferContainer,
  TitleText,
  ContactsContainer,
} from '../components/styles';

interface props extends AppParamProps<'transfer'> {}

const TransferScreen: React.FC<props> = () => {
  const {dark} = useThemeContext();
  return (
    <TransferContainer dark={dark}>
      {/* <BlockLoader /> */}
      <TitleText dark={dark}>Transfer</TitleText>
      <StyledTextInput dark={dark} placeholder="Name or mobile number" />
      <ContactsContainer>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </ContactsContainer>
    </TransferContainer>
  );
};

export default TransferScreen;
