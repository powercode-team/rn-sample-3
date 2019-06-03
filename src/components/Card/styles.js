import { StyleSheet } from 'react-native';

import { colors, shadows } from '../../constants/style';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    ...shadows.card,
  },
});

export default styles;
