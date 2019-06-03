import { StyleSheet } from 'react-native';

import { colors } from '../../constants/style';
import fontNames from '../../constants/fontNames';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchable: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.borderGrey,
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
  labelText: {
    fontFamily: fontNames.TTNorms.medium,
    color: colors.fontSecondary,
    fontSize: 16,
  },
  checkIcon: {
    width: 18,
    height: 18,
  },
});

export default styles;
