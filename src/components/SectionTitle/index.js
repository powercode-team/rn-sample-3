import React from 'react';
import propTypes from 'prop-types';
import { Text } from 'react-native';

import styles from './styles';

const SectionTitleComponent = ({ title }) => <Text style={styles.title}>{title}</Text>;

SectionTitleComponent.propTypes = {
  title: propTypes.string.isRequired,
};

export default SectionTitleComponent;
