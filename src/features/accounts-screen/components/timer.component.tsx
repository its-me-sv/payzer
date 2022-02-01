import React, {useState, useEffect, useRef} from 'react';

import {FooterText} from './styles';
import {useThemeContext} from '../../../context/theme.context';

interface props {
  onEnd: () => void;
}

const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

const TimerComponent: React.FC<props> = ({onEnd}) => {
  const {dark} = useThemeContext();
  const [millis, setMillis] = useState<number>(0.1 * 60 * 1000);
  const interval: {current: NodeJS.Timeout | null} = useRef(null);

  const deduce = () => {
    setMillis(time => time - 1000);
  };

  if (!millis) {
    clearInterval(interval.current as NodeJS.Timeout);
    onEnd();
  }

  useEffect(() => {
    interval.current = setInterval(deduce, 1000);
    return () => clearInterval(interval.current as NodeJS.Timeout);
  }, []);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <FooterText dark={dark}>
      {formatTime(minute)}:{formatTime(seconds)}
    </FooterText>
  );
};

export default TimerComponent;
