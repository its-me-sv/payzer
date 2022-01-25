import React from 'react';
import {TouchableOpacity, ImageSourcePropType, Button} from 'react-native';
import {connect} from 'react-redux';

import {SliderHandler, IconImage, ButtonHolder} from './styles';

import {AppState} from '../../redux/types';
import {moveLeft, moveRight} from '../../redux/slider/slider.actions';

const leftArrow: ImageSourcePropType = require('../../../assets/icons/left-arrow.png');
const rightArrow: ImageSourcePropType = require('../../../assets/icons/right-arrow.png');

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
        {progress !== 0 && (
          <TouchableOpacity onPress={ml}>
            <IconImage source={leftArrow} />
          </TouchableOpacity>
        )}
        <IconImage source={dotFilled} />
        <IconImage source={dot} />
        <IconImage source={dot} />
        <IconImage source={dot} />
        {progress !== 3 && (
          <TouchableOpacity onPress={mr}>
            <IconImage source={rightArrow} />
          </TouchableOpacity>
        )}
      </SliderHandler>
      {progress === 3 && (
        <ButtonHolder>
          <Button title="Get started" color="#696262" />
        </ButtonHolder>
      )}
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
