import React from 'react';
import {Button} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components/native';

import {setStarted} from '../../../redux/slider/slider.actions';

const ButtonHolder = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 2%;
  margin-right: 4%;
  elevation: 21;
`;

interface props {
  notNew: (val: boolean) => void;
}

const StartButton: React.FC<props> = ({notNew}) => {
  return (
    <ButtonHolder>
      <Button
        onPress={() => notNew(true)}
        title="Get started"
        color="#696262"
      />
    </ButtonHolder>
  );
};

const mapDispatchToProps = (dispatch: Function) => ({
  notNew: (val: boolean) => dispatch(setStarted(val)),
});

export default connect(null, mapDispatchToProps)(StartButton);
