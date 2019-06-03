import { StyleSheet } from 'react-native';

import { colors } from '../../constants/style';
import fontNames from '../../constants/fontNames';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: colors.fontBlue,
    fontFamily: fontNames.HKGrotesk.light,
  },
});

export default styles;
