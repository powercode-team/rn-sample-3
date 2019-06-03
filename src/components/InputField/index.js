import React from 'react';
import { View, Text, TextInput } from 'react-native';
import propTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../constants/style';

const InputFieldComponent = ({ style, error, ...rest }) => (
  <View>
    <TextInput
      style={[styles.field, { borderColor: error ? colors.error : colors.borderGrey }, style]}
      {...rest}
    />
    {error && error.length && <Text style={styles.errorMsg}>{error}</Text>}
  </View>
);

InputFieldComponent.propTypes = {
  style: propTypes.oneOfType([propTypes.object, propTypes.number]),
  error: propTypes.oneOfType([propTypes.bool, propTypes.string]),
};

InputFieldComponent.defaultProps = {
  style: {},
  error: false,
};

export default InputFieldComponent;
