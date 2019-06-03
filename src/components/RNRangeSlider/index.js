import React from 'react';

import RNSlider from 'react-native-slider';

import { colors } from '../../constants/style';
import styles from './styles';

const RangeSliderComponent = ({ ...rest }) => (
  <RNSlider
    minimumTrackTintColor={colors.primary}
    maximumTrackTintColor={colors.lightGrey}
    thumbStyle={styles.thumbStyle}
    style={styles.container}
    {...rest}
  />
);

RangeSliderComponent.propTypes = {};

export default RangeSliderComponent;
