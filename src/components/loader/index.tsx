import React from 'react';
import styled from 'styled-components/native';

import {useThemeContext} from '../../context/theme.context';

interface theme {
  dark: boolean;
}

const FrontRaiser = styled.View<theme>`
  flex: 1;
  position: absolute;
  z-index: 999;
  background-color: #222021;
  ${({dark}) => dark && 'background-color: #e5e1e2;'}
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
`;

const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#222021',
})``;

interface props {}

const BlockLoader: React.FC<props> = () => {
  const {dark} = useThemeContext();
  return (
    <FrontRaiser dark={dark}>
      <ActivityIndicator />
    </FrontRaiser>
  );
};

export default BlockLoader;
