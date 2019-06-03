import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/style';
import fontNames from '../../../constants/fontNames';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
  },
  wrapperForm: {
    width: '100%',
    flexDirection: 'column',
  },
  title: {
    color: colors.fontPrimary,
    fontSize: 20,
    marginBottom: 20,
    fontFamily: fontNames.TTNorms.medium,
  },
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  icon: {
    color: colors.white,
    fontSize: 20,
  },
  count: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fontNames.TTNorms.medium,
  },
  month: {
    fontSize: 12,
  },
  wrapperResults: {
    flexDirection: 'column',
    paddingHorizontal: 30,
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
    fontFamily: fontNames.TTNorms.medium,
  },
});

export default styles;
