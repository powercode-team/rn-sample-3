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
  input: {
    marginBottom: 10,
  },
  wrapperPersonCheckbox: {
    marginTop: 10,
  },
});

export default styles;
