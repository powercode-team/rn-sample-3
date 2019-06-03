import React from 'react';
import propTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import IconsFontAwesome from '@expo/vector-icons/FontAwesome';

import { colors } from '../../constants/style';
import styles from './styles';

const CheckboxComponent = ({ isChecked, onPress, label }) => (
  <View style={styles.wrapper}>
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.touchable,
        {
          borderColor: isChecked ? colors.transparent : colors.borderGrey,
          backgroundColor: isChecked ? colors.primary : colors.transparent,
        },
      ]}
    >
      {isChecked && <IconsFontAwesome name="check" size={20} color={colors.white} />}
    </TouchableOpacity>
    {typeof label === 'string' ? <Text style={styles.labelText}>{label}</Text> : label}
  </View>
);

CheckboxComponent.propTypes = {
  isChecked: propTypes.bool.isRequired,
  onPress: propTypes.func.isRequired,
  label: propTypes.oneOfType([propTypes.string, propTypes.node]),
};

CheckboxComponent.defaultProps = {
  label: '',
};

export default CheckboxComponent;
