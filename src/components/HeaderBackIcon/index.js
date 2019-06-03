import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from '../../constants/style';
import styles from './styles';

const HeaderBackIconComponent = () => (
  <View style={styles.wrapper}>
    <Ionicons name="ios-arrow-back" size={28} color={colors.white} />
  </View>
);

export default HeaderBackIconComponent;
