import { StyleSheet } from 'react-native';

import { isWeb } from '../../utils/platform';
import { colors } from '../../constants/style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.background,
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
  card: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  block: {
    paddingHorizontal: isWeb ? 50 : 0,
    paddingVertical: 20,
    alignSelf: 'stretch',
  },
  input: {
    marginBottom: 5,
  },
  textUnderInput: {
    textAlign: 'right',
  },
  termsText: {
    fontSize: 12,
  },
  buttonWrapper: {
    marginVertical: 20,
  },
  wrapperTable: {
    marginTop: isWeb ? 0 : 50,
  },
});

export default styles;
