import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {connect} from 'react-redux';

import {SliderHandler, IconImage} from './styles';
import StartButton from '../start-button/index';
import {LeftArrow, RightArrow} from '../slider-arrows';

import {AppState} from '../../redux/types';
import {moveLeft, moveRight} from '../../redux/slider/slider.actions';

const dot: ImageSourcePropType = require('../../../assets/icons/dot.png');
const dotFilled: ImageSourcePropType = require('../../../assets/icons/dot-filled.png');

interface props {
  ml: Function;
  mr: Function;
  progress: number;
}

const SlideHandler: React.FC<props> = ({ml, mr, progress}) => {
  return (
    <>
      <SliderHandler>
        {progress !== 0 && <LeftArrow pressEvent={ml} />}
        {[...Array(4)].map((_, idx) => (
          <IconImage key={idx} source={progress === idx ? dotFilled : dot} />
        ))}
        {progress !== 3 && <RightArrow pressEvent={mr} />}
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
