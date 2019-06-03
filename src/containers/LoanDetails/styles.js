import { StyleSheet } from 'react-native';

import { colors } from '../../constants/style';
import { isWeb } from '../../utils/platform';

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
    alignSelf: 'stretch',
  },
  input: {
    marginBottom: 10,
  },
  booleanSelect: {
    marginTop: 0,
  },
  textarea: {
    height: 100,
    borderRadius: 12,
  },
});

export default styles;
