import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/style';

const styles = StyleSheet.create({
  wrapperDurationValues: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  durationValues: {
    position: 'absolute',
    top: -5,
    fontSize: 12,
    color: colors.fontPrimary,
  },
});

export default styles;
