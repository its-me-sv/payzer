import {ImageSourcePropType} from 'react-native';

export interface Variant {
  background: ImageSourcePropType;
  clay: ImageSourcePropType;
  header: string;
  footer: string;
  width: string;
  height: string;
  ml: string;
}

const variants: Variant[] = [
  {
    background: require('../../../assets/gradients/grad2.png'),
    clay: require('../../../assets/clays/puzzle-dynamic-color.png'),
    header: 'Simple',
    footer: 'Send and receive money just by simple taps.',
    width: '300px',
    height: '282px',
    ml: '12%',
  },
  {
    background: require('../../../assets/gradients/grad3.png'),
    clay: require('../../../assets/clays/sheild-dynamic-premium.png'),
    header: 'Secure',
    footer: 'Out of the box security for each transaction.',
    width: '280px',
    height: '320px',
    ml: '4%',
  },
  {
    background: require('../../../assets/gradients/grad4.png'),
    clay: require('../../../assets/clays/flash-dynamic-color.png'),
    header: 'Fast',
    footer: 'Super fast transactions under 3 seconds.',
    width: '280px',
    height: '280px',
    ml: '12%',
  },
  {
    background: require('../../../assets/gradients/grad5.png'),
    clay: require('../../../assets/clays/card-combined.png'),
    header: 'Diverse',
    footer: 'Add upto three cards per mobile number.',
    width: '300px',
    height: '338px',
    ml: '4%',
  },
];

export default variants;
