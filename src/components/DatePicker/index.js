import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

import moment from 'moment';

import { colors } from '../../constants/style';
import fontNames from '../../constants/fontNames';

const styles = {
  padding: '15px 20px',
  border: `1px solid ${colors.borderGrey}`,
  marginTop: '20px',
  borderRadius: 22,
  fontFamily: fontNames.HKGrotesk.regular,
  fontSize: '14px',
  outline: 'none',
  maxHeight: '17px',
};

const setBorderColor = error => ({ borderColor: error ? colors.error : colors.borderGrey });

class DatePickerComponent extends PureComponent {
  static propTypes = {
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    error: propTypes.bool,
  };

  static defaultProps = {
    error: false,
  };

  state = {
    type: 'text',
  };

  setInputType = isDate => {
    this.setState({ type: isDate ? 'date' : 'text' });
  };

  render() {
    const { value, onChange, error } = this.props;
    const { type } = this.state;

    return (
      <input
        onFocus={() => this.setInputType(true)}
        onBlur={() => this.setInputType(false)}
        onChange={onChange}
        value={type === 'text' && value ? moment(value).format('DD.MM.GGGG') : value}
        style={{ ...styles, ...setBorderColor(error) }}
        type={type}
        placeholder="Date of Birth"
      />
    );
  }
}

export default DatePickerComponent;
