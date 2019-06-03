import React from 'react';
import propTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

const CardComponent = ({ children, style }) => <View style={[styles.card, style]}>{children}</View>;

CardComponent.propTypes = {
  children: propTypes.node.isRequired,
  style: propTypes.oneOfType([propTypes.object, propTypes.array, propTypes.number]),
};

CardComponent.defaultProps = {
  style: {},
};

export default CardComponent;
