import React, {useState, useEffect, useRef} from 'react';

import {FooterText} from './styles';
import {useThemeContext} from '../../../context/theme.context';

interface props {}

const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

const TimerComponent: React.FC<props> = () => {
  const {dark} = useThemeContext();
  const [millis, setMillis] = useState<number>(0.1 * 60 * 1000);
  const interval: {current: NodeJS.Timeout | null} = useRef(null);

  const deduce = () => {
    setMillis(time => {
      if (!time) {
        clearInterval(interval.current as NodeJS.Timeout);
        console.log('Time over');
        return time;
      }
      return time - 1000;
    });
  };

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
