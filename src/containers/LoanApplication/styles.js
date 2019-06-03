import { StyleSheet } from 'react-native';

import { isWeb } from '../../utils/platform';

import { colors } from '../../constants/style';
import fontNames from '../../constants/fontNames';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.background,
  },
  wrapper: {
    flexDirection: isWeb ? 'row' : 'column',
    paddingHorizontal: 20,
    justifyContent: 'center',
    maxWidth: isWeb ? 1000 : '100%',
    alignSelf: 'center',
    width: '100%',
  },
  content: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  wrapperBlock: {
    maxWidth: isWeb ? 350 : 'auto',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
    width: '100%',
  },
  title: {
    marginBottom: 30,
    fontFamily: fontNames.TTNorms.bold,
    fontSize: 30,
    color: colors.fontPrimary,
  },
  sectionTitle: {
    fontFamily: fontNames.HKGrotesk.medium,
    color: colors.fontPrimary,
    fontSize: 20,
    marginBottom: 20,
    width: '100%',
    maxWidth: isWeb ? 350 : 'auto',
  },
  wrapperFields: {
    flexDirection: isWeb ? 'row' : 'column',
    width: '100%',
    alignItems: 'center',
  },
  inputField: {
    maxWidth: isWeb ? 350 : 'auto',
    marginBottom: 10,
  },
  wrapperButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },
  button: {
    marginVertical: 10,
    maxWidth: isWeb ? 250 : 'auto',
  },
});

export default styles;
