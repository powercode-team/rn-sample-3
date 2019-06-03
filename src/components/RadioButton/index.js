import React from 'react';
import propTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const RadioButtonComponent = ({ isActive, onPress, labelText }) => (
  <TouchableOpacity onPress={onPress} style={styles.wrapper}>
    <View style={styles.wrapperCircle}>{isActive && <View style={styles.circle} />}</View>
    <Text style={styles.labelText}>{labelText}</Text>
  </TouchableOpacity>
);

RadioButtonComponent.propTypes = {
  isActive: propTypes.bool.isRequired,
  onPress: propTypes.func.isRequired,
  labelText: propTypes.string,
};

RadioButtonComponent.defaultProps = {
  labelText: '',
};

export default RadioButtonComponent;
