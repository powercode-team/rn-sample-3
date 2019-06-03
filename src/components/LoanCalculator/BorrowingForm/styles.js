import { StyleSheet } from 'react-native';

import { isWeb } from '../../../utils/platform';

import { colors } from '../../../constants/style';
import fontNames from '../../../constants/fontNames';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
  },
  cardDuration: {
    paddingBottom: 30,
  },
  title: {
    fontFamily: fontNames.TTNorms.medium,
    color: colors.fontPrimary,
    fontSize: 20,
    marginBottom: 20,
  },
  wrapperAmount: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 20,
    paddingVertical: 18,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.borderGrey,
  },
  amountLabel: {
    position: 'absolute',
    top: -10,
    left: 10,
    paddingHorizontal: 10,
    fontFamily: fontNames.TTNorms.medium,
    fontSize: 16,
    color: colors.fontSecondary,
    backgroundColor: colors.white,
  },
  amountIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  amountValue: {
    fontSize: 16,
    color: colors.fontSecondary,
    fontFamily: fontNames.TTNorms.medium,
  },
  durationSelectedValue: {
    fontSize: 20,
    color: colors.primary,
  },
  wrapperDuration: {
    paddingLeft: isWeb ? 7 : 0,
  },
  wrapperDurationValues: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  durationValues: {
    fontSize: 12,
    color: colors.fontPrimary,
  },
});

export default styles;
