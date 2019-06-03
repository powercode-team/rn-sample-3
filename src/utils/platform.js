import { Platform } from 'react-native';

export const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

export const isWeb = Platform.OS === 'web';
