import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {connect} from 'react-redux';

import {
  ContainerView,
  BackgroundImageContainer,
  HeaderText,
  FooterText,
  ClayImage,
} from './styles';
import variants, {Variant} from './data';
import {AppState} from '../../redux/types';

interface Props {
  variant: number;
}

const Opener: React.FC<Props> = ({variant}) => {
  const currentVariant: Variant = variants[variant];

  const backgroundImage: ImageSourcePropType = currentVariant.background;
  const iconImage: ImageSourcePropType = currentVariant.clay;

  const dimensions = {
    width: currentVariant.width,
    height: currentVariant.height,
    ml: currentVariant.ml,
  };

  return (
    <ContainerView>
      <BackgroundImageContainer source={backgroundImage}>
        <HeaderText isPurple={variant === 1}>
          {currentVariant.header}
        </HeaderText>
        <ClayImage source={iconImage} dim={dimensions} last={variant === 3} />
        <FooterText isPurple={variant === 1}>
          {currentVariant.footer}
        </FooterText>
      </BackgroundImageContainer>
    </ContainerView>
  );
};

const mapStateToProps = (state: AppState) => ({
  variant: state.slider.progress,
});

export default connect(mapStateToProps)(Opener);
