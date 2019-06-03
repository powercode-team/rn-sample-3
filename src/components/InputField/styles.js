import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../constants/style';
import fontNames from '../../constants/fontNames';

const styles = StyleSheet.create({
  field: {
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'android' ? 10 : 15,
    borderWidth: 1,
    borderRadius: 22,
    borderColor: colors.borderGrey,
    fontFamily: fontNames.HKGrotesk.regular,
  },
  errorMsg: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    color: colors.error,
    fontFamily: fontNames.TTNorms.regular,
    fontSize: 12,
  },
});

export default styles;
