import { StyleSheet } from 'react-native';

import { colors } from '../../constants/style';
import fontNames from '../../constants/fontNames';

const styles = StyleSheet.create({
  title: {
    fontFamily: fontNames.HKGrotesk.medium,
    color: colors.fontPrimary,
    fontSize: 20,
    marginBottom: 20,
  },
});

export default styles;
