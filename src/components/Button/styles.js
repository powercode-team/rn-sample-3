import { StyleSheet } from 'react-native';

import { colors } from '../../constants/style';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 22,
    paddingVertical: 15,
    maxHeight: 46,
  },
  title: {
    color: colors.white,
    fontSize: 14,
    fontFamily: 'TTNorms-Medium',
  },
});

export default styles;
