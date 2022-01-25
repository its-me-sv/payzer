import React from 'react';
import {Button} from 'react-native';
import styled from 'styled-components/native';

const ButtonHolder = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 1%;
  margin-right: 4%;
  elevation: 21;
`;

interface props {}

const StartButton: React.FC<props> = () => {
  return (
    <ButtonHolder>
      <Button title="Get started" color="#696262" />
    </ButtonHolder>
  );
};

export default StartButton;
