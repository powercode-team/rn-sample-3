import React from 'react';
import propTypes from 'prop-types';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import { colors } from '../../constants/style';

import styles from './styles';

const ButtonComponent = ({ handler, text, containerStyles, isLoading }) => (
  <TouchableOpacity style={[styles.wrapper, containerStyles]} onPress={handler}>
    {isLoading ? (
      <ActivityIndicator size="small" color={colors.white} />
    ) : (
      <Text style={styles.title}>{text.toUpperCase()}</Text>
    )}
  </TouchableOpacity>
);

ButtonComponent.propTypes = {
  handler: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
  containerStyles: propTypes.oneOfType([propTypes.object, propTypes.number]),
  isLoading: propTypes.bool,
};

ButtonComponent.defaultProps = {
  containerStyles: {},
  isLoading: false,
};

export default ButtonComponent;
