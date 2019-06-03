import { StyleSheet, Dimensions } from 'react-native';

import { isWeb } from '../../utils/platform';

import { colors } from '../../constants/style';
import fontNames from '../../constants/fontNames';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.background,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  wrapper: {
    flexDirection: isWeb ? 'row' : 'column',
    justifyContent: isWeb ? 'center' : 'flex-start',
    paddingVertical: isWeb ? 50 : 20,
    paddingHorizontal: 20,
    maxWidth: isWeb ? 500 : '100%',
    alignSelf: 'center',
    width: '100%',
  },
  input: {
    marginBottom: 20,
  },
  block: {
    paddingHorizontal: isWeb ? 50 : 0,
    alignSelf: 'stretch',
  },
  checkboxLabelText: {
    maxWidth: screenWidth - 80,
    color: colors.fontSecondary,
    fontFamily: fontNames.TTNorms.medium,
  },
  checkboxLabelLinkText: {
    color: colors.fontBlue,
    fontFamily: fontNames.TTNorms.bold,
  },
  button: {
    marginTop: 30,
  },
  errorMsg: {
    color: colors.error,
    fontFamily: fontNames.TTNorms.regular,
    fontSize: 12,
  },
});

export default styles;
