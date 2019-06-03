import React from 'react';
import propTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import CheckIcon from '../../assets/images/icons/check.png';

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
      {isChecked && (
        <Image
          style={styles.checkIcon}
          source={CheckIcon}
          resizeMode="cover"
          resizeMethod="resize"
        />
      )}
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
