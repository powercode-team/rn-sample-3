import React from 'react';
import propTypes from 'prop-types';
import { Text } from 'react-native';

import styles from './styles';

const ParagraphComponent = ({ text, style }) => <Text style={[styles.text, style]}>{text}</Text>;

ParagraphComponent.propTypes = {
  text: propTypes.string.isRequired,
  style: propTypes.oneOfType([propTypes.object, propTypes.number]),
};

ParagraphComponent.defaultProps = {
  style: {},
};

export default ParagraphComponent;
