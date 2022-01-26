import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components/native';

import StartButton from './start-button.component';
import SliderArrow from './slider-arrow.component';

import {AppState} from '../../../redux/types';
import {moveLeft, moveRight} from '../../../redux/slider/slider.actions';

const SliderHandler = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3%;
  margin-left: 2%;
`;

const IconImage = styled.Image`
  width: 12px;
  height: 12px;
  opacity: 0.7;
`;

const ArrowSpace = styled.View`
  width: 25px;
`;

const dot: ImageSourcePropType = require('../../../../assets/icons/dot.png');
const dotFilled: ImageSourcePropType = require('../../../../assets/icons/dot-filled.png');

interface props {
  ml: () => void;
  mr: () => void;
  progress: number;
}

const SlideHandler: React.FC<props> = ({ml, mr, progress}) => {
  return (
    <>
      <SliderHandler>
        {progress !== 0 ? (
          <SliderArrow pressEvent={ml} direction="l" />
        ) : (
          <ArrowSpace />
        )}
        {[...Array(4)].map((_, idx) => (
          <IconImage key={idx} source={progress === idx ? dotFilled : dot} />
        ))}
        {progress !== 3 && <SliderArrow pressEvent={mr} direction="r" />}
      </SliderHandler>
      {progress === 3 && <StartButton />}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  progress: state.slider.progress,
});

const mapDispatchToProps = (dispatch: Function) => ({
  ml: () => dispatch(moveLeft()),
  mr: () => dispatch(moveRight()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SlideHandler);
