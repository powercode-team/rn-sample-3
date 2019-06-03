import { StyleSheet } from 'react-native';

import { colors } from '../../constants/style';
import fontNames from '../../constants/fontNames';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    height: 28,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 14,
    marginRight: 10,
  },
  active: {
    borderColor: colors.primary,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: colors.primary,
  },
  labelText: {
    fontFamily: fontNames.HKGrotesk.light,
    color: colors.fontSecondary,
    fontSize: 16,
  },
});

export default styles;
