import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/style';
import fontNames from '../../../constants/fontNames';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'column',

    marginBottom: 20,
  },
  wrapperResults: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  result: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  resultTitle: {
    fontSize: 14,
    color: colors.fontBlue,
    fontFamily: fontNames.HKGrotesk.light,
  },
  resultValue: {
    fontSize: 14,
    color: colors.fontBlue,
    fontFamily: fontNames.HKGrotesk.medium,
  },
});

export default styles;
