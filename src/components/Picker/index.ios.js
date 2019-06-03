import React from 'react';
import propTypes from 'prop-types';

import RNPickerSelect from 'react-native-picker-select';

import InputField from '../InputField';

const PickerComponent = ({ items, value, onChange, placeholder, error, ...rest }) => (
  <RNPickerSelect items={items} onValueChange={onChange} value={value} hideIcon>
    <InputField placeholder={placeholder} value={value} error={error} {...rest} />
  </RNPickerSelect>
);

PickerComponent.propTypes = {
  items: propTypes.array.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  error: propTypes.bool,
};

PickerComponent.defaultProps = {
  placeholder: '',
  error: false,
};

export default PickerComponent;
