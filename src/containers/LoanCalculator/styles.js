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
    paddingVertical: isWeb ? 50 : 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    maxWidth: isWeb ? 500 : '100%',
    alignSelf: 'center',
    width: '100%',
  },
});

export default styles;
