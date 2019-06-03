import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

import InputField from '../InputField';

import { colors } from '../../constants/style';
import fontNames from '../../constants/fontNames';

const styles = {
  wrapper: {
    position: 'relative',
    marginBottom: '10px',
  },
  select: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    fontFamily: fontNames.HKGrotesk.regular,
    fontSize: '15px',
    opacity: 0,
    zIndex: 1,
  },
  input: {
    width: '100%',
  },
};

const setBorderColor = error => ({ borderColor: error ? colors.error : colors.borderGrey });

class PickerComponent extends PureComponent {
  static propTypes = {
    items: propTypes.array.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    placeholder: propTypes.string,
    error: propTypes.bool,
    style: propTypes.oneOfType([propTypes.number, propTypes.object]),
  };

  static defaultProps = {
    placeholder: '',
    error: false,
    style: {},
  };

  render() {
    const { items, value, onChange, placeholder, error, style } = this.props;

    return (
      <div style={{ ...styles.wrapper, ...style }}>
        <select
          onChange={event => onChange(event.target.value)}
          value={value}
          style={{ ...styles.select }}
        >
          <option value="">{placeholder}</option>
          {items.map(item => (
            <option key={item.value} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
        <InputField
          disabled
          style={{ ...styles.input, ...setBorderColor(error) }}
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
  }
}

export default PickerComponent;
