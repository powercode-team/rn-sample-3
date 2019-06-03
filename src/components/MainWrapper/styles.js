import { StyleSheet } from 'react-native';

import { isWeb } from '../../utils/platform';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  wrapperGradient: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  wrapper: {
    flexDirection: isWeb ? 'row' : 'column',
    paddingVertical: isWeb ? 50 : 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    maxWidth: isWeb ? 500 : '100%',
    alignSelf: 'center',
    width: '100%',
  },
});

export default styles;
