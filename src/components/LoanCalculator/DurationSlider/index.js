import React from 'react';
import propTypes from 'prop-types';

import RCRangeSlider from '../../RCRangeSlider';

import webSliderMarks from '../../../constants/webDurationSliderMarks';

const DurationSliderComponent = ({ value, onChange }) => (
  <RCRangeSlider
    defaultValue={1}
    step={1}
    min={1}
    max={9}
    value={value}
    onChange={val => onChange(val, 9)}
    marks={webSliderMarks}
  />
);

DurationSliderComponent.propTypes = {
  value: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
};

export default DurationSliderComponent;
